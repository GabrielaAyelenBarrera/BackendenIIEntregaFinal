import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import Ticket from "../models/Ticket.js";

class CartController {
   static async createCart(req, res) {
    try {
      const newCart = await Cart.create({ products: [] });
      return res.status(201).json({
        status: "success",
        message: "El carrito se generó correctamente.",
        cart: newCart,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Fallo al intentar generar el carrito.",
        error: error.message,
      });
    }
  }

   static async addToCart(req, res) {
    try {
      const { cartId, products } = req.body;

       const cart = await Cart.findById(cartId);
      if (!cart) {
        return res.status(404).json({
          status: "error",
          message: "No se ha encontrado el carrito.",
        });
      }

      const outOfStockProducts = []; 
      for (const item of products) {
        const product = await Product.findById(item.product);
        if (!product) {
          return res.status(404).json({
            status: "error",
            message: `Producto con ID ${item.product} no localizado .`,
          });
        }

         if (product.stock < item.quantity) {
          outOfStockProducts.push({
            product: product.name,
            stockAvailable: product.stock,
            requested: item.quantity,
          });
        } else {
           const productInCart = cart.products.find((p) => p.product.equals(item.product));
          if (productInCart) {
            productInCart.quantity += item.quantity;
          } else {
            cart.products.push(item);
          }
        }
      }

       if (outOfStockProducts.length > 0) {
        return res.status(400).json({
          status: "error",
          message: "Varios productos cuentan con insuficiente stock .",
          outOfStockProducts,
        });
      }

       await cart.save();

      return res.status(200).json({
        status: "success",
        message: "Artículos añadidos al carrito con exito.",
        cart,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Hubo un problema al añadir productos al carrito.",
        error: error.message,
      });
    }
  }

   static async purchaseCart(req, res) {
    try {
      const { cartId, email } = req.body;

      const cart = await Cart.findById(cartId).populate("products.product");

      if (!cart) {
        return res.status(404).json({
          status: "error",
          message: "No se pudo localizar el carrito.",
        });
      }

       let totalAmount = 0;
      const outOfStockProducts = [];
      for (const item of cart.products) {
        if (item.product.stock < item.quantity) {
          outOfStockProducts.push(item.product.name);
        } else {
          totalAmount += item.product.price * item.quantity;
          item.product.stock -= item.quantity;
          await item.product.save();
        }
      }

      if (outOfStockProducts.length > 0) {
        return res.status(400).json({
          status: "error",
          message: "Varios productos no tienen la cantidad de stock disponible.",
          products: outOfStockProducts,
        });
      }

       const ticket = await Ticket.create({
        code: `TICKET-${Date.now()}`,
        amount: totalAmount,
        purchaser: email || "guest",
      });

       cart.products = [];
      await cart.save();

      return res.status(200).json({
        message: "Compra completada satisfactoriamente.",
        ticket,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Hubo un problema al procesar la compra.",
        error: error.message,
      });
    }
  }
}

export default CartController;
