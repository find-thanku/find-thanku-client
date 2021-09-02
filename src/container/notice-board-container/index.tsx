import React, { useEffect, useState } from "react";
import * as S from "./styles";
import NoticePreview from "../../component/notice-preview";
import noticeBoardAPI from "../../common/lib/api/notice-board";
import { NoticePostModel } from "../../common/model/notice-post";
import { STATIC_URL } from "../../asset/constant";

const NoticeBoardContainer = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([] as NoticePostModel[]);
  const [searchClicked, setSearchClicked] = useState(false);

  const getPostList = async (page: number) => {
    const result = await noticeBoardAPI.getPostList(page);
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
    <S.NoticeBoardContainer>
      <S.CategoryContainer>
        <S.Category searchClicked={searchClicked}>공지사항</S.Category>
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
            const { title, content, image_url } = post;
            return (
              <NoticePreview
                key={idx}
                title={title}
                content={content}
                image={image_url}
              />
            );
          })}
      </S.PostContainer>
    </S.NoticeBoardContainer>
  );
};

export default NoticeBoardContainer;
