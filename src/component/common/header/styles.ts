import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../../asset/constant";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 4rem;
    padding: 0rem 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: 0rem 2rem;
    border-bottom: 3px solid ${THEME_COLOR.VIOLET};
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
`;

export const Logo = styled.img`
  width: 6rem;
  height: 3rem;
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

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0rem 1rem;
  border-bottom: 3px solid ${THEME_COLOR.VIOLET};
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const SidebarIcon = styled.img`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  background: none;
  background-color: white;
`;

export const LoginContainer = styled(Link)`
  display: flex;
  justify-content: center;
  /* margin-right: 1rem; */
  text-decoration: none;
  color: inherit;
`;

export const Login = styled.img`
  width: 2rem;
  height: 2rem;
`;
