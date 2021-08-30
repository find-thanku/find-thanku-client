import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../asset/constant";
import { CountInfoProps } from "./types";

const CountInfo = (props: CountInfoProps) => {
  const { title, count } = props;
  return (
    <S.CountInfoContainer>
      <S.Title>{title}</S.Title>
      <S.Count>{count}</S.Count>
    </S.CountInfoContainer>
  );
};

export default CountInfo;
