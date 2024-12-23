import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { producto, price, description, stock, email } = req.body;

    if (!producto || !price || !description || !stock || !email) {
      return res.status(400).json({
        status: "error",
        message: "Es necesario completar todos los campos: producto, precio, descripción, stock y correo electrónico.",
      });
    }

    const newProduct = await Product.create({
      producto,
      price,
      description,
      stock,
      email,
    });

    res.status(201).json({
      status: "success",
      message: "Producto creado con éxito.",
      product: newProduct,
    });
  } catch (error) {
    console.error("Ocurrió un error al crear el producto:", error.message);
    res.status(500).json({
      status: "error",
      message: "Se presentó un problema al crear el producto.",
    });
  }
};


export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; 
   
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "No se ha encontrado el producto.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Producto eliminado con éxito.",
    });
  } catch (error) {
    console.error("Hubo un problema al eliminar el producto:", error.message);
    res.status(500).json({
      status: "error",
      message: "Se presentó un error al eliminar el producto.",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; 
    const { producto, price, description, stock, email } = req.body;  

    if (!producto && !price && !description && !stock && !email) {
      return res.status(400).json({
        status: "error",
        message: "Debe proporcionarse al menos un campo para la actualización.",
      });
    }


    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { producto, price, description, stock, email },
      { new: true } 
    );

    if (!updatedProduct) {
      return res.status(404).json({
        status: "error",
        message: "No se ha podido localizar el producto.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Producto actualizado correctamente.",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Hubo un problema al actualizar el producto:", error.message);
    res.status(500).json({
      status: "error",
      message: "Se presentó un error al intentar actualizar el producto.",
    });
  }
};
