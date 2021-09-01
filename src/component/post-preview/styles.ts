import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const PostPreview = styled.div`
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
  width: 85%;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ReplyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.7rem;
  background-color: #d3d8f0;
  border-radius: 50%;
`;

export const Reply = styled.div`
  font-size: 1rem;
  color: ${THEME_COLOR.DARK_VIOLET};
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;

export const Icon = styled.img`
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.4rem;
`;

export const Item = styled.div`
  font-size: 1.1rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Location = styled.div`
  font-size: 1.1rem;
`;

export const Image = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  /* margin-right: 1rem; */
`;
