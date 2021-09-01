import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const Button = styled.button`
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  width: 100%;
`;

export const AddPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 6.5rem;
  height: 6.5rem;
  background-color: ${THEME_COLOR.GRAY};
  border: 1px dashed black;
  margin: 0.3rem 0.3rem;
`;

export const PhotoPreview = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  width: 6.5rem;
  height: 6.5rem;
  margin: 0.3rem 0.3rem;
`;

export const PhotoIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export const Photo = styled.img`
  width: 6.5rem;
  height: 6.5rem;
`;

export const Delete = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0.2rem;
  
  position: absolute;
  right: 0px;
`;