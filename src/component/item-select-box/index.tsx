import React, { useMemo } from "react";
import Select from "react-select";

const ItemSelectBox = ()  => {
  const options = useMemo(
    () => [
      { value: "악세서리", label: "악세서리" },
      { value: "전자기기", label: "전자기기" },
      { value: "가방", label: "가방" },
      { value: "기타 물품", label: "기타 물품" },
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

export default ItemSelectBox;