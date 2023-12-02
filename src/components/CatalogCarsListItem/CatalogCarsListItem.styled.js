import styled from "@emotion/styled";

export const Item = styled.li`
  width: 100%;
  height: auto;
  position: relative;
`;

export const HeartButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  background-color: inherit;
  transition: background-color 200ms linear;

  &:hover,
  :focus {
    background-color: inherit;
  }
`;

const setHeartFill = (props) => {
  switch (props.active) {
    case "true":
      return "#3470FF";
    case "false":
      return "transparent";
    default:
      return "transparent";
  }
};
const setHeartStroke = (props) => {
  switch (props.active) {
    case "true":
      return "#3470FF";
    case "false":
      return "#FFFFFF";
    default:
      return "#FFFFFF";
  }
};

export const HeartIcon = styled.svg`
  position: absolute;
  right: 14px;
  top: 14px;
  stroke: ${setHeartStroke};
  fill: ${setHeartFill};
  transition: stroke fill 200ms linear;

  &:hover,
  :focus {
    stroke: blue;
    fill: blue;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;

  display: flex;
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 12;
  font-weight: 200;
`;

export const Price = styled.p``;

export const Characteristics = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CharacteristicsItem = styled.span`
  width: auto;

  font-size: 12;

  border-right: thin solid Grey;

  :last-child {
    border-right: none;
  }
`;

export const Button = styled.button`
  width: 100%;
`;
