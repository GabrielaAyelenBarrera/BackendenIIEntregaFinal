import express from "express"; // Importa el framework Express para crear el servidor
import mongoose from "mongoose"; // Importa Mongoose para interactuar con la base de datos MongoDB
import passport from "passport"; // Importa Passport para la autenticación
import configurePassport from "./config/passport.js"; // Importa la configuración de Passport personalizada
import productRoutes from "./routes/productRoutes.js"; // Importa las rutas relacionadas con los productos
import cartRoutes from "./routes/cartRoutes.js"; // Importa las rutas relacionadas con los carritos
import ticketRoutes from "./routes/ticketRoutes.js"; // Importa las rutas relacionadas con los tickets
import dotenv from "dotenv"; // Importa dotenv para manejar las variables de entorno

dotenv.config({ path: "./src/.env" }); // Configura dotenv para leer las variables de entorno desde el archivo .env

const app = express(); // Crea una instancia de Express

console.log("JWT_SECRET:", process.env.JWT_SECRET); // Imprime el valor de la variable JWT_SECRET
console.log("MONGO_URI:", process.env.MONGO_URI); // Imprime la URI de la base de datos MongoDB

const PORT = process.env.PORT || 8080; // Define el puerto del servidor, utilizando el valor de la variable de entorno o el puerto 8080 por defecto

app.use(express.json()); // Middleware para analizar los cuerpos de las solicitudes con formato JSON
app.use(express.urlencoded({ extended: true })); // Middleware para analizar los cuerpos de las solicitudes con datos codificados en URL

// Conecta con la base de datos MongoDB utilizando la URI almacenada en las variables de entorno
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Se ha logrado conectar exitosamente a la BD"); // Imprime un mensaje si la conexión es exitosa
  })
  .catch((error) => {
    console.error("Fallo al intentar conectar a la BD:", error.message); // Imprime un mensaje de error si la conexión falla
    process.exit(1); // Termina el proceso si la conexión falla
  });

// Configura Passport para manejar la autenticación
configurePassport();
app.use(passport.initialize()); // Inicializa Passport en la aplicación Express

// Ruta protegida, solo accesible con autenticación JWT
app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }), // Usa el middleware de Passport para autenticar con JWT
  (req, res) => {
    res.json({
      message: "Acceso permitido a la ruta restringida.", // Responde si el acceso es permitido
      user: req.user, // Devuelve los datos del usuario autenticado
    });
  }
);

// Ruta pública para verificar que el servidor está funcionando correctamente
app.get("/", (req, res) => {
  res.send("Hola la conección al servidor esta en correcta"); // Responde con un mensaje si la conexión al servidor está activa
});

// Rutas para manejar productos, carritos y tickets
app.use("/api/products", productRoutes); // Rutas para productos
app.use("/api/carts", cartRoutes); // Rutas para carritos
app.use("/api/tickets", ticketRoutes); // Rutas para tickets

// Configura el servidor para escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`); // Imprime un mensaje cuando el servidor está corriendo
});
