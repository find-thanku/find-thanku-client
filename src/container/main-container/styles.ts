import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "../../asset/constant";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: white;
    height: calc(100vh - 5rem);
  }
`;
