import React from "react";
import * as S from "./styles";
import PostPreview from "../../component/post-preview";

const MainContainer = () => {
  return (
    <S.MainContainer>
      <PostPreview title={"공지사항"} />
      <PostPreview title={"분실물"} />
      <PostPreview title={"습득물"} />
    </S.MainContainer>
  );
};

export default MainContainer;
