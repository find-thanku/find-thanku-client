import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../asset/constant";

const LoginContainer = () => {
  return (
    <S.LoginContainer>
      <S.Warn>
        <S.Icon src={STATIC_URL.WARN} />
        <S.Title>주의 사항</S.Title>
        <S.Contents>
          FIN:D THANKU는 고려대학교 학생만 이용할 수 있는 서비스입니다.
          <S.Highlight> @korea.ac.kr </S.Highlight>
          계정으로 로그인 해 주세요!
        </S.Contents>
        <S.Button>로그인</S.Button>
      </S.Warn>
    </S.LoginContainer>
  );
};

export default LoginContainer;
