import { useState } from 'react'

const vinculo = () => {

  const [newdatos_vinculos, setNewDatos_vinculos] = useState({
    codigo: "",
    url: "",
    nombre: "",
    apellido: "",
    cedula: "",
    pasaporte: "",
    correo: "",
    nacionalidad: "",
    civil: "",
    profesion: "",
    telefonos: "",
    diplomatico: "",
    facebook: "",
    instagram: "",
    twitter: "",
    migratorios: "",
    entorno: "",
    direccion: "",
    ciudad: "",
    estado: "",
    postal: "",
  });

  const [errors, setErrors] = useState({});


  const validate = () => {
    const errors = {}
    if (!newdatos_vinculos.nombre) errors.nombre = "Se requiere nombre"
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate()

    if (Object.keys(errors).length) setErrors(errors)

    console.log("cargando");

    await createDatos_vinculos()
  };


  const createDatos_vinculos = async () => {
    try {
      await fetch("/api/vinculo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newdatos_vinculos)
      })
    } catch (error) {
      cpmsole.error(error)
    }

  }

  const handleChange = (e) =>
    setNewDatos_vinculos({ ...newdatos_vinculos, [e.target.id]: e.target.value })

  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">Persona de interes Operativo</h3>

      <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
        <div className="sm:col-span-6">


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
        </div>


        <div className="sm:col-span-6">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
            Foto
          </label>
          <div className="mt-1 flex items-center">
            <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <button
              type="button"
              className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cargar
            </button>
          </div>
        </div>


        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Información Personal</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Nombres
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="nombre"
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Apellidos
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="apellido"
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="cedula" className="block text-sm font-medium text-gray-700">
                Cedula
              </label>
              <div className="mt-1">
                <input
                  id="cedula"
                  name="cedula"
                  type="number"
                  onChange={handleChange}
                  autoComplete="cedula"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="pasaporte" className="block text-sm font-medium text-gray-700">
                Pasaporte
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="pasaporte-name"
                  id="pasaporte"
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electronico
              </label>
              <div className="mt-1">
                <input
                  id="correo"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="nacionalidad" className="block text-sm font-medium text-gray-700">
                Nacionalidad
              </label>
              <div className="mt-1">
                <select
                  id="nacionalidad"
                  name="acionalidad"
                  onChange={handleChange}
                  autoComplete="acionalidad-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Venezolano</option>
                  <option>Extranjero</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="estado_civil" className="block text-sm font-medium text-gray-700">
                Estado Civil
              </label>
              <div className="mt-1">
                <select
                  id="civil"
                  name="civil"
                  autoComplete="civil-name"
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Soltero</option>
                  <option>Casado</option>
                  <option>Divorsiado</option>
                  <option>Viudo</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="pasaporte" className="block text-sm font-medium text-gray-700">
                Profesion
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="profesion-name"
                  id="profesion"
                  autoComplete="family-name"
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="telefonos" className="block text-sm font-medium text-gray-700">
                Telefonos
              </label>
              <div className="mt-1">
                <input
                  id="telefono"
                  name="telefono"
                  type="number"
                  onChange={handleChange}
                  autoComplete="telefonos"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="cuerpo_diplomatico" className="block text-sm font-medium text-gray-700">
                Cuerpo Diplomatico
              </label>

              <div className="mt-1">
                <input
                  id="diplomatico"
                  onChange={handleChange}
                  name="cuerpo_diplomatico"
                  type="text"
                  autoComplete="cuerpo_diplomatico"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                Facebook
              </label>
              <div className="mt-1">
                <input
                  id="facebook"
                  name="facebook"
                  onChange={handleChange}
                  type="text"
                  autoComplete="facebook"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                Twitter
              </label>
              <div className="mt-1">
                <input
                  id="twitter"
                  onChange={handleChange}
                  name="twitter"
                  type="text"
                  autoComplete="twitter"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                Instagram
              </label>
              <div className="mt-1">
                <input
                  id="instagram"
                  onChange={handleChange}
                  name="instagram"
                  type="text"
                  autoComplete="instagram"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>






            <div className="sm:col-span-6">
              <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                Movimientos Migratorios
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
                      <input id="file-upload" name="migratorios" type="file" onChange={handleChange} className="sr-only" />
                    </label>
                    <p className="pl-1">o buscas en los archivos</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                Entorno Familiar
              </label>
              <div className="mt-1">
                <textarea
                  id="entorno"
                  onChange={handleChange}
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue={''}
                />
              </div>
            </div>


            <div className="sm:col-span-6">
              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                Dirección de Habitacion
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="direccion"
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                Ciudad
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  id="ciudad"
                  onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                Estado / Municipio
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="region"
                  id="estado"
                  onChange={handleChange}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                Codigo Postal
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="postal-code"
                  id="postal"
                  onChange={handleChange}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>


            <div className="sm:col-span-6">
              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                Dirección Laboral
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="direccion-laboral"
                  id="direccion-laboral"
                  onChange={handleChange}
                  autoComplete="direccion-laboral"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
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

export default vinculo