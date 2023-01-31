import { useState} from 'react'

const vehiculo = () => {
  

  const [ newdatos_vehiculos, setNewDatos_vehiculos] = useState({
    codigo: "",
    razon_social: "",
    nombre_comercial: "",
    rif: "",
    url: "",
    socios: "",
    actividad_economica: "",
    direccion: "",
   
  });
  
  const [errors, setErrors] = useState({});


  const validate = () => {
    const errors = {}
    if (!newdatos_vehiculos.modelo) errors.modelo = "Se requiere"
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate()

    if (Object.keys(errors).length) setErrors(errors)

    console.log("cargando");

    await createDatos_vehiculos()
  };


  const createDatos_vehiculos = async () => {
    try {
        await fetch("/api/vehiculo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newdatos_vehiculos)
      })
    } catch (error) {
      cpmsole.error(error)
    }

  }

  const handleChange = (e) =>
    setNewDatos_vehiculos({ ...newdatos_vehiculos, [e.target.id]: e.target.value })
  
  
  return (
        <div>
            

<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Usuario
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                                Codigo Unico
                            </span>
                            <input
                                type="text"
                                name="username"
                                id="codigo"
                                autoComplete="username"
                                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                </div>

                <form className="space-y-8 divide-y divide-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Datos del Vehiculo</h3>
            <div className="sm:col-span-3">
                <label htmlFor="Vheiculo_Modelo" className="block text-sm font-medium text-gray-700">
                    Modelo
                </label>
                <div className="mt-1">
                    <input
                        id="modelo"
                        name="vheiculo_modelo"
                        type="text"
                        autoComplete="vheiculo_modelo"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="vheiculo_marca" className="block text-sm font-medium text-gray-700">
                    Marca
                </label>
                <div className="mt-1">
                    <input
                        id="marca"
                        name="vheiculo_marca"
                        type="text"
                        autoComplete="vheiculo_marca"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="vheiculo_color" className="block text-sm font-medium text-gray-700">
                    Color
                </label>
                <div className="mt-1">
                    <input
                        id="color"
                        name="vheiculo_color"
                        type="text"
                        autoComplete="vheiculo_color"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="vheiculo_matricula" className="block text-sm font-medium text-gray-700">
                    Matricula
                </label>
                <div className="mt-1">
                    <input
                        id="matricula"
                        name="vheiculo_matricula"
                        type="text"
                        autoComplete="vheiculo_matricula"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>


            <div className="sm:col-span-6">
                <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                    Foto del Vehiculo
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                                <span>Arrastra la imagen</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">o buscas en los archivos</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>


            <div className="flex justify-end">
                <button
                    type="button"
                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Save
                </button>
            </div>

            </form>
        </div>
    )
}

export default vehiculo