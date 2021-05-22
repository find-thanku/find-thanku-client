import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "../../asset/constant";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 4rem);
  background-color: ${THEME_COLOR.VIOLET};

  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: white;
    height: calc(100vh - 5rem);
  }
`;

export const Warn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  margin: 2rem 0rem;
  padding: 2rem;
  background-color: white;
  border-radius: 2rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: white;
    height: calc(100vh - 5rem);
  }
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Title = styled.div`
  margin: 1.5rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Contents = styled.div`
  line-height: 1.8rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Highlight = styled.span`
  line-height: 1.7rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${THEME_COLOR.CRIMSON};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 3rem;
  margin-top: 4rem;
  border-radius: 1rem;
  letter-spacing: 0.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: ${THEME_COLOR.DARK_VIOLET};
`;
