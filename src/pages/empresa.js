import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import Empresa from "../../components/empresa.jsx"

const empresa = () => {
  return (
    <div>

<Navbar/> 
<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">{<Empresa/>}</div>
    </div>
  )
}

export default empresa