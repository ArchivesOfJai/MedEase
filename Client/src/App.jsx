import React from 'react'
import Navbar from './Navbar/Navbar'
function App() {
  localStorage.setItem("token","");
  
  return (
    <>
     <Navbar/>
    </>
  )
}

export default App
