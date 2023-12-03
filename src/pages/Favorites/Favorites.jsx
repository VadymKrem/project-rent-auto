import Container from "components/Container";
import React, { useEffect, useState } from "react";
import { WrapFavorites } from "./Favorites.styled";
import {
  ImageCard,
  ImageContainer,
  ItemContent,
  Model,
  Price,
  Title,
  TitleContainer,
} from "components/CatalogCarsListItem/CatalogCarsListItem.styled";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("FavoritesAdverts")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <Container>
      <WrapFavorites>
        <h2>Favorites</h2>
        {favorites.length > 0 ? (
          <ul>
            {favorites.map((favorite) => (
              <ItemContent>
                <ImageContainer>
                  <ImageCard src={favorite.img} alt={favorite.make} />
                </ImageContainer>
                <TitleContainer>
                  <Title>
                    {favorite.make} <Model>{favorite.model}</Model>,{" "}
                    {favorite.year}
                  </Title>
                  <Price>{favorite.rentalPrice}</Price>
                </TitleContainer>
              </ItemContent>
            ))}
          </ul>
        ) : (
          <p>No favorites yet!</p>
        )}
      </WrapFavorites>
    </Container>
  );
};

export default FavoritesPage;
