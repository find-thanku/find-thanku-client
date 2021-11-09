import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT, STATIC_URL } from "../../asset/constant";

export const CommentUploader = styled.div`
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${THEME_COLOR.GRAYER};

  width: 100%;
  height: 2.5rem;
  padding: 0.4rem;
  margin-top: 0.6rem;
  background-color:${THEME_COLOR.GRAY};
`;

export const Input = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  background-color:${THEME_COLOR.GRAY};
`;

export const SubmitButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;