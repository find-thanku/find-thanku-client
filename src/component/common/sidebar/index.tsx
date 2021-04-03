import React from "react";
import * as S from "./styles";
import { HeaderProps } from "../header/types";
import { STATIC_URL } from "../../../asset/constant";

const Sidebar = (props: HeaderProps) => {
  const { show, toggleSidebar } = props;

  return (
    <>
      <S.Sidebar active={show}>
        <S.ButtonContainer>
          <S.CloseButton
            src={STATIC_URL.CLOSE_BUTTON}
            alt="navbar"
            onClick={toggleSidebar}
          />
        </S.ButtonContainer>
        <S.SidebarMenus onClick={toggleSidebar}>
          <S.SidebarMenu to="/">
            <S.MenuText>Home</S.MenuText>
          </S.SidebarMenu>
          <S.SidebarMenu to="/notice">
            <S.MenuText>공지사항</S.MenuText>
          </S.SidebarMenu>
          <S.SidebarMenu to="/lost-board">
            <S.MenuText>분실물</S.MenuText>
          </S.SidebarMenu>
          <S.SidebarMenu to="/found-board">
            <S.MenuText>습득물</S.MenuText>
          </S.SidebarMenu>
        </S.SidebarMenus>
      </S.Sidebar>
    </>
  );
};

export default Sidebar;
