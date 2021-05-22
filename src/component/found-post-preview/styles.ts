import styled from "styled-components";

export const FoundPostPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 8rem;
  padding: 1rem;
  border-bottom: 2px solid lightgray;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0rem;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const Icon = styled.img`
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.4rem;
`;

export const Item = styled.div`
  font-size: 1.1rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Location = styled.div`
  font-size: 1.1rem;
`;

export const Image = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  margin-right: 1rem;
`;
