# Ecommerce Backend API (Node.js, JWT & MongoDB)

Este proyecto implementa un **backend robusto y escalable para un sistema de comercio electrónico**, desarrollado con **Node.js y Express**, aplicando buenas prácticas de arquitectura y organización del código.

El objetivo es gestionar **productos, carritos, usuarios y tickets**, incorporando **autenticación, autorización y rutas protegidas**, y sentar una base sólida para futuras ampliaciones del sistema.

---

## 📁 Estructura del Proyecto

<img width="229" height="768" alt="image" src="https://github.com/user-attachments/assets/a27733ba-1640-4ef7-9e82-b57d83155770"  />

<img width="255" height="421" alt="image" src="https://github.com/user-attachments/assets/3f64889e-076b-4b58-ad7f-696d9073d5bb" />


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
```
### 2️⃣ Variables de entorno
Crear un archivo .env dentro de src:

```bash
MONGO_URI=mongodb+srv://gbarrera:coderhouse@cluster0.eetr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=8080
JWT_SECRET=clave_secreta
```
### 3️⃣ Iniciar el servidor
```bash
node ./src/app.js
Servidor disponible en:
http://localhost:8080
```
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

## 👩‍💻 Autora
**Gabriela Ayelén Barrera**  
📫 Contacto: gabrielaayelenbarrera1145@gmail.com  
🔗 LinkedIn: www.linkedin.com/in/gabrielabarrera-

---

