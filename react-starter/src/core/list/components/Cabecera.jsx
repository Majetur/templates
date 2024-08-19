export const Cabecera = ({ cabecera }) => {
    return (
        <>
            {cabecera && (
                <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                    <h2 className="text-2xl leading-tight">
                        {cabecera.title}
                    </h2>
                    {cabecera.btnCabecera &&
                        (<div className="text-end">
                            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                <button
                                    onClick={cabecera.btnCabecera.onClickBoton}
                                    className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                    type="button"
                                >
                                    {cabecera.btnCabecera.lblBoton}
                                </button>
                            </form>
                        </div>)}
                </div>
            )}
        </>
    )
}
