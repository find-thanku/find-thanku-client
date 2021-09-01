import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const NoticePreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 95%;
  height: 8rem;
  margin: 0.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.2rem 0.05rem ${THEME_COLOR.DARK_VIOLET};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.7rem;
  font-weight: bold;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3rem;
`;

export const Image = styled.img`
  height: 3.5rem;
  width: 3.5rem;
`;
