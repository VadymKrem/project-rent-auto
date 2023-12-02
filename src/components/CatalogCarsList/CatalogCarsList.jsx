// import { Loader } from "components/Loader";

import CatalogCarsListItem from "components/CatalogCarsListItem";
import { CarsList } from "./CatalogCarsList.styled";

const CatalogCarsList = ({ cars, isLoading, error }) => {
  return (
    <>
      {/* {isLoading && <Loader />} */}
      {cars.length > 0 && (
        <CarsList>
          {cars.map(
            ({
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
            }) => (
              <CatalogCarsListItem
                key={id}
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
                rentalCompany={rentalCompany}
                address={address}
                rentalConditions={rentalConditions}
                mileage={mileage}
              />
            )
          )}
        </CarsList>
      )}
      {error && alert("Sorry, something is wrong!")}
    </>
  );
};
export default CatalogCarsList;
