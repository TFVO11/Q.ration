import styled from "styled-components";
import { UI_color, text_color } from "../../../object/colorType";
import { Link } from "react-router-dom";

export const NavBox = styled.div`
  height: 100vh;
  width: 310px;

  display: flex;
  flex-direction: column;
  background: ${UI_color.main_color.prime};
  align-items: center;
`;

export const NavItemBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;

  text-align: center;
  justify-content: space-around;

`;

export const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Sfooter = styled.p`
  color: ${text_color.main_color.footer};
  text-align: center;
`;

export const SLink = styled(Link)`
  text-decoration: ${props => props.underScore};
  color: ${text_color.main_color.prime};
  font-size: 1.5em;

`;
export const SImg = styled.img`
  width: 226px;
  height: 195px;

  margin-top: 50px;
`;
