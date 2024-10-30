import React, { useContext } from 'react'
import { datacontext } from '../contexts/Contextdata'

const Navbar = () => {

    const data = useContext(datacontext)
  return (
    <div>
      <h1> this is a navbar {data} </h1>
    </div>
  )
}

export default Navbar
