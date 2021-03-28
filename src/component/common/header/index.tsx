import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Logo to="/">
        <div>FIN:D thanKU</div>
      </S.Logo>
      <S.DesktopButtons>
        <S.ButtonContainer to="/lost-board">
          <S.Button>분실물</S.Button>
        </S.ButtonContainer>
      </S.DesktopButtons>
      <S.MobileButtons></S.MobileButtons>
    </S.Header>
  );
};

export default Header;
