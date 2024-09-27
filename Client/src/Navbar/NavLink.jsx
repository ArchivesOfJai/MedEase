import React from 'react'



function NavLink({name}) {
    let href = name.replaceAll(' ','');

    const defaultLinkSx={
      textDecoration: 'none',
      color: '#808080',
    }
    const linkColor={
      color: (window.location.pathname === `/${href}`)||(window.location.pathname === '/'&&name === 'Home') ? '#2F80ED' : '#808080',
    }


  return (
   <li className='nav-link'><a  href={`/${href}`} style={{...defaultLinkSx,...linkColor}}>{name}</a></li>
  )
}

export default NavLink
