import React from "react";
import UploadHeader from "../../component/upload-header";
import ItemSelectBox from "../../component/item-select-box";
import PlaceSelectBox from "../../component/place-select-box";
import PhotoUploader from "../../component/photo-uploader";
import * as S from "./styles";

const LostUploadContainer = () => {
  return (
    <S.Wrapper>
      <UploadHeader/>
        <S.UploadContainer>
          <S.ItemContainer>
            <S.TypeContainer>
                <ItemSelectBox placeholder="분실물"/>
            </S.TypeContainer>
            <S.TypeContainer>
                <PlaceSelectBox placeholder="분실 장소"/>
            </S.TypeContainer>
          </S.ItemContainer>
          <S.TitleContainer>
            <S.InputBox placeholder="제목을 입력해 주세요."/>
          </S.TitleContainer>
          <S.ContentBox placeholder="내용을 입력해 주세요."/>
          <PhotoUploader/>
        </S.UploadContainer>
    </S.Wrapper>
  );
};

export default LostUploadContainer;
