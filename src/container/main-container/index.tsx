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
      if (lost - lostCount > 2) setLostCount(lostCount + 2);
      else setLostCount(lost);
    }, 10);
  };

  const increaseFoundCount = () => {
    setTimeout(() => {
      if (found - foundCount > 2) setFoundCount(foundCount + 2);
      else setFoundCount(found);
    }, 10);
  };

  const increaseVisitorCount = () => {
    setTimeout(() => {
      if (visitor - visitorCount > 10) setVisitorCount(visitorCount + 10);
      else setVisitorCount(visitor);
    }, 10);
  };

  useEffect(() => {
    if (lostCount < lost) increaseLostCount();
    if (foundCount < found) increaseFoundCount();
    if (visitorCount < visitor) increaseVisitorCount();
  });

  return (
    <S.MainContainer>
      <S.Intro>
        <S.ProjectIntro>
          <S.Title>
            <S.Line1>찾아 주셔서 (FIN:D)</S.Line1>{" "}
            <S.Line2>감사합니다 (THANKU)</S.Line2>
          </S.Title>
          <S.Contents>
            누구나 잃어 버린 물건을 쉽게 찾을 수 있도록 ! FIN:D THANKU는
            고려대학교 구성원을 위한 분실물 센터입니다.
          </S.Contents>
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
