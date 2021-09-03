import styled from "styled-components/macro";
import { THEME_COLOR } from "../../asset/constant";

export const CommentContainer = styled.div`
  padding: 0.5rem 0.3rem 0.3rem 0.3rem;
  margin-bottom: 0.2rem;
  border-radius: 0.2rem;
  border-bottom: 1px solid ${THEME_COLOR.GRAY};
  box-shadow: 1px 1px 1px 1px ${THEME_COLOR.GRAYER};
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
`;

export const Profile = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.3rem;
`;

export const Username = styled.div`
  font-size: 0.9rem;
`;

export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Date = styled.div`
  font-size: 0.7rem;
  color: ${THEME_COLOR.GRAY_TEXT};
`;

export const CommentContent = styled.div`
  margin-left: 0.2rem;
  font-size: 0.9rem;
`;