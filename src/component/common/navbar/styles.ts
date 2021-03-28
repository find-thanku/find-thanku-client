import styled from "styled-components";
import { THEME_COLOR } from "../../../asset/constant";
import { Link } from "react-router-dom";

interface NavbarProps {
  active?: boolean;
}

export const Navbar = styled.div<NavbarProps>`
  display: flex;
  width: 60%;
  height: 60%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  margin: 2rem;
  background-color: ${THEME_COLOR.VIOLET};
  left: ${(props) => (props.active ? "-100%" : "0")};
  transition: ${(props) => (props.active ? "350ms" : "850ms")};
`;

export const NavbarMenus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const NavbarMenu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  padding: 1rem 0rem;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: black;
  }
`;

export const MenuText = styled.span`
  font-size: 1.2rem;
`;
