import React from 'react'

const formulario = () => {
  return (
    <div>

      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          



          


          <div className="sm:col-span-3">
                <label htmlFor="vinculaciones" className="block text-sm font-medium text-gray-700">
                  Vinculaciones
                </label>
                <div className="mt-1">
                  <input
                    id="vinculaciones"
                    name="vinculaciones"
                    type="text"
                    autoComplete="vinculaciones"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

          <div className="sm:col-span-6">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              Observaciones
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue={''}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="vigilancia" className="block text-sm font-medium text-gray-700">
              Vigilancia
            </label>
            <div className="mt-1">
              <input
                id="vigilancia"
                name="vigilancia"
                type="text"
                autoComplete="vigilancia"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="vigencia_actual" className="block text-sm font-medium text-gray-700">
              Vigencia Actual
            </label>
            <div className="mt-1">
              <input
                id="vigencia_actual"
                name="vigilancia_actual"
                type="text"
                autoComplete="vigilancia_actual"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
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

export default formulario