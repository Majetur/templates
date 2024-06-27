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

# Como trabajar con trazas
- En javascript de frontend no se puede crear ficheros de log
- Las trazas se imprimen en consola, evitar el uso de console.log, console.error,... ya que no podemos controlar que no se vean en entornos de produccion
- El uso de loglevel nos facilita indicar que nivel de trazas imprimir o incluso no imprimir ninguno (silent)
- En el fichero .env indicar con el siguiente parametro el nivel `VITE_LOG_LEVEL='debug'` o si no se pone nada no se imprime ninguna traza
- Posibles valores de menos a mas restringido: 'trace','debug','info','warn','error','silent'
- Para escribir una traza en nuestro codigo primero debemos hacerl el import `import log from "loglevel" ` (Nota: cuidado si forzamos el import con tabulador porque puede añadir una llaves alrededor de {log}, hay que quitar esas {} o no podrá hacer el import correctamente) son `log.trace()`,`log.debug()`,`log.info()`,`log.warn()`,`log.error()` respectivamente, en ese fichero habrá que hacer previamene 