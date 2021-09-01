import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const Button = styled.button`
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`;

export const AddPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5rem;
  height: 6.5rem;
  background-color: ${THEME_COLOR.GRAY};
  border: 1px dashed black;
`;

export const PhotoPreview = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 6.5rem;
  height: 6.5rem;
  background-color: ${THEME_COLOR.VIOLET};
`;

export const Photo = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export const Delete = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0.2rem;
  z-index: 100;
`;