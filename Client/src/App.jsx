import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home';
function App() {
  localStorage.setItem("token","");
  
  return (
    <>
     <Navbar/>
     <Home/>
    </>
  )
}

export default App
