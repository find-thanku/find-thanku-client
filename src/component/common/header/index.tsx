import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
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
      </S.DesktopButtons>
      <S.MobileButtons></S.MobileButtons>
    </S.Header>
  );
};

export default Header;
