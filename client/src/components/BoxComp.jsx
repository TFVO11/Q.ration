import React, {Fragment} from 'react'
import { Box } from '@mui/material'

function BoxComp(props) {
  return (
    <Fragment>
      <Box sx={{ minWidth: 275 }}>
        {props.children}
      </Box>
    </Fragment>
  )
}

export default BoxComp
