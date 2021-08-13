import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const FoundBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 0rem 2rem;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${THEME_COLOR.DARK_VIOLET};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const PostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0.4rem;
  align-items: center;
  background-color: ${THEME_COLOR.VIOLET};
`;

export const WriteButton = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 3.7rem;
  height: 3.7rem;
  right: 0.7rem;
  bottom: 0.7rem;
  background-color: #353a5d;
  border-radius: 50%;
`;

export const PlusIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;
