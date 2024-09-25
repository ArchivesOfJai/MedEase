import React from 'react'
import './NavLink.css'
function NavLink({name}) {
    let href = name.replaceAll(' ','');
  return (
   <li className='nav-link'><a href={`/${href}`} style={{color: window.location.pathname === `/${href}` ? '#2F80ED' : '#808080'}}>{name}</a></li>
  )
}

export default NavLink
