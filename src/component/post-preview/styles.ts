import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const PostPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 18rem;
  height: 10rem;
  margin: 1rem 0rem;
  background-color: ${THEME_COLOR.GRAY};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 2rem);
  padding-bottom: 0.3rem;
  margin: 0rem 1rem;
`;

export const Title = styled.div`
  /* display: flex;
  align-items: center; */
  padding-bottom: 0.3rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const PlusIcon = styled.img`
  width: 1.1rem;
  height: 1.1rem;
`;

export const Post = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  margin: 0rem 1rem;
  padding: 0.3rem 0rem;
  font-size: 1rem;
  border-bottom: 0.8px solid black;
`;

export const PostTitle = styled.div`
  width: 70%;
  height: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PostDate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 5rem;
  font-size: 1rem;
`;
