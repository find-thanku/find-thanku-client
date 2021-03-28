import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <div>FIN:D thanKU</div>
      </S.Logo>
      <S.DesktopButtons></S.DesktopButtons>
      <S.MobileButtons></S.MobileButtons>
    </S.Header>
  );
};

export default Header;
