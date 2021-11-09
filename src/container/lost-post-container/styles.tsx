import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${THEME_COLOR.VIOLET};
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 2rem 0rem;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  background-color: white;
`;

export const PostHeader = styled.div`
  border-bottom: 1px solid ${THEME_COLOR.GRAYER};
`;

export const Board = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${THEME_COLOR.DARK_VIOLET};
  margin-bottom: 0.3rem;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const LostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0.7rem 0rem;
  padding: 0.5rem;
  background-color: ${THEME_COLOR.GRAYER};
  border-radius: 0.5rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.2rem;
`;

export const Item = styled.div`
  font-size: 1rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Location = styled.div`
  font-size: 1rem;
`;
export const Icon = styled.img`
  height: 1rem;
  width: 1rem;
  margin-right: 0.4rem;
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  border: 10px solid black;
`;

export const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Content = styled.div`
  font-size: 1rem;
  padding-bottom: 0.7rem;
  margin: 1rem 0rem;
  border-bottom: 1px solid ${THEME_COLOR.GRAYER};
`;

export const CommentContainer = styled.div`
`;

export const CommentNum = styled.div`
  font-size: 1rem;
  color: ${THEME_COLOR.DARK_VIOLET};
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const CommentFooter = styled.div`
`;