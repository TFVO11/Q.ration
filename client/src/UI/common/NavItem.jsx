import React from 'react'
import { useLocation } from 'react-router-dom'

import { PAGE_ARR } from '../../object/page'

import { NavItemBox, SLink } from './sttyle/Nav.styled'

function NavItem() {
  const location = useLocation();

  const isVisibleUnderscore = (path, location) => {

    return path === location.pathname ? "underscore" : "none";
  };

  
  return (
    <NavItemBox>
      {PAGE_ARR.map((el) => {
        return (
          <SLink className={el.path} to={el.link} underScore={isVisibleUnderscore(el.path, location)}>{el.name}</SLink>
        )
      })}
    </NavItemBox>
  )
}

export default NavItem
