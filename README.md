# 🚀 Entrega Final – Backend II

Este proyecto implementa un **backend robusto y escalable para un sistema de comercio electrónico**, desarrollado con **Node.js y Express**, aplicando buenas prácticas de arquitectura y organización del código.

El objetivo es gestionar **productos, carritos, usuarios y tickets**, incorporando **autenticación, autorización y rutas protegidas**, y sentar una base sólida para futuras ampliaciones del sistema.

---

## 📁 Estructura del Proyecto

📦 BackendenIIEntregaFinal-main
┣ 📂 node_modules
┣ 📂 src
┃ ┣ 📂 config
┃ ┃ ┗ 📜 passport.js
┃ ┣ 📂 controllers
┃ ┃ ┣ 📜 authController.js
┃ ┃ ┣ 📜 cartController.js
┃ ┃ ┣ 📜 productController.js
┃ ┃ ┣ 📜 ticketController.js
┃ ┃ ┗ 📜 userController.js
┃ ┣ 📂 daos
┃ ┃ ┣ 📜 cartDAO.js
┃ ┃ ┣ 📜 productDAO.js
┃ ┃ ┣ 📜 ticketDAO.js
┃ ┃ ┗ 📜 userDAO.js
┃ ┣ 📂 dtos
┃ ┃ ┣ 📜 cartDTO.js
┃ ┃ ┣ 📜 productDTO.js
┃ ┃ ┣ 📜 ticketDTO.js
┃ ┃ ┗ 📜 userDTO.js
┃ ┣ 📂 middlewares
┃ ┃ ┣ 📜 authMiddleware.js
┃ ┃ ┣ 📜 errorHandler.js
┃ ┃ ┗ 📜 roleMiddleware.js
┃ ┣ 📂 models
┃ ┃ ┣ 📜 Cart.js
┃ ┃ ┣ 📜 Product.js
┃ ┃ ┣ 📜 Ticket.js
┃ ┃ ┗ 📜 User.js
┃ ┣ 📂 repositories
┃ ┃ ┣ 📜 cartRepository.js
┃ ┃ ┣ 📜 productRepository.js
┃ ┃ ┣ 📜 ticketRepository.js
┃ ┃ ┗ 📜 userRepository.js
┃ ┣ 📂 routes
┃ ┃ ┣ 📜 authRoutes.js
┃ ┃ ┣ 📜 cartRoutes.js
┃ ┃ ┣ 📜 productRoutes.js
┃ ┃ ┣ 📜 sessions.router.js
┃ ┃ ┣ 📜 ticketRoutes.js
┃ ┃ ┗ 📜 userRoutes.js
┃ ┣ 📂 services
┃ ┃ ┗ 📜 ticketService.js
┃ ┣ 📂 views
┃ ┃ ┣ 📂 layouts
┃ ┃ ┃ ┗ 📜 main.handlebars
┃ ┃ ┣ 📜 home.handlebars
┃ ┃ ┣ 📜 login.handlebars
┃ ┃ ┣ 📜 register.handlebars
┃ ┃ ┣ 📜 protected.handlebars
┃ ┃ ┗ 📜 realTimeProducts.handlebars
┃ ┣ 📜 .env
┃ ┗ 📜 app.js
┣ 📜 package.json
┣ 📜 package-lock.json
┗ 📜 README.md


---

## 🎯 Objetivo del Proyecto

Construir un **backend modular, mantenible y escalable** para un eCommerce, permitiendo:

- Gestión de productos, carritos, usuarios y tickets
- Autenticación y autorización segura
- Protección de rutas sensibles
- Fácil incorporación de nuevas funcionalidades
- Preparación para crecimiento futuro

---

## 🛠️ Tecnologías y Herramientas

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **Passport.js**
- **JWT (JSON Web Tokens)**
- **Handlebars**
- **Socket.IO**

---

## 🌟 Características Principales

### 🛍️ Gestión de Productos y Carritos
- CRUD completo de productos
- CRUD de carritos
- Persistencia en MongoDB
- Vista de productos en **tiempo real** con Socket.IO

### 🔒 Autenticación y Autorización
- Registro y login de usuarios
- Generación de JWT
- Token almacenado en **cookies httpOnly**
- Autenticación con Passport-JWT
- Rutas protegidas
- Control de roles mediante middleware

### 🧑‍💻 Gestión de Usuarios y Tickets
- CRUD de usuarios
- Generación de tickets de compra
- Asociación de tickets a usuarios
- Servicio dedicado para lógica de tickets

### 🧩 Arquitectura Modular
- **DAOs** para abstracción de acceso a datos
- **DTOs** para validación y estandarización
- **Middlewares** para autenticación, roles y errores
- **Repositorios y servicios** para separar lógica de negocio y persistencia

---

## ⚙️ Instalación y Configuración

### 1️⃣ Instalar dependencias
```bash
npm install
---
### 2️⃣ Variables de entorno
Crear un archivo .env dentro de src:
```bash
MONGO_URI=mongodb+srv://gbarrera:coderhouse@cluster0.eetr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=8080
JWT_SECRET=clave_secreta
---
### 3️⃣ Iniciar el servidor
```bash
node ./src/app.js
Servidor disponible en:
http://localhost:8080
---
### 🔐 Rutas Principales
- **/login** Registro de usuario
- **/protected** Ruta protegida (requiere autenticación)
- **/realTimeProducts** Productos en tiempo real
- **/api/sessions/s** Autenticación y sesión

---

### ✅ Estado del Proyecto
✔️ Autenticación con JWT
✔️ Rutas protegidas
✔️ CRUD completo
✔️ Arquitectura modular
✔️ Productos en tiempo real

---


