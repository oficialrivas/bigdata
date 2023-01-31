import React from 'react'
import Navbar from "../../components/navbar/navbar.jsx"
import Tasks from "../../components/tasks.jsx"

const items = [
  { id: 5 },
  // More items...
]

const index = () => {
  return (
    <div>
<Navbar/>

<div  className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
<div>
<ul role="list" className="divide-y divide-gray-200" >
      {items.map((item) => (
        <li key={item.id} className="py-4">
          {<Tasks/>}
        </li>
      ))}
    </ul>
    </div>
    </div>
    </div>
  )
}

export default index
