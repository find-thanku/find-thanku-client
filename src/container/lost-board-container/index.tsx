import React, { useEffect, useState } from "react";
import * as S from "./styles";
import PostPreview from "../../component/post-preview";
import lostBoardAPI from "../../common/lib/api/lost-board";
import { LostPostModel } from "../../common/model/lost-post";
import { STATIC_URL } from "../../asset/constant";

const LostBoardContainer = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([] as LostPostModel[]);
  const [searchClicked, setSearchClicked] = useState(false);

  const getPostList = async (page: number) => {
    const result = await lostBoardAPI.getPostList(page);
    const data = result.data;
    setData(data);
  };

  const toggleSearch = () => {
    setSearchClicked(!searchClicked);
  };

  useEffect(() => {
    getPostList(page);
  }, [page]);

  return (
    <S.LostBoardContainer>
      <S.CategoryContainer>
        <S.Category searchClicked={searchClicked}>분실물</S.Category>
        <S.SearchContainer searchClicked={searchClicked}>
          <S.SearchIcon src={STATIC_URL.SEARCH} onClick={toggleSearch} />
          <S.SearchInput
            searchClicked={searchClicked}
            placeholder="검색어를 입력해 주세요"
          />
          <S.CloseIcon
            searchClicked={searchClicked}
            src={STATIC_URL.CLOSE}
            onClick={toggleSearch}
          />
        </S.SearchContainer>
      </S.CategoryContainer>
      <S.PostContainer>
        {data &&
          data.map((post, idx) => {
            const { title, item_name, lost_place, reply_num, image_url } = post;
            return (
              <PostPreview
                key={idx}
                title={title}
                item={item_name}
                location={lost_place}
                replyCount={reply_num}
                image={image_url}
              />
            );
          })}
        <S.WriteButton>
          <S.PlusIcon src={STATIC_URL.WHITE_PLUS_ICON} />
        </S.WriteButton>
      </S.PostContainer>
    </S.LostBoardContainer>
  );
};

export default LostBoardContainer;
