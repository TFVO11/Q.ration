import { ROUTES_ARR } from "./Router";
import Nav from "../UI/common/Nav";

import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

const RouterComp = () => {
  console.log("RouterComp")
  return (
    <Fragment>
      <Nav />
      <Routes>
        {ROUTES_ARR.map((el) => (
          <Route key={el.path} path={el.link} element={el.element} />
        ))}
      </Routes>
    </Fragment>
  );
};

export default RouterComp;
