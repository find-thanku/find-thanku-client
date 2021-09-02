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
  flex-direction: column;
  justify-content: space-between;
  width: 85%;
  height: 18rem;
  margin: 2rem 0rem;
  padding: 1.8rem;
  background-color: white;
  border-radius: 2rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: white;
    height: calc(100vh - 5rem);
  }
`;

export const ProjectIntro = styled.div`
  font-weight: 400;
  line-height: 1.5rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${THEME_COLOR.DARK_VIOLET};
`;

export const Line1 = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.3rem;
`;

export const Line2 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Contents = styled.div``;

export const CountInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
