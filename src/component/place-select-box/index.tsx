import React, { useMemo } from "react";
import Select from "react-select";
import { THEME_COLOR } from "../../asset/constant";

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
        maxMenuHeight = {110}
        placeholder="Select"
        styles={{
          option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'white' : 'grayer',
            backgroundColor: state.isSelected ? `${THEME_COLOR.VIOLET}` : 'white',
          }),
          control: (base, state) => ({
              ...base,
              '&:hover': { borderColor: 'gray'}, // border style on hover
              border: '1px solid lightgray', // default border color
              boxShadow: 'none', // no box-shadow
          }),
        }}
        options={options}/>
      </>
  );
}

export default PlaceSelectBox;