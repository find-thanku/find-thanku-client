import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../asset/constant";

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0rem 1rem;

  position: fixed;
  top: 0;
  z-index: 100;
  background-color: white;
  border-bottom: 0.5px solid ${THEME_COLOR.GRAYER};
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const BackIcon = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  opacity: 0.7;
`;

export const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 2.7rem;
  height: 1.7rem;

  padding: 0.2rem;
  border-radius: 0.6rem;

  font-size: 1.1rem;
  color: ${THEME_COLOR.VIOLET};
  font-weight: bolder;
`;