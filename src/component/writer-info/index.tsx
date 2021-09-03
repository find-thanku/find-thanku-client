import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../asset/constant";

const WriterInfo = () => {
  return (
    <S.WriterInfoContainer>
      <S.ProfileImage src={STATIC_URL.LOGIN}/>
      <S.InfoContainer>
        <S.Name>deltaori0</S.Name>
        <S.Date>2021.09.03 10:50</S.Date>
      </S.InfoContainer>
    </S.WriterInfoContainer>
  );
};

export default WriterInfo;
