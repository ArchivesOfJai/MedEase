import React from 'react'
import NavLink from './NavLink'
import './NavLinksContainer.css'
function NavLinksContainer() {
  return (
   <ul className='nav-link-container'>
    <NavLink name="Home" />
    <NavLink name="Services" />
    <NavLink name="Find a Doctor" />
    <NavLink name="About us" />
   </ul>
  )
}

export default NavLinksContainer
