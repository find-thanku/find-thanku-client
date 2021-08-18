import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../asset/constant";

const UploadHeader = () => {
  return (
    <>
      <S.MobileHeader>
        <S.BackIcon src={STATIC_URL.BACK_BUTTON} alt="back" />
        <S.Title>글쓰기</S.Title>
        <S.SubmitButton>등록</S.SubmitButton>
      </S.MobileHeader>
    </>
  );
};

export default UploadHeader;
