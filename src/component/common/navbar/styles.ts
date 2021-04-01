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
  justify-content: center;
  position: fixed;
  top: 0;
  margin: 2rem;
  background-color: ${THEME_COLOR.VIOLET};
  left: ${(props) => (props.active ? "-100%" : "0")};
  transition: ${(props) => (props.active ? "350ms" : "850ms")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.img`
  width: 3rem;
  height: 3rem;
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
