import React, { useEffect, useState } from "react";
import * as S from "./styles";
import FoundPostPreview from "../../component/found-post-preview";
import foundBoardAPI from "../../common/lib/api/found-board";
import { FoundPostModel } from "../../common/model/found-post";

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
      <S.Category>습득물</S.Category>
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
    </S.FoundBoardContainer>
  );
};

export default FoundBoardContainer;
