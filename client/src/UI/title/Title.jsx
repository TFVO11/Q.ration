import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-bottom: 30px;
`;

const StyledH1 = styled.h1`
  text-decoration: underline;
`;

function Title({ title }) {
  return (
    <StyledDiv>
      <StyledH1>{title}</StyledH1>
    </StyledDiv>
  );
}

export default Title;
