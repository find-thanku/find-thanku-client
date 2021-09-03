import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT, STATIC_URL } from "../../asset/constant";

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 5%;

  position: fixed;
  bottom: 0;

  margin-top: 1rem;

  background-color: white;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${THEME_COLOR.GRAYER};
  background-color: white;
  width: 100%;
  height: 3rem;
  padding: 0.3rem;

`;

export const Input = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
`;

export const SubmitButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;