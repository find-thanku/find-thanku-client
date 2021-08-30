import React from "react";
import * as S from "./styles";
import LatestPosts from "../../component/latest-posts";
import CountInfo from "../../component/count-info";

const MainContainer = () => {
  return (
    <S.MainContainer>
      <S.Intro>
        <S.ProjectIntro>
          누구나 잃어 버린 물건을 쉽게 찾을 수 있도록 ! 찾아 주셔서 (FIN:D)
          고맙습니다 (THANKU) 의 의미를 담고 있는 FIN:D THANKU는 고려대학교
          구성원을 위한 분실물 센터입니다.
        </S.ProjectIntro>
        <S.CountInfoContainer>
          <CountInfo title={"분실물"} count={36}></CountInfo>
          <CountInfo title={"습득물"} count={42}></CountInfo>
          <CountInfo title={"방문자"} count={322}></CountInfo>
        </S.CountInfoContainer>
      </S.Intro>
      <LatestPosts title={"공지사항"} />
      <LatestPosts title={"분실물"} />
      <LatestPosts title={"습득물"} />
    </S.MainContainer>
  );
};

export default MainContainer;
