import React, { useState, useEffect } from "react";
import * as S from "./styles";
import LatestPosts from "../../component/latest-posts";
import CountInfo from "../../component/count-info";

const MainContainer = () => {
  const [lostCount, setLostCount] = useState(0);
  const [foundCount, setFoundCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);
  const lost = 23;
  const found = 32;
  const visitor = 322;

  const increaseLostCount = () => {
    setTimeout(() => {
      setLostCount(lostCount + 3);
    }, 5);
  };

  const increaseFoundCount = () => {
    setTimeout(() => {
      setFoundCount(foundCount + 3);
    }, 5);
  };

  const increaseVisitorCount = () => {
    setTimeout(() => {
      setVisitorCount(visitorCount + 10);
    }, 5);
  };

  useEffect(() => {
    if (lostCount < lost) increaseLostCount();
  }, [lostCount]);

  useEffect(() => {
    if (foundCount < found) increaseFoundCount();
  }, [foundCount]);

  useEffect(() => {
    if (visitorCount < visitor) increaseVisitorCount();
  }, [visitorCount]);

  return (
    <S.MainContainer>
      <S.Intro>
        <S.ProjectIntro>
          누구나 잃어 버린 물건을 쉽게 찾을 수 있도록 ! 찾아 주셔서 (FIN:D)
          고맙습니다 (THANKU) 의 의미를 담고 있는 FIN:D THANKU는 고려대학교
          구성원을 위한 분실물 센터입니다.
        </S.ProjectIntro>
        <S.CountInfoContainer>
          <CountInfo title={"분실물"} count={lostCount}></CountInfo>
          <CountInfo title={"습득물"} count={foundCount}></CountInfo>
          <CountInfo title={"방문자"} count={visitorCount}></CountInfo>
        </S.CountInfoContainer>
      </S.Intro>
      <LatestPosts title={"공지사항"} />
      <LatestPosts title={"분실물"} />
      <LatestPosts title={"습득물"} />
    </S.MainContainer>
  );
};

export default MainContainer;
