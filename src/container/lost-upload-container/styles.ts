import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 0.8rem 1rem;
`;

export const TitleContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 0.5rem;

`;

export const InputBox = styled.input`
  width: 100%;
  height: 2.2rem;

  font-size: 1rem;
  outline: none;

  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 0.1rem;
  padding: 0.5rem;

`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0rem 0.4rem 0rem 0rem;

`;

export const SubText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ContentBox = styled.textarea`
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20rem;

  font-size: 1rem;
  resize: vertical;
  outline: none;

  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 0.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;

`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImageBox = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  font-size: 1.4rem;
  height: 30rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};
  background-color: white;

  border-radius: 0.7rem;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
`;

export const ImageButton = styled.button`

  width: 4.5rem;
  height: 2rem;
  margin: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  border-radius: 0.5rem;

  background-color: ${THEME_COLOR.VIOLET};
  color: white;
  box-shadow: 3px 3px 3px 3px ${THEME_COLOR.GRAYER};

  font-size: 0.8rem;
  cursor: pointer;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 2.5rem;
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: ${THEME_COLOR.VIOLET};
  color: white;
  border-radius: 0.7rem;
  margin: 0rem 1rem 3rem 0rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const Photo = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  z-index: 100%;
  margin-right: 0.5rem;
`;