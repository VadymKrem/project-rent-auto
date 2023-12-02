import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin-inline: auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1184px;
    padding-inline: auto;
  }
`;
