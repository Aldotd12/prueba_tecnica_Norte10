
# Backend - Mini API de Tareas

API REST desarrollada con **Node.js** y **Express** para la gestión de tareas, con autenticación mediante middleware y soporte para subida de archivos adjuntos localmente en una base de datos MongoDB.

---

## Requisitos Previos

Asegúrate de tener instalado en tu sistema:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

---

## Configuración del Proyecto

1. **Navegar a la carpeta del backend:**
   ```bash
   cd seccion-2-practicos/backend
   ```

## Instalar dependencias
    ```bash
   npm install
   ```
## Crear tu archivo .env dentro añade las variables de entorno
    ```
    PORT=5000
    MONGO_URI=mongodb://127.0.0.1:27017/tareas_db
    API_TOKEN=mi_token_secreto_123
   ```
## Ejecutar el servidor
    ```
    npm run dev
    ```