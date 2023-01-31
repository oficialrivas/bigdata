import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import IIO from "../../components/IIO.jsx"

const iio = () => {
  return (
    <div>

<Navbar/> 
<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">{<IIO/>}</div>

    </div>
  )
}

export default iio