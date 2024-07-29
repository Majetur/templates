
- En el directorio Components se encuentran dos componentes AlertModal y ConfirmModal que nos permitiran crear ventanas personalizadas para nuestro proyecto indicandole los datos necesarios sobre titulo, contenido y nombre para el boton, asi como la funcion en caso de confimracion para los modales de confirmacion
- Para poder usarlo es necesario proporcionar un contexto para lo que utilizaremos el componente ModalProvider envolviendo nuestra aplicacion o si solo lo queremos para componentes especificos envolviendo solo a estos

Ejemplo de como envolver para que lo pueda usar toda la aplicación

```
....
function App() {

  return (
    <>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </>
  )
}
``` 

Un codigo de ejemplo de uso seria:

``` 
import { AlertModal } from "../../../core/custom_modal/components/AlertModal";
import { ConfirmModal } from "../../../core/custom_modal/components/ConfirmModal";

export const Utilidades = () => {

  const handleConfirm = () => {
    console.log("Confirmacion recibida")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <AlertModal title="Ejemplo Alert" content="Esto es una ventana de alert" titleButton="Ejemplo de Modal para alerta básico" />
      <ConfirmModal title="Confirmación" content="¿Estás seguro de que deseas continuar?" titleButton="Ejemplo de Modal para alerta con confirmación" />
    </div>
  );
}
```
