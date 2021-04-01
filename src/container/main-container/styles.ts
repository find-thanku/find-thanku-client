import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "../../asset/constant";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${THEME_COLOR.VIOLET};

  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: white;
    height: calc(100vh - 5rem);
  }
`;

export const Intro = styled.div`
  display: flex;
  width: 80%;
  height: 20rem;
  margin: 2rem 0rem;
  padding: 2rem;
  background-color: white;
  border-radius: 2rem;
  font-weight: bold;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: white;
    height: calc(100vh - 5rem);
  }
`;
