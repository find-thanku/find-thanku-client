import React from "react";
import * as S from "./styles";
import LatestPosts from "../../component/latest-posts";

const MainContainer = () => {
  return (
    <S.MainContainer>
      <S.Intro>
        <div>프로젝트 설명</div>
      </S.Intro>
      <LatestPosts title={"공지사항"} />
      <LatestPosts title={"분실물"} />
      <LatestPosts title={"습득물"} />
    </S.MainContainer>
  );
};

export default MainContainer;
