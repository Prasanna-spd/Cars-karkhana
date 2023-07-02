import React, { useState } from "react";
import CarCard from "./carCard";
import cars from "../assets/db";

function Body() {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState([]);
  const [selectedBody, setSelectedBody] = useState([]);

  const handleBrand = (brand) => {
    if (selectedBrand.includes(brand)) {
      setSelectedBrand(selectedBrand.filter((t) => t !== brand));
    } else {
      setSelectedBrand([...selectedBrand, brand]);
    }
  };
  const handlePrice = (Price) => {
    if (selectedPrice.includes(Price)) {
      setSelectedPrice(selectedPrice.filter((t) => t !== Price));
    } else {
      setSelectedPrice([...selectedPrice, Price]);
    }
  };
  const handleFuel = (fuel) => {
    if (selectedFuel.includes(fuel)) {
      setSelectedFuel(selectedFuel.filter((t) => t !== fuel));
    } else {
      setSelectedFuel([...selectedFuel, fuel]);
    }
  };
  const handleBody = (body) => {
    if (selectedBody.includes(body)) {
      setSelectedBody(selectedBody.filter((t) => t !== body));
    } else {
      setSelectedBody([...selectedBody, body]);
    }
  };

  const filteredCars = cars.filter((car) => {
    const isBrandMatch =
      selectedBrand.length === 0 || selectedBrand.includes(car.brandName);
    const isPriceMatch =
      selectedPrice.length === 0 ||
      selectedPrice.some((range) => {
        const [min, max] = range.split("-");
        const carPrice = car.price;
        return carPrice >= parseInt(min) && carPrice <= parseInt(max);
      });
    const isFuelMatch =
      selectedFuel.length === 0 || selectedFuel.includes(car.fuel);
    const isBodyMatch =
      selectedBody.length === 0 || selectedBody.includes(car.bodyType);

    return isBrandMatch && isPriceMatch && isFuelMatch && isBodyMatch;
  });

  return (
    <>
      <h1 className="text-center">CARS KARKHANA</h1>
      <div className="container d-flex flex-row">
        <div className="carFilter me-4 pe-4">
          <h1>Filters</h1>
          <div className="carBrand d-flex flex-column">
            <h4>Brand</h4>
            <hr />
            <label>
              <input
                type="checkbox"
                name="brand"
                value="honda"
                onChange={() => {
                  handleBrand("Honda");
                }}
              />
              Honda
            </label>
            <label>
              <input
                type="checkbox"
                name="brand"
                value="maruti"
                onChange={() => {
                  handleBrand("Maruti");
                }}
              />
              Maruti
            </label>
            <label>
              <input
                type="checkbox"
                name="brand"
                value="tata"
                onChange={() => {
                  handleBrand("Tata");
                }}
              />
              Tata
            </label>
          </div>
          <hr />
          <div className="priceRange d-flex flex-column">
            <h4>Price Range</h4>
            <hr />
            <label>
              <input
                type="checkbox"
                name="price"
                value="500000-600000"
                onChange={(e) => {
                  handlePrice(e.target.value);
                }}
              />
              5Lacs - 6Lacs
            </label>
            <label>
              <input
                type="checkbox"
                name="price"
                value="600001-700000"
                onChange={(e) => {
                  handlePrice(e.target.value);
                }}
              />
              6Lacs - 7Lacs
            </label>
            <label>
              <input
                type="checkbox"
                name="price"
                value="700001-800000"
                onChange={(e) => {
                  handlePrice(e.target.value);
                }}
              />
              7Lacs - 8Lacs
            </label>
          </div>
          <hr />
          <div className="fuelType d-flex flex-column">
            <h4>Fuel Type</h4>
            <hr />
            <label>
              <input
                type="checkbox"
                name="fuel"
                value="petrol"
                onChange={() => {
                  handleFuel("Petrol");
                }}
              />
              Petrol
            </label>
            <label>
              <input
                type="checkbox"
                name="fuel"
                value="diesel"
                onChange={() => {
                  handleFuel("Diesel");
                }}
              />
              Diesel
            </label>
            <label>
              <input
                type="checkbox"
                name="fuel"
                value="cng"
                onChange={() => {
                  handleFuel(" CNG");
                }}
              />
              CNG
            </label>
          </div>
          <hr />
          <div className="bodyType d-flex flex-column">
            <h4>Body Type</h4>
            <hr />
            <label>
              <input
                type="checkbox"
                name="body"
                value="sedan"
                onChange={() => {
                  handleBody("Sedan");
                }}
              />
              Sedan
            </label>
            <label>
              <input
                type="checkbox"
                name="body"
                value="suv"
                onChange={() => {
                  handleBody("SUV");
                }}
              />
              SUV
            </label>
            <label>
              <input
                type="checkbox"
                name="body"
                value="luxury-sedan"
                onChange={() => {
                  handleBody("Luxury Sedan");
                }}
              />
              Luxury Sedan
            </label>
          </div>
        </div>

        <div className="conatiner">
          <div className="carData row">
            {filteredCars.map((car, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <CarCard
                  name={car.name}
                  brandName={car.brandName}
                  price={car.price}
                  fuel={car.fuel}
                  bodyType={car.bodyType}
                  features={car.features}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
