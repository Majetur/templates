Need

- node/npm
- bash

Prerequisites

- [degit npm package](https://github.com/Rich-Harris/degit) 

```sh
npm install -g degit
```

# Templates

## React template 
```sh
degit raultm/templates/react-starter app
cd app
npm i
# Abrimos en IDE de VsCode para que configure el proyecto
code .
echo "Ok"
```

Al abrirlo con VsCode se Configurará automaticamente
- Creará un archivo `.env` a partir de `.env.properties`
- Comenzará un repositorio en una rama `desarrollo`
- Si es posible le pone una primera version

Funcionalidades
- Listado con paginación javascript (se trae todos los elementos y la paginación se gestiona en js)
- Listado CRUD - Botones de Alta, Borrado sin funcionalidad real, simplemente demostración
- Listado con paginación api (al consultar a la api se trae una página de elementos)
- Listado a una api protegida con F5 JWT, funciona en entornos con SSO F5 

## Springboot for local development

```sh
degit raultm/templates/springboot .
```