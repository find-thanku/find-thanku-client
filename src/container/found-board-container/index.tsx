import React from "react";
import * as S from "./styles";
import FoundPostPreview from "../../component/found-post-preview";

const FoundBoardContainer = () => {
  return (
    <S.FoundBoardContainer>
      <S.Category>습득물</S.Category>
      <FoundPostPreview
        title={"미래관 3층에서 지갑을 찾았어요"}
        item={"지갑"}
        location={"미래관"}
        replyCount={5}
      />
      <FoundPostPreview
        title={"미래관 3층에 에어팟 놔두고 가신 분"}
        item={"에어팟"}
        location={"미래관"}
        image={
          "https://user-images.githubusercontent.com/46309902/119209525-143f4c80-bae2-11eb-8053-14a5d09853c6.PNG"
        }
        replyCount={5}
      />
      <FoundPostPreview
        title={"초록색 공룡 그려진 에어팟 케이스"}
        item={"에어팟"}
        location={"미래관"}
        image={
          "https://user-images.githubusercontent.com/46309902/119209525-143f4c80-bae2-11eb-8053-14a5d09853c6.PNG"
        }
        replyCount={5}
      />
    </S.FoundBoardContainer>
  );
};

export default FoundBoardContainer;
