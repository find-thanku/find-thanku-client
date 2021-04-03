import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../asset/constant";
import { PostPreviewProps } from "./types";

const PostPreview = (props: PostPreviewProps) => {
  const { title } = props;
  return (
    <S.PostPreview>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.PlusIcon src={STATIC_URL.PLUS_ICON} />
      </S.TitleContainer>

      <S.Post>
        <S.PostTitle>다람쥐길에서 에어팟 잃어 버렸어요</S.PostTitle>
        <S.PostDate>21. 04. 02</S.PostDate>
      </S.Post>
      <S.Post>
        <S.PostTitle>참살이에서 핑크색 지갑 보신 분?</S.PostTitle>
        <S.PostDate>21. 04. 02</S.PostDate>
      </S.Post>
      <S.Post>
        <S.PostTitle>교육관 로비에 애플 펜슬 두고 왔어요 ㅠㅠ</S.PostTitle>
        <S.PostDate>21. 04. 02</S.PostDate>
      </S.Post>
    </S.PostPreview>
  );
};

export default PostPreview;
