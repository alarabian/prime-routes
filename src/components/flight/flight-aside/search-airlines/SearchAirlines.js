import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchAirlines = () => {
  return (
    <>
      <div className="searchAirline">
        <h6>Search by Airline Names</h6>
        <div className="form-group">
          <FiSearch />
          <input
            type="text"
            placeholder="Search by Airlines Names"
            className="form-control"
          />
        </div>
      </div>
    </>
  );
};

export default SearchAirlines;
