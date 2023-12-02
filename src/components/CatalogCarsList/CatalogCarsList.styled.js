import styled from "@emotion/styled";

export const CarsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 87px);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;
