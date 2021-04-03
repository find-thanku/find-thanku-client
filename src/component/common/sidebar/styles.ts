import styled from "styled-components";
import { THEME_COLOR } from "../../../asset/constant";
import { Link } from "react-router-dom";

interface SidebarProps {
  active?: boolean;
}

export const Sidebar = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 60%;
  position: fixed;
  z-index: 1100;
  top: 0;
  left: ${(props) => (props.active ? "-100%" : "0")};
  box-shadow: ${(props) =>
    props.active ? "none" : "rgba(0, 0, 0, 0.65) 0 0 0 100vh"};
  background-color: ${THEME_COLOR.VIOLET};
  transition: ${(props) => (props.active ? "350ms" : "850ms")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4.03rem;
  background-color: white;
`;

export const CloseButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  background: none;
  background-color: white;
`;

export const SidebarMenus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const SidebarMenu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 4rem);
  height: 2rem;
  margin: 0rem 2rem;
  padding: 2rem 0rem;
  text-decoration: none;
  color: white;
  border-bottom: 1px solid white;

  &:hover {
    background-color: ${THEME_COLOR.DARK_VIOLET};
  }
`;

export const MenuText = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;
