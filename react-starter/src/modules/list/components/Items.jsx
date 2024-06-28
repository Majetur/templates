import { api } from "../../../core/api";
import { useEffect, useState } from "react";
import { toast } from "sonner"
import { useListItems } from "../hooks/useListItems";

export const Items = () => {

  const {title, items, handleClick} = useListItems();
 
  return (
    <div className="container   max-w-3xl px-4 mx-auto sm:px-8 ">
      <div className="py-8">
        <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
          <h2 className="text-2xl leading-tight">
            {title}
          </h2>
          <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              {/* <div className=" relative ">
                <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
              </div> */}
              <button
                onClick={handleClick}
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="button"
              >
                Cambiar Titulo
              </button>
            </form>
          </div>
        </div>
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full  rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    
                  </th>
                  <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Nombre
                  </th>
                  <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    Consejería
                  </th>
                </tr>
              </thead>
              <tbody>
                {items && items.map(item =>
                  <tr key={item.persona}>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 whitespace-no-wrap">
                      <img alt="profile" src={item.imageLink} className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            <a href={item.personaLink} target="_blank">{item.persona}</a>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        <a href={item.consejeriaLink} target="_blank">{item.consejeria}</a>
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}
