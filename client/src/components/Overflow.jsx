import React from 'react'
import styled from "styled-components"

const StyledDiv = styled.div`
  overflow: hiden;
`

function Overflow(props) {
  return (
    <StyledDiv>
      {props.children}
    </StyledDiv>
  )
}

export default Overflow
