import React, { Fragment } from "react";
import NavItem from "./NavItem";
import Footer from "./Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Profile from "./profile/Profile";

import { NavBox, NavWrapper, SImg } from "./sttyle/Nav.styled";

function Nav() {
  const isLogin = true;

  const card = (
    <Fragment>
      <CardContent sx={{color : "primary.main"}}>
        {!isLogin ? <SImg src="img/logo1.png" /> : <Profile />}
      </CardContent>
    </Fragment>
  );

  return (
    <NavBox>
      <NavWrapper>
        <Box  sx={{ minWidth: 275, color : "primary.main" }}>
          <Card sx={{backgroundColor : "primary.main", borderColor: "primary.main"}} variant="outlined" >
            {card}
          </Card>
        </Box>
        <NavItem />
      </NavWrapper>
      <Footer />
    </NavBox>
  );
}

export default Nav;
