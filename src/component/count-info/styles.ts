import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const CountInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  background-color: ${THEME_COLOR.GRAYER};
  border-radius: 1rem;
`;

export const Title = styled.div`
  font-size: 1rem;
  margin: 0.3rem 0rem;
`;

export const Count = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${THEME_COLOR.DARK_VIOLET};
`;
