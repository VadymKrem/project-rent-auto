import styled from "@emotion/styled";

export const CatalogPage = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  align-items: center;

  background-color: inherit;
  transition: background-color color 200ms linear;

  &:hover,
  :focus {
    background-color: inherit;
    color: orange;
  }
`;
