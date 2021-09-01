import React, { useRef, useState } from "react";
import { STATIC_URL } from "../../asset/constant";
import * as S from "./styles";


const PhotoUploader = (props: any) => {

  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef<any>(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event: any) => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <S.PhotoContainer>
        <S.AddPhoto onClick={handleClick}>
          <S.Photo src={STATIC_URL.PHOTO} alt="photo"/>
        </S.AddPhoto>
        <S.PhotoPreview>
          <S.Delete src={STATIC_URL.X_MARK_WHITE} alt="delete"/>
        </S.PhotoPreview>
        <S.PhotoPreview>
          <S.Delete src={STATIC_URL.X_MARK_WHITE} alt="delete"/>
        </S.PhotoPreview>
      </S.PhotoContainer>
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        multiple
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  );
}

export default PhotoUploader;