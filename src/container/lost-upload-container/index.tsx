import React from "react";
import { STATIC_URL } from "../../asset/constant";
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
                <S.SubText>분실물</S.SubText>
                <ItemSelectBox/>
            </S.TypeContainer>
            <S.TypeContainer>
                <S.SubText>분실 장소</S.SubText>
                <PlaceSelectBox/>
            </S.TypeContainer>
          </S.ItemContainer>
          <S.TitleContainer>
            <S.InputBox placeholder="제목을 입력해 주세요."/>
          </S.TitleContainer>
          <S.ContentBox placeholder="내용을 입력해 주세요."/>
          <label>
            <S.ImageInput
              type="file"
              accept="image/jpeg, image/jpg, image/png, image/gif"
            />
            <S.PhotoContainer>
              <S.Photo src={STATIC_URL.PHOTO_WHITE} alt="photo"/>
              사진 첨부
            </S.PhotoContainer>
          </label>
          <PhotoUploader/>
        </S.UploadContainer>
    </S.Wrapper>
  );
};

export default LostUploadContainer;