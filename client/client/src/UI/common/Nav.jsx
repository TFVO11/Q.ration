import React from 'react'
import { Link } from 'react-router-dom'

import { page } from '../../object/page'
import { PAGE_ARR } from '../../object/page'

function Nav() {
  return (
    <div>
      {PAGE_ARR.map((el) => {
        return (
          <Link to={el.path}>{el.name}</Link>
        )
      })}
    </div>
  )
}

export default Nav
