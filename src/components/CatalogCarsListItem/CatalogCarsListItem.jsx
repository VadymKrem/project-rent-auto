import PropTypes from "prop-types";
import {
  Item,
  TitleContainer,
  Title,
  Price,
  Button,
  InfoContainer,
  InfoItem,
  ImageCard,
  ImageContainer,
  Model,
} from "./CatalogCarsListItem.styled";
import { useState } from "react";
import ModalWindow from "components/ModalWindow";
// import { ModalInfo } from "components/ModalInfo";
// import sprite from "../../assets/images/symbol-defs.svg";

const CatalogCarsListItem = ({
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  const addressArray = address.split(",");
  const [showModal, setShowModal] = useState(false);
  const [activeHeart, setActiveHeart] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const toggleActiveHeart = () => {
    setActiveHeart((prevState) => !prevState);
  };

  return (
    <>
      <Item>
        <ImageContainer>
          <ImageCard src={img} alt={make} />
        </ImageContainer>
        <TitleContainer>
          <Title>
            {make} <Model>{model}</Model>, {year}
          </Title>
          <Price>{rentalPrice}</Price>
        </TitleContainer>
        <InfoContainer>
          <InfoItem>{addressArray[1]}</InfoItem>
          <InfoItem>{addressArray[2]}</InfoItem>
          <InfoItem>{rentalCompany}</InfoItem>
          <InfoItem>{type}</InfoItem>
          <InfoItem>{model}</InfoItem>
          <InfoItem>{functionalities[0]}</InfoItem>
        </InfoContainer>
        <Button type="button" onClick={toggleModal}>
          Learn more
        </Button>
      </Item>
      {showModal && (
        <ModalWindow toggleModal={toggleModal}>
          {/* <ModalInfo
            toggleModal={toggleModal}
            id={id}
            year={year}
            make={make}
            model={model}
            type={type}
            img={img}
            description={description}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            accessories={accessories}
            functionalities={functionalities}
            rentalPrice={rentalPrice}
            city={addressArray[1]}
            country={addressArray[2]}
            rentalConditions={rentalConditions}
            mileage={mileage}
          /> */}
        </ModalWindow>
      )}
    </>
  );
};

CatalogCarsListItem.propTypes = {
  id: PropTypes.number,
  year: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  fuelConsumption: PropTypes.string,
  engineSize: PropTypes.string,
  accessories: PropTypes.array,
  functionalities: PropTypes.array,
  rentalPrice: PropTypes.string,
  rentalCompany: PropTypes.string,
  address: PropTypes.string,
  rentalConditions: PropTypes.string,
  mileage: PropTypes.number,
};
export default CatalogCarsListItem;
