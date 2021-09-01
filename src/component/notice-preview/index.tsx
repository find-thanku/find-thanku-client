import React from "react";
import * as S from "./styles";
import { NoticePreviewProps } from "./types";

const NoticePreview = (props: NoticePreviewProps) => {
  const { title, content, image } = props;
  return (
    <S.NoticePreview>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
      <S.Contents>
        <S.Content>{content}</S.Content>
        {image && <S.Image src={image} />}
      </S.Contents>
    </S.NoticePreview>
  );
};

export default NoticePreview;
