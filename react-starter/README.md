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
- loglevel
- React Icons
- Preparado con Vitest y ejemplos (funcion, Componente y Hook)
    - npm run test (para ejecutar los tests una vez)
    - npm run tdd (modo relanzar los tests ante cambios en los ficheros)
    - npm run coverage

# Como cambiar el nombre que aparece en la barra de la pestaña del navegador
- En el directorio raiz hay un fichero `index.html`
- Modificar el titulo `<title>Vite + React</title>` cambiando el literal `Vite + React` por el nombre de nuestro proyecto

# modulos transversales de ayuda
- Dentro de la carpeta src/core encontramos diversos modulos de apoyo a la construcción de nuestros componentes, dentro de dichos modulos podemos encontrar un fichero README.md que nos ayudará a entender su funcionamiento
- Entre estos modulos podremos encontrar los siguientes:
  - api: para la obtencion de los datos que usaremos en nuestros componentes, en fetchApi integraremos el fetch con SSO
  - custom_modals: ventanas personalizadas para mensajes de alerta y/o de confirmacion
  - error: para los errores tipo boundary (excepciones no controladas por el componente) y error tipo 404 o de routes
  - list: para mostrar listados de diferentes tipos (automatizados, con paginacion controlada,...)
  - logger: para la escritura de trazas por niveles y control de nivel