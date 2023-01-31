import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import Perfil from "../../components/perfil.jsx"

const perfil = () => {
  return (
    <div>
<Navbar/> 
<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">{<Perfil/>}</div>

    </div>
  )
}

export default perfil