import React, { useMemo } from "react";
import Select from "react-select";
import { THEME_COLOR } from "../../asset/constant";
import { ItemSelectBoxProps } from "./types";

const ItemSelectBox= (props: ItemSelectBoxProps)  => {
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
        maxMenuHeight = {110}
        placeholder={props.placeholder}
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

export default ItemSelectBox;