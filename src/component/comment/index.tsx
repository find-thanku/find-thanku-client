import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../asset/constant";
import { CommentProps } from "./types";

const Comment = (props: CommentProps) => {

  return (
    <S.CommentContainer>
      <S.CommentInfo>
        <S.Profile src={STATIC_URL.LOGIN}/>
        <S.Username>{props.username}</S.Username>
      </S.CommentInfo>
      <S.CommentContent>{props.content}</S.CommentContent>
      <S.DateContainer>
          <S.Date>{props.date}</S.Date>
      </S.DateContainer>
    </S.CommentContainer>
  );
};

export default Comment;
