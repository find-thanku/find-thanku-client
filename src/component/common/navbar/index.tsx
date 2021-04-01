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
        <S.NavbarMenus>
          <S.NavbarMenu to="/">
            <S.MenuText>Home</S.MenuText>
          </S.NavbarMenu>
          <S.NavbarMenu to="/">
            <S.MenuText>공지사항</S.MenuText>
          </S.NavbarMenu>
        </S.NavbarMenus>
      </S.Navbar>
    </>
  );
};

export default Navbar;
