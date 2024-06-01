import { ROUTES_ARR } from "./Router";
import Nav from "../UI/common/Nav";

import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import styled from "styled-components";
import Title from "../UI/title/Title";

const StyledDivBox = styled.div`
  display: flex;
`;

const RouterComp = () => {
  console.log("RouterComp");
  return (
    <Fragment>
      <StyledDivBox>
        <Nav />
        <Routes>
          {ROUTES_ARR.map((el) => (
              <Route key={el.path} path={el.link} element={el.element} />
          ))}
        </Routes>
      </StyledDivBox>
    </Fragment>
  );
};

export default RouterComp;
