import React, { createContext, useState } from 'react'

export const datacontext = createContext()

const Contextdata = ({children}) => {
  
  const[username,setusername]= useState("vishal pillai")

  return (

    <div><datacontext.Provider value={username}>
      {children}
      </datacontext.Provider>
    </div>
  )
}

export default Contextdata

