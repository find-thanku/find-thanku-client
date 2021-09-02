import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const NoticeBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 0rem 1rem;
`;

interface SearchProps {
  searchClicked: boolean;
}

export const Category = styled.div<SearchProps>`
  display: flex;
  color: ${THEME_COLOR.DARK_VIOLET};
  font-size: 1.2rem;
  font-weight: bold;
  transition-delay: 0.3s;
`;

export const SearchContainer = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  margin: 1rem;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.searchClicked ? "#F1F1F1" : "transparent"};
  border-radius: 5rem;
`;

export const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const SearchInput = styled.input<SearchProps>`
  width: ${(props) => (props.searchClicked ? "17rem" : "0rem")};
  margin: ${(props) => (props.searchClicked ? "0rem 0.5rem" : "0rem 0rem")};
  background-color: transparent;
  font-size: 1rem;
  border: none;
  outline: none;
  transition: 2s;
`;

export const CloseIcon = styled.img<SearchProps>`
  width: ${(props) => (props.searchClicked ? "0.7rem" : "0rem")};
  height: ${(props) => (props.searchClicked ? "0.7rem" : "0rem")};
  cursor: pointer;
  transition: 0.3s;
  transition-delay: 0.3s;
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
