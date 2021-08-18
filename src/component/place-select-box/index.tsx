import React, { useMemo } from "react";
import Select from "react-select";

const PlaceSelectBox = ()  => {
  const options = useMemo(
    () => [
      { value: "하나스퀘어", label: "하나스퀘어" },
      { value: "과학도서관", label: "과학도서관" },
      { value: "애기능생활관", label: "애기능생활관" },
      { value: "우정정보관", label: "우정정보관" },
    ],
    []
  );
  return (
      <>
      <Select 
        style={{width: `100%`}}
        options={options}/>
      </>
  );
}

export default PlaceSelectBox;