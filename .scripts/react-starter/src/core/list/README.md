
En el directorio Components se encuentran diversos componente para ayudar a la creacion de los listados

En el directorio pages se proporcionan listados ya ensamblados que en general cubrirán la mayor parte de los que habitualmente se necesitan:
- ListadoAutomatizado: es un listado en el que se vuelcan todos lo datos
- ListadoConPaginacionManual: los datos se realizan mediante un fetch a un endpoint, no se vuelcan todos. Se realiza paginacion manual para permitir la paginacion combinada con el fetch
- ListadonConPaginacionYOrdenacionManual (pendiente de implementar)
- ListadonConPaginacionOrdenacionYBusquedaManual (pendiente de implementar)


- Botonoes a nivel de linea de items (pendiente de implementar)


# ListadoAutomatizado
- Trabaja con todos los datos de la tabla, realiza busqueda, ordenacion y paginacion de forma automatica
- Como minimo debemos de pasarle los datos y las columnas
- Si se desea tambien se puede indicar un titulo
- Si se desea se puede pasar un botón global que aparecerá en la linea del titulo en el margen derecho

# ListadoConPaginacionManual
export const ListadoConPaginacionManual = ({ useFetchData, ColumnasListado }) => {
- Trabaja con los datos obtenidos mediante un fetch, implementando la paginación combinada con este fetch
- Como minimo debemos de pasarle el hook del fetch y las columnas
- 
