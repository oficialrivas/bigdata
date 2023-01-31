import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import Vehiculo from "../../components/vehiculo.jsx"

const vehiculo = () => {
  return (
    <div>
<Navbar/> 
<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">{<Vehiculo/>}</div>


    </div>
  )
}

export default vehiculo