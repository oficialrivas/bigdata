import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import Vinculo from "../../components/vinculos.jsx"

const vinculo = () => {
  return (
    <div>

<Navbar/> 
<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">{<Vinculo/>}</div>
    </div>
  )
}

export default vinculo