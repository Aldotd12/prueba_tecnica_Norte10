
```text
prueba-tecnica-mo/
│
├── .gitignore
├── README.md                    
│
├── seccion-1-logica/             <-- Sección 1: Ejercicios Lógico-Matemáticos + SQL
│   ├── ejercicio1.js
│   ├── ejercicio2.js
│   ├── ejercicio3.js
│   ├── ejercicio4.js
│   ├── ejercicio5.sql             <-- Consulta SQL
│  
│
├── seccion-2-practicos/          <-- Sección 2: Proyecto Full Stack de Tareas
│   ├── backend/                   <-- Mini API de Tareas (Node.js / Express)
│   │   ├── middleware/
│   │   │   └── auth.js          
│   │   ├── models/
│   │   │   └── Task.js          
│   │   ├── routes/
│   │   │   └── tasks.js         
│   │   ├── uploads/             
│   │   ├── .env                 
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── server.js            
│   │
│   └── frontend/                  <-- App Lista de Tareas (Nuxt 3 + Pinia)
│       ├── app/
│       │   ├── composables/
│       │   │   └── useApi.ts    
│       │   ├── layouts/
│       │   │   └── default.vue  
│       │   ├── pages/
│       │   │   └── index.vue    
│       │   ├── stores/
│       │   │   └── taskStore.ts   
│       │   └── app.vue          
│       ├── public/              
│       ├── .env                 
│       ├── .gitignore
│       ├── nuxt.config.ts      
│       ├── package-lock.json
│       ├── package.json
│       ├── tsconfig.json
│       └── README.md              <-- Instrucciones de ejecución del frontend
│
└── seccion-3-teoria/             <-- Sección 3: Preguntas Teóricas
    └── preguntas_practicas.pdf              
```
