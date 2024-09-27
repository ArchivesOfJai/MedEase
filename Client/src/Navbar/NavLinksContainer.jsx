import React from 'react'
import NavLink from './NavLink'



const defaultNavLinksContainerSx = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    height: '100%',
    width: 'max-content',
    listStyle: 'none',
    margin: '0 auto',   
}
function NavLinksContainer() {
  return (
   <ul style={{...defaultNavLinksContainerSx}}>
    <NavLink name="Home" />
    <NavLink name="Services" />
    <NavLink name="Find a Doctor" />
    <NavLink name="About us" />
   </ul>
  )
}

export default NavLinksContainer
