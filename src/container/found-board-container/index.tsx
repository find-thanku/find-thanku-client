import React, { useEffect, useState } from "react";
import * as S from "./styles";
import FoundPostPreview from "../../component/found-post-preview";
import foundBoardAPI from "../../common/lib/api/found-board";
import { FoundPostModel } from "../../common/model/found-post";
import { STATIC_URL } from "../../asset/constant";

const FoundBoardContainer = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([] as FoundPostModel[]);

  const getPostList = async (page: number) => {
    const result = await foundBoardAPI.getPostList(page);
    const data = result.data;
    setData(data);
  };

  useEffect(() => {
    getPostList(page);
  }, [page]);

  return (
    <S.FoundBoardContainer>
      <S.CategoryContainer>
        <S.Category>습득물</S.Category>
      </S.CategoryContainer>
      <S.PostContainer>
        {data &&
          data.map((post, idx) => {
            const { title, item_name, get_place, reply_num } = post;
            return (
              <FoundPostPreview
                key={idx}
                title={title}
                item={item_name}
                location={get_place}
                replyCount={reply_num}
              />
            );
          })}
        <S.WriteButton>
          <S.PlusIcon src={STATIC_URL.WHITE_PLUS_ICON} />
        </S.WriteButton>
      </S.PostContainer>
    </S.FoundBoardContainer>
  );
};

export default FoundBoardContainer;
