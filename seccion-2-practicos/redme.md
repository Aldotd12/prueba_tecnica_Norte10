## Justificación del codigo

El código se estructuró siguiendo una  **arquitectura limpia y modular por capas** , separando el servidor REST en Node.js/Express de la aplicación web en Nuxt 3. En el backend, se usó Mongoose para modelar y validar los datos de MongoDB, un middleware centralizado para la autenticación por API Key y Multer para la gestión de adjuntos. En el frontend, se empleó la convención moderna de directorios dentro de `app/`, centralizando la lógica de red en un composable reutilizable con claves de entorno (`runtimeConfig`) y administrando el estado reactivo global mediante Pinia. Finalmente, se integraron Vuelidate y SweetAlert2 para ofrecer una experiencia de usuario (UX) ágil, interactiva y con validaciones en tiempo real.

## Uso de IA:

Se hizo uso de IA para consultar el uso e integración de Nuxt 3, el uso de Pinia y el uso correcto de Vuelidate ya que son tecnologias nuevas.
