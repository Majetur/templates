import { useState } from "react"
import { api } from "../../../api/Api"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export const NewMember = () => {

    const [newMember, setNewMember] = useState({
        username: "",
        email: ""
    })
    
    const navigate = useNavigate()

    const saveMember = async () => console.log(await api.addMember(newMember))

    const handleChange = (event) => setNewMember({...newMember,[event.target.name]:event.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(newMember.username.length > 0 && newMember.email.length > 0){
            saveMember()
            toast.success("Usuario Guardado")
            navigate("/members")
        }else{
            alert("warning!")
        }
    }

    return (

        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">
                            Crear Nuevo Socio
                        </span>
                    </div>
                </div>
                <div className="mt-6">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full space-y-6">
                            <div className="w-full">
                                <div className=" relative ">
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        onChange={handleChange}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Nombre de Usuario"
                                        value={newMember.username}
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Correo Electrónico"
                                        value={newMember.email}
                                    />
                                </div>
                            </div>
                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button
                                        type="submit"
                                        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    >
                                        Guardar
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
