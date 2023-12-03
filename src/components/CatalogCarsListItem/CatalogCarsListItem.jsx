import PropTypes from "prop-types";
import {
  ItemContent,
  TitleContainer,
  Title,
  Price,
  Button,
  InfoContainer,
  InfoItem,
  ImageCard,
  ImageContainer,
  Model,
  ButtonFavorite,
} from "./CatalogCarsListItem.styled";
import { useState } from "react";
import ModalWindow from "components/ModalWindow";
// import { ModalInfo } from "components/ModalInfo";

// import sprite from "assets/images/sprite.svg";

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

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleFavoriteAdvert = () => {
    const FavoritesAdverts =
      JSON.parse(localStorage.getItem("FavoritesAdverts")) || [];
    FavoritesAdverts.push({
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
    });

    localStorage.setItem("FavoritesAdverts", JSON.stringify(FavoritesAdverts));
    console.log("FavoritesAdverts in localStorage:", FavoritesAdverts);

    alert("Оголошення додано до обраних!");
    console.log("Adding to favorites:", id, make, model);
  };

  return (
    <>
      <ItemContent>
        <ImageContainer>
          <ImageCard src={img} alt={make} />
          <ButtonFavorite onClick={handleFavoriteAdvert}>
            {/* <IconFavoriteAdvert>
              <use href={`${sprite}#icon-heart`} />
            </IconFavoriteAdvert> */}
            F
          </ButtonFavorite>
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
      </ItemContent>
      {showModal && (
        <ModalWindow toggleModal={toggleModal}>
          <ModalInfo
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
          />
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
