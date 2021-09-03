import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../asset/constant";

const CommentFooter = () => {
  return (
    <>
      <S.Footer>
        <S.InputContainer>
          <S.Input placeholder="댓글을 입력하세요."/>
          <S.SubmitButton src={STATIC_URL.SUBMIT_VIOLET} alt="submit"/>
        </S.InputContainer>
      </S.Footer>
    </> 
  );
};

export default CommentFooter;
