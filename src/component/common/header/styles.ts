import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../../asset/constant";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0rem 2rem;
  border-bottom: 3px solid ${THEME_COLOR.VIOLET};
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 4rem;
    padding: 0rem 5rem;
  }
`;

export const Logo = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const DesktopButtons = styled.div`
  height: 100%;
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
  }
`;

export const ButtonContainer = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button`
  width: 8.7rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: ${THEME_COLOR.VIOLET};
  }
`;

export const MobileButtons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;
