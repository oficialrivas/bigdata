import { useState} from 'react'

const empresa = () => {
  

  const [ newdatos_empresas, setNewDatos_empresas] = useState({
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
    if (!newdatos_empresas.nombre_comercial) errors.nombre_comercial = "Se requiere nombre"
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate()

    if (Object.keys(errors).length) setErrors(errors)

    console.log("cargando");

    await createDatos_empresas()
  };


  const createDatos_empresas = async () => {
    try {
        await fetch("/api/empresa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newdatos_empresas)
      })
    } catch (error) {
      cpmsole.error(error)
    }

  }

  const handleChange = (e) =>
    setNewDatos_empresas({ ...newdatos_empresas, [e.target.id]: e.target.value })
  
  
  return (
    <div>
<form className="space-y-8 divide-y divide-gray-200" id="from"  onSubmit={handleSubmit}>
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
                                onChange={handleChange}
                                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                </div>
                <div className="space-y-8 divide-y divide-gray-200"></div>


            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Información E,presarial</h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Razon Social
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="razon_social"
                    autoComplete="given-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Nombre Comercial
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="nombre_comercial"
                    autoComplete="family-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="cedula" className="block text-sm font-medium text-gray-700">
                  RIF
                </label>
                <div className="mt-1">
                  <input
                    id="rif"
                    name="cedula"
                    type="number"
                    autoComplete="cedula"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="pasaporte" className="block text-sm font-medium text-gray-700">
                  Socios
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pasaporte-name"
                    id="socios"
                    autoComplete="family-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Actividad Economica
                </label>
                <div className="mt-1">
                  <input
                    id="actividad_economica"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="pasaporte" className="block text-sm font-medium text-gray-700">
                  Dirección
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="profesion-name"
                    id="direccion"
                    autoComplete="family-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
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

export default empresa