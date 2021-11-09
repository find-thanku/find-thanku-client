import React from "react";
import { STATIC_URL } from "../../asset/constant";
import WriterInfo from "../../component/writer-info";
import Comment from "../../component/comment";
import CommentUploader from "../../component/comment-uploader";
import SwipeableViews from 'react-swipeable-views';
import * as S from "./styles";

const LostPostContainer = () => {
  return (
    <S.Wrapper>
        <S.PostContainer>
          <S.PostHeader>
            <S.Board>[분실물 게시판]</S.Board>
            <S.Title>다람쥐길에서 에어팟을 잃어버렸어요</S.Title>
            <WriterInfo/>
          </S.PostHeader>
          <S.LostInfoContainer>
            <S.ItemContainer>
              <S.Icon src={STATIC_URL.ITEM} />
              <S.Item><b>분실물: </b>에어팟</S.Item>
            </S.ItemContainer>
            <S.LocationContainer>
              <S.Icon src={STATIC_URL.LOCATION} />
              <S.Location><b>분실 장소: </b>다람쥐길</S.Location>
            </S.LocationContainer>
          </S.LostInfoContainer>
          <SwipeableViews animateHeight enableMouseEvents>
            <S.Images src="https://user-images.githubusercontent.com/50616334/132046338-7c028d99-3f3b-4378-9ee3-64d2967f3850.jpg"/>
            <S.Images src="https://user-images.githubusercontent.com/50616334/131988922-e89f4a3a-4daf-49b4-95aa-b0bdc3bf2ab1.jpeg"/>
            <S.Images src="https://user-images.githubusercontent.com/50616334/132054514-45678a43-06e6-45ef-bb1b-c21cbb2fb548.jpg"/>
          </SwipeableViews>
          <S.Content>아 정말 아끼던 건데 너무 슬프네요.</S.Content>
          <S.CommentContainer>
            <S.CommentNum>댓글 (2)</S.CommentNum>
            <Comment
              username="ghddmstn"
              content="저 가지고 있습니다. 연락 주세요."
              date="2021.09.03 10:52"
            />
            <Comment
              username="deltaori0"
              content="헉 감사합니다!"
              date="2021.09.03 10:53"
            />
            <Comment
              username="deltaori0"
              content="헉 감사합니다!"
              date="2021.09.03 10:53"
            />
            <CommentUploader/>
          </S.CommentContainer>
        </S.PostContainer>
    </S.Wrapper>
  );
};

export default LostPostContainer;