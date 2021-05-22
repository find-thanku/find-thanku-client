import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const FoundBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3rem;
  align-items: center;
  color: ${THEME_COLOR.DARK_VIOLET};
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 2px solid lightgray;
`;
