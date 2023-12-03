import styled from "@emotion/styled";

export const Item = styled.li`
  max-width: 274px;
  height: 475px;
  display: block;
`;

// export const HeartButton = styled.button`
//   position: absolute;
//   right: 14px;
//   top: 14px;
//   background-color: inherit;
//   transition: background-color 200ms linear;

//   &:hover,
//   :focus {
//     background-color: inherit;
//   }
// `;

// const setHeartFill = (props) => {
//   switch (props.active) {
//     case "true":
//       return "#3470FF";
//     case "false":
//       return "transparent";
//     default:
//       return "transparent";
//   }
// };
// const setHeartStroke = (props) => {
//   switch (props.active) {
//     case "true":
//       return "#3470FF";
//     case "false":
//       return "#FFFFFF";
//     default:
//       return "#FFFFFF";
//   }
// };

// export const HeartIcon = styled.svg`
//   position: absolute;
//   right: 14px;
//   top: 14px;
//   stroke: ${setHeartStroke};
//   fill: ${setHeartFill};
//   transition: stroke fill 200ms linear;

//   &:hover,
//   :focus {
//     stroke: blue;
//     fill: blue;
//   }
// `;
export const ImageContainer = styled.div`
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
`;
export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  border-radius: 14px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(18, 20, 23, 1);
`;
export const Model = styled.span`
  color: rgba(52, 112, 255, 1);
`;
export const Price = styled.p`
  display: block;
  margin-left: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 40px;
  justify-content: flex-start;
`;

export const InfoItem = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: thin solid Grey;
  position: relative;
  padding-right: 5px;

  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: Grey;
    right: 0;
    top: 0;
  }

  :last-child::after {
    display: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 12px;
  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;
  cursor: pointer;
`;
