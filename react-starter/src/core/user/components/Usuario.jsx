import { isDevEnviroment, isPreEnviroment, isProEnviroment, isSSOEnviroment } from "../../helpers/functionalHelpers";
import { useUser } from "../hooks/UserContext";
import { Link } from "react-router-dom";

export const Usuario = ({ showDetails }) => {
    const { user, isLoading } = useUser();

    const clickCierreSesion = () => {
        let urlLogout = ""
        isSSOEnviroment() ? localStorage.removeItem("token") : localStorage.clear();
        if (isDevEnviroment()) {
            urlLogout = 'https://desportalsso.acaex.es/my.logout.php3'

        } else if (isPreEnviroment()) {
            urlLogout = 'https://pruportalsso.acaex.es/my.logout.php3';
        }
        else if (isProEnviroment()) {
            urlLogout = 'https://portalsso.acaex.es/my.logout.php3';
        }
        window.location.href = urlLogout;
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!user) {
        return <div>No se encontró el usuario.</div>;
    }

    return (
        <div className="relative">
            <h1 className="font-medium text-slate-800">{user.username}</h1>
            {showDetails && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 text-left">
                        <div className="font-medium text-slate-800">{user.username}</div>
                        <div className="text-xs text-slate-500 italic">{user.profile}</div>
                    </div>
                    <Link
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        to="/"
                        onClick={clickCierreSesion}
                    >
                        Cerrar Sesión
                    </Link>
                    {/* Puedes agregar más detalles aquí */}
                </div>
            )}
        </div>



    );
};


