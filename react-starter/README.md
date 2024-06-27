Install Template

Prerequisites

- [degit npm package](https://github.com/Rich-Harris/degit) 

```sh
npm install -g degit
```

Para descargar el template a una carpeta `app` y levantar el proyecto

```sh
degit raultm/vite-template/template app
cd app
npm i
npm run dev
```

# ¿Cómo empezar a trabajar con el proyecto?

- Añadir Ruta en `src/config/routes.jsx`
- Añadir Item en Menu en `src/config/menu.jsx`
- Añadir Pagina/Componente/Hook de un dominion en `src\modules\{nombreDeDominio}\`
- Modificación de Layout en `src/layout`, ahora mismo hay Header, Sidebar y Content
- Añadir llamada a la api en `src/api/Api.js`
- Se pueden hacer llamadas GET/POST/PUT/DELETE, se puede añadir una en `src/api/Api.js`

# ¿Con qué viene preparado/configurado?

- Se usa el template de vite `react-swc`
- React Router Dom
- Tailwind
- Sonner
- React Icons
- Preparado con Vitest y ejemplos (funcion, Componente y Hook)
    - npm run test (para ejecutar los tests una vez)
    - npm run tdd (modo relanzar los tests ante cambios en los ficheros)
    - npm run coverage
