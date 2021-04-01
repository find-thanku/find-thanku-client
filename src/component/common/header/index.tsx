import React, { useState } from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../../asset/constant";
import Navbar from "../navbar";
import { HeaderProps } from "./types";

const Header = (props: HeaderProps) => {
  const [show, setShow] = useState(false);

  const showSidebar = () => {
    setShow(!show);
  };

  return (
    <>
      <S.Header>
        <S.Logo to="/">
          <div>FIN:D thanKU</div>
        </S.Logo>
        <S.DesktopButtons>
          <S.ButtonContainer to="/notice">
            <S.Button>공지사항</S.Button>
          </S.ButtonContainer>
          <S.ButtonContainer to="/lost-board">
            <S.Button>분실물</S.Button>
          </S.ButtonContainer>
          <S.ButtonContainer to="/found-board">
            <S.Button>습득물</S.Button>
          </S.ButtonContainer>
          <S.ButtonContainer to="/login">
            <S.Button>로그인</S.Button>
          </S.ButtonContainer>
        </S.DesktopButtons>
      </S.Header>
      <S.MobileHeader>
        <S.NavbarIcon
          src={STATIC_URL.NAVBAR}
          alt="navbar"
          onClick={showSidebar}
        />
        <Navbar show={show} showSidebar={showSidebar} />
      </S.MobileHeader>
    </>
  );
};

export default Header;
