Install Template

Prerequisites

- [degit npm package](https://github.com/Rich-Harris/degit) 

```sh
npm install -g degit
```

Para descargar el template a una carpeta `app` y levantar el proyecto

```sh
degit raultm/templates/react-starter ap
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
- tanStack Table
- QueryString
- React Modal
- fetchssoapi
- React Icons
- Preparado con Vitest y ejemplos (funcion, Componente y Hook)
    - npm run test (para ejecutar los tests una vez)
    - npm run tdd (modo relanzar los tests ante cambios en los ficheros)
    - npm run coverage

# Como trabajar con trazas
- En javascript de frontend no se puede crear ficheros de log
- Las trazas se imprimen en consola, evitar el uso de console.log, console.error,... ya que no podemos controlar que no se vean en entornos de produccion
- El uso de loglevel nos facilita indicar que nivel de trazas imprimir o incluso no imprimir ninguno (silent)
- En el fichero .env indicar con el siguiente parametro el nivel, por ejemplo: `VITE_LOG_LEVEL='debug'` o si no se pone nada no se imprime ninguna traza
- Posibles valores de menos a mas restringido: 'trace','debug','info','warn','error','silent'
- Para escribir una traza en nuestro codigo **dentro de un componente** que lleve el nombre del componente:
  - necesitamos hacer el import del logger personalizado para el componente  `import { getLoggerComponent } from "<ruta_relativa_de_src_core>/logger`
  - una vez hecho estos dos imports en nuestro codigo:
    - declaramos la constante para el log,  `const log = getLoggerComponent(<Componente>)` cambiando `<Componente>` por nuestro componente, por ej: `const log = getLoggerComponent(Layout)`   
    - ya podremos escribir trazas usando  `log.trace()`,`log.debug()`,`log.info()`,`log.warn()`,`log.error()` 
- Si queremos escribir una traza **en otro lugar** que no sea un componente, o no queremos que salga el nombre del componente en la traza:  - 
  - necesitamos `import log from "loglevel" ` (Nota: si lo hacemos con el tabulador dentro del codigo resiva que no lo ponga entre llaves {log}) 
  - ya podremos escribir trazas usando  `log.trace()`,`log.debug()`,`log.info()`,`log.warn()`,`log.error()` 

# Como cambiar el nombre que aparece en la barra de la pestaña del navegador
- En el directorio raiz hay un fichero `index.html`
- Modificar el titulo `<title>Vite + React</title>` cambiando el literal `Vite + React` por el nombre de nuestro proyecto

# Configuracion de entorno y funcionalidad
- Ahora mismo este frontend trabaja contra un backend en pru que requiere SSO, por lo que si queremos trabajar en local o en un entorno sin token SSO necesitamos obtenerlo (podemos conseguirlo logandonos desde pru) y añadir al localstorage una variable 'token' con el valor de la SSO que hayamos obtenido