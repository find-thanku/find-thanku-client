import React, { useState } from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../../asset/constant";
import Sidebar from "../sidebar";
import { HeaderProps } from "./types";

const Header = (props: HeaderProps) => {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow(!show);
  };

  return (
    <>
      <S.Header>
        <S.LogoContainer to="/">
          <S.Logo>FIN:D THANKU</S.Logo>
        </S.LogoContainer>
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
        <S.SidebarIcon
          src={STATIC_URL.SIDEBAR}
          alt="sidebar"
          onClick={toggleSidebar}
        />
        <Sidebar show={show} toggleSidebar={toggleSidebar} />
        <S.LogoContainer to="/">
          <S.Logo>FIN:D THANKU</S.Logo>
        </S.LogoContainer>
        <S.LoginContainer to="/login">
          <S.Login src={STATIC_URL.LOGIN} alt="login" />
        </S.LoginContainer>
      </S.MobileHeader>
    </>
  );
};

export default Header;
