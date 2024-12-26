🚀 Entrega final Backend II
Este proyecto implementa un backend eficiente para un sistema de comercio electrónico, utilizando Node.js y Express. Su propósito es gestionar productos, carritos, usuarios y tickets de forma escalable y fácil de mantener, a través de una arquitectura flexible y modular.

📁 Estructura del Proyecto:

BackendEntregaFinalII/

├── src/

│   ├── config/

│   │   └── passport.js   

│   ├── controllers/

│   │   ├── authController.js  

│   │   ├── cartController.js 

│   │   ├── productController.js

│   │   ├── ticketController.js  

│   │   └── userController.js

│   ├── daos/

│   │   ├── cartDAO.js

│   │   ├── productDAO.js  

│   │   ├── ticketDAO.js   

│   │   └── userDAO.js  

│   ├── dtos/

│   │   ├── cartDTO.js    

│   │   ├── productDTO.js   

│   │   ├── ticketDTO.js 

│   │   └── userDTO.js  

│   ├── middlewares/

│   │   ├── authMiddleware.js   

│   │   ├── errorHandler.js     

│   │   └── roleMiddleware.js 

│   ├── models/

│   │   ├── Cart.js   

│   │   ├── Product.js   

│   │   ├── Ticket.js    

│   │   └── User.js   

│   ├── repositories/

│   │   ├── cartRepository.js 

│   │   ├── productRepository.js   

│   │   ├── ticketRepository.js    

│   │   └── userRepository.js    

│   ├── routes/

│   │   ├── authRoutes.js        

│   │   ├── cartRoutes.js     

│   │   ├── productRoutes.js

│   │   ├── ticketRoutes.js    

│   │   └── userRoutes.js    

│   ├── services/

│   │   └── ticketService.js   

│   ├── views/

│   │   ├── layouts/

│   │   │   └── main.handlebars  

│   │   ├── home.handlebars     

│   │   ├── login.handlebars      

│   │   ├── protected.handlebars   

│   │   ├── realTimeProducts.handlebars 

│   │   └── register.handlebars  

│   ├── .env           

│   └── app.js 

├── .gitignore

├── package-lock.json

├── package.json

└── README.md

🎯 Objetivo:
El objetivo principal de este proyecto es crear un backend robusto y escalable para eCommerce, optimizando la integración de nuevas funcionalidades y permitiendo la expansión del sistema conforme se necesiten más características y mejoras.

🛠️ Tecnologías y herramientas:
Node.js
Express
Passport.js
JWT
Handlebars
La arquitectura está diseñada para facilitar la transición de la persistencia en archivos JSON a bases de datos modernas, como MongoDB, proporcionando una base sólida para la escalabilidad futura.

🌟 Características clave:
🛍️ Gestión de productos y carritos:
Se han implementado operaciones completas CRUD para productos y carritos, con almacenamiento inicial en archivos JSON, lo que permite una gestión sencilla de los datos mientras se establece la base de la aplicación.

🔒 Autenticación y autorización:
Gracias a la integración de Passport.js y JWT, el sistema es capaz de gestionar el acceso de usuarios, sus roles y las rutas protegidas, asegurando que solo los usuarios autorizados puedan realizar ciertas acciones.

🧑‍💻 Gestión de usuarios y tickets:
El backend permite la creación de usuarios y la generación de tickets asociados a compras, todo ello mediante un sistema CRUD para facilitar la administración.

🧩 Modularidad:
DAOs: Los DAOs permiten una abstracción completa del acceso a la base de datos, mejorando la flexibilidad y el mantenimiento del sistema.

DTOs: Se emplean DTOs (Data Transfer Objects) para la validación y estandarización de los datos, asegurando que se trabajen con datos consistentes y estructurados.

Middlewares: Se utilizan middlewares para controlar los errores, gestionar los roles de los usuarios y realizar la autenticación, lo que mejora la seguridad y el manejo de las rutas protegidas.

Repositorios y servicios: La lógica de negocio está organizada en repositorios y servicios, lo que permite separar las responsabilidades de acceso a datos y la ejecución de operaciones comerciales, facilitando el mantenimiento y la ampliación del sistema.

Instala las dependencias: npm install 

Variables .env:
.env
MONGO_URI=mongodb+srv://gbarrera:coderhouse@cluster0.eetr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=8080
JWT_SECRET=<clave_secreta>

Inicia el servidor: node ./src/app.js
