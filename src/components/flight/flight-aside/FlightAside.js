import React from "react";
import FilterPrice from "./filter-price/FilterPrice";
import SearchAirlines from "./search-airlines/SearchAirlines";
import Popular from "./popular/Popular";
import Airlines from "./airlines/Airlines";
import Amenities from "./amenities/Amenities";
import CabinClass from "./cabin-class/CabinClass";

const FlightAside = () => {
  return (
    <>
      <div className="flightAside">
        <div className="title">
          <h4>Filter </h4>
          <span>Reset</span>
        </div>
        <SearchAirlines />
        <FilterPrice />
        <Popular />
        <Airlines />
        <Amenities />
        <CabinClass />
      </div>
    </>
  );
};

export default FlightAside;
