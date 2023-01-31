import { useState} from 'react'

export const IIO = () => {

  const [ newdatos_iio, setNewDatos_iio] = useState({
    iio: "",
    foto: "",
    tie: "",
    modalidad: "",
    parroquia: "",
    ciudad: "",
    municipio: "",
    estado: "",
    pais: "",
   
  });
  
  const [errors, setErrors] = useState({});


  const validate = () => {
    const errors = {}
    if (!newdatos_iio.iio) errors.nombre_iio = "Se requiere iio"
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate()

    if (Object.keys(errors).length) setErrors(errors)

    console.log("cargando");

    await createDatos_iio()
  };


  const createDatos_iio = async () => {
    try {
        await fetch("/api/iio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newdatos_iio)
      })
    } catch (error) {
      cpmsole.error(error)
    }

  }

  const handleChange = (e) =>
    setNewDatos_iio({ ...newdatos_iio, [e.target.id]: e.target.value }) 


    return (
        <div>
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>


            <div className="sm:col-span-6">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    IIO
                </label>
                <div className="mt-1">
                    <textarea
                        id="about"
                        name="about"
                        rows={3}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={''}
                    />
                </div>


                <div className="sm:col-span-6">
                    <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                        Foto IIO
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
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleChange}/>
                                </label>
                                <p className="pl-1">o buscas en los archivos</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-3">
                <label htmlFor="nacionalidad" className="block text-sm font-medium text-gray-700">
                  TIE
                </label>
                <div className="mt-1">
                  <select
                    id="TIE"
                    name="acionalidad"
                    autoComplete="acionalidad-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option></option>
                    <option>ASEGURAMIENTO DEL PRESIDENTE DE LA REPÚBLICA Y COMANDANTE EN JEFE DE LA FANB, PRINCIPALES DIRIGENTES Y CUADROS DE DIRECCIÓN DE LA REVOLUCIÓN BOLIVARIANA Y LA CONTRARREVOLUCIÓN</option>
                    <option>AMENAZAS A LA SEGURIDAD Y DEFENSA DE LA NACIÓN</option>
                    <option>ASEGURAMIENTO DE LAS EMPRESAS ESTRATÉGICAS VINCULADAS AL SECTOR ENERGÉTICO NACIONAL</option>
                    <option>ASEGURAMIENTO DE LAS EMPRESAS E INSTITUCIONES VINCULADAS SISTEMA PRODUCTIVO Y FINANCIERO NACIONAL</option>
                    <option>OTROS FACTORES QUE AFECTAN EL ORDEN INTERNO Y DESARROLLO INTEGRAL DE LA NACIÓN</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="nacionalidad" className="block text-sm font-medium text-gray-700">
                  Modalidad
                </label>
                <div className="mt-1">
                  <select
                    id="modalidad"
                    name="acionalidad"
                    autoComplete="acionalidad-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option></option>
                    <option>Acciones en contra del Comandante en Jefe</option>
                    <option>Acciones en contra de los principales dirigentes de los Poderes del Estado (Nacional, Regional y Municipal):</option>
                    <option>Acciones en contra de los Cuadros de mando y dirección de la FANB</option>
                    <option>Acciones contra Líderes y Cuadros de Base de la Revolución</option>
                    <option>Acciones en contra de líderes y dirigentes de la C/R</option>
                    <option>Aseguramiento A Representantes Diplomáticos Acreditados En La RBV</option>
                    <option>Organizaciones terroristas, ciberterroristas y bioterroristas nacionales e internacionales</option>
                    <option>Grupo Paramilitares o Irregulares Nacionales o Extranjeros</option>
                    <option>Narcotráfico</option>
                    <option>Acciones de Países hostiles</option>
                    <option>Corrupción</option>
                    <option>Contrabando</option>
                    <option>Acciones de organizaciones delictivas y delitos comunes</option>
                    <option>Servicio Penitenciario</option>
                    <option>Acciones de organizaciones c/r nacionales e internacionales</option>
                    <option>Protestas violentas</option>
                    <option>Espionaje</option>
                    <option>Incidencias de los órganos de seguridad del estado (policiales y militares)</option>
                    <option>Planes y operaciones para garantizar la seguridad ciudadana, orden interno y defensa de la nación</option>
                    <option>Posibles Actividades Conspirativas y de subversión política ideológica</option>
                    <option>Guerra Mediática y/o Psicológica</option>
                    <option>Incidencias de Migración nacional e internacional</option>
                    <option>Actividades irregulares de representaciones diplomáticas acreditadas en la RBV</option>
                    <option>Sistema Eléctrico Nacional</option>
                    <option>Industria Petrolera y Distribución de combustible</option>
                    <option>Industria Gasífera</option>
                    <option>Explotación Minera y Materiales Estratégicos</option>
                    <option>Acciones de Economía Criminal</option>
                    <option>Ataque al Sistema Financiero y Monetario</option>
                    <option>Empresas Básicas</option>
                    <option>Empresas Agroindustriales</option>
                    <option>Unidades de Producción</option>
                    <option>Cadena de producción, distribución y comercialización de alimentos</option>
                    <option>Conflictos laborales de entes privados</option>
                    <option>Parque Industrial</option>
                    <option>Puertos y Aeropuertos</option>
                    <option>Políticas Públicas en materia económica, financiera y productiva</option>
                    <option>Sistema Educativo</option>
                    <option>SISTEMA DE SALUD</option>
                    <option>Agua Potable</option>
                    <option>Telecomunicaciones</option>
                    <option>Otros servicios públicos</option>
                    <option>Transporte</option>
                    <option>Misiones y Grandes Misiones</option>
                    <option>Fenómenos Naturales y/o desastres ambientales</option>
                    <option>Partidos y organizaciones políticas revolucionarias y C/R</option>
                    <option>Irregularidades en el funcionamiento de otros Entes del Estado</option>
                    <option>Política Exterior del Estado Venezolano</option>
                    
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="pasaporte" className="block text-sm font-medium text-gray-700">
                  Parroquia
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pasaporte-name"
                    id="parroquia"
                    autoComplete="family-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="pasaporte" className="block text-sm font-medium text-gray-700">
                  Ciudad
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pasaporte-name"
                    id="ciudad"
                    autoComplete="family-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>


              <div className="sm:col-span-3">
                <label htmlFor="pasaporte" className="block text-sm font-medium text-gray-700">
                  Municipio
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pasaporte-name"
                    id="municipio"
                    autoComplete="family-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>


              <div className="sm:col-span-3">
                <label htmlFor="nacionalidad" className="block text-sm font-medium text-gray-700">
                  Estado
                </label>
                <div className="mt-1">
                  <select
                    id="estado"
                    name="acionalidad"
                    autoComplete="acionalidad-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Venezolano</option>
                    <option>Extranjero</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="pasaporte" className="block text-sm font-medium text-gray-700">
                  Pais
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pasaporte-name"
                    id="pais"
                    autoComplete="family-name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
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
            
            </div>
            </form>
            </div>
        

        
    )
}

export default IIO