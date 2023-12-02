import CatalogCarsList from "components/CatalogCarsList";
import Container from "components/Container";
import { useEffect, useState } from "react";
import { fetchAllAdverts } from "redux/catalog/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdvertsCars,
  selectError,
  selectIsLoading,
} from "redux/catalog/selectors";
import { CatalogPage, ButtonArea, Button } from "./Catalog.styled";

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectAdvertsCars);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchAllAdverts({
        completed: false,
        page: currentPage,
        limit: 12,
      })
    );
  }, [dispatch, currentPage]);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      {cars && (
        <CatalogPage>
          <CatalogCarsList cars={cars} isLoading={isLoading} error={error} />
          <ButtonArea>
            <Button onClick={loadMore}>Load more</Button>
          </ButtonArea>
        </CatalogPage>
      )}
    </Container>
  );
};

export default Catalog;
