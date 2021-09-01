import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../asset/constant";
import { PostPreviewProps } from "./types";

const PostPreview = (props: PostPreviewProps) => {
  const { title, item, location, image, replyCount } = props;
  return (
    <S.PostPreview>
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
    </S.PostPreview>
  );
};

export default PostPreview;
