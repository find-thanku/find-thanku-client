import React from "react";
import * as S from "./styles";
import { NavbarProps } from "./types";

const Navbar = (props: NavbarProps) => {
  const { show } = props;
  return (
    <>
      <S.Navbar active={show}>
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
