import React from "react";

const FilterPrice = () => {
  return (
    <>
      <div className="filterPrice flightAsideGap">
        <h5>Filter by Price</h5>
        <div className="form-group">
          
          <input
            type="range"
            className="form-range"
            min={0}
            max={5}
            step="0.5"
            id="customRange3"
          />
        </div>
      </div>
    </>
  );
};

export default FilterPrice;
