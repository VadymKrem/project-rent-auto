import styled from "@emotion/styled";

export const CatalogPage = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
`;

export const ButtonLoadMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 179px;
  height: 24px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

export const Button = styled.button`
  align-items: center;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(52, 112, 255, 1);
  cursor: pointer;
  &:hover,
  :focus {
    color: rgba(11, 68, 205, 1);
  }
`;
