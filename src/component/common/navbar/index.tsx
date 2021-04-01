import React, { useState } from "react";
import * as S from "./styles";
import { HeaderProps } from "../header/types";
import { STATIC_URL } from "../../../asset/constant";

const Navbar = (props: HeaderProps) => {
  const { show, showSidebar } = props;

  return (
    <>
      <S.Navbar active={show}>
        <S.ButtonContainer>
          <S.CloseButton
            src={STATIC_URL.CLOSE_BUTTON}
            alt="navbar"
            onClick={showSidebar}
          />
        </S.ButtonContainer>
        <S.NavbarMenus onClick={showSidebar}>
          <S.NavbarMenu to="/">
            <S.MenuText>Home</S.MenuText>
          </S.NavbarMenu>
          <S.NavbarMenu to="/notice">
            <S.MenuText>공지사항</S.MenuText>
          </S.NavbarMenu>
          <S.NavbarMenu to="/lost-board">
            <S.MenuText>분실물</S.MenuText>
          </S.NavbarMenu>
          <S.NavbarMenu to="/found-board">
            <S.MenuText>습득물</S.MenuText>
          </S.NavbarMenu>
        </S.NavbarMenus>
      </S.Navbar>
    </>
  );
};

export default Navbar;
