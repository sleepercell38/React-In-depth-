import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { datacontext } from './contexts/Contextdata'

const App = () => {

  const data = useContext(datacontext)
  return (
    <div>
   
      <h1 className='text-red-800'>hello world {data}</h1>
      <Navbar  />
      <Footer/>
    </div>
  )
}

export default App
