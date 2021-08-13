import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../asset/constant";
import { FoundPostPreviewProps } from "./types";

const FoundPostPreview = (props: FoundPostPreviewProps) => {
  const { title, item, location, image, replyCount } = props;
  return (
    <S.FoundPostPreview>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.ReplyContainer>
          <S.Reply>{replyCount}</S.Reply>
        </S.ReplyContainer>
      </S.TitleContainer>
      <S.Contents>
        <S.ItemInfo>
          <S.ItemContainer>
            <S.Icon src={STATIC_URL.ITEM} />
            <S.Item>{item}</S.Item>
          </S.ItemContainer>
          <S.LocationContainer>
            <S.Icon src={STATIC_URL.LOCATION} />
            <S.Location>{location}</S.Location>
          </S.LocationContainer>
        </S.ItemInfo>
        {image && <S.Image src={image} />}
      </S.Contents>
    </S.FoundPostPreview>
  );
};

export default FoundPostPreview;
