import React, { useRef, useState } from "react";
import { STATIC_URL } from "../../asset/constant";
import * as S from "./styles";
import { Photo } from "./types";


const PhotoUploader = (props: any) => {
  const [ photoList, setPhotoList] = useState<Photo[]>([]);

  const photoPreview = () => {
    return photoList.map((photo) => {
      return (
        <S.PhotoPreview>
          <S.Delete 
            src={STATIC_URL.X_MARK_WHITE} 
            alt="delete"
            onClick={() => removePhoto(photo.url)}
          />
          <S.Photo src={photo.url} alt="file to add"/>
        </S.PhotoPreview>
      )
    })
  }

  const removePhoto = (deleteUrl: string) => {
    setPhotoList(photoList.filter(photo => photo.url !== deleteUrl))
  }

  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef<any>(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event: any) => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handlePhoto = (e: any) => {
    let temp = Array<Photo>();
    const photoToAdd = e.target.files;

    for (let i = 0; i < photoToAdd.length; i++) {
      temp.push({id: photoToAdd[i].name, file: photoToAdd[i], url: URL.createObjectURL(photoToAdd[i])})
    };
    setPhotoList(temp.concat(photoList));
  };

  return (
    <>
      <S.PhotoContainer>
        <S.AddPhoto onClick={handleClick}>
          <S.PhotoIcon src={STATIC_URL.PHOTO} alt="photo"/>
        </S.AddPhoto>
        {photoPreview()}
      </S.PhotoContainer>
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        multiple
        ref={hiddenFileInput}
        onChange={(e) => handlePhoto(e)}
        style={{display: 'none'}}
      />
    </>
  );
}

export default PhotoUploader;