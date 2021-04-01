import React, { useState } from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../../asset/constant";
import Sidebar from "../navbar";
import { HeaderProps } from "./types";

const Header = (props: HeaderProps) => {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
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
        <S.SidebarIcon
          src={STATIC_URL.NAVBAR}
          alt="navbar"
          onClick={toggleSidebar}
        />
        <Sidebar show={show} toggleSidebar={toggleSidebar} />
      </S.MobileHeader>
    </>
  );
};

export default Header;
