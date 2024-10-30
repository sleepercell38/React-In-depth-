import React, { useContext } from 'react'
import { datacontext } from '../contexts/Contextdata'

const Footer = () => {

    const data =  useContext(datacontext) 
  return (
    <div>
      <h1>this is footer {data}</h1>
    </div>
  )
}

export default Footer
