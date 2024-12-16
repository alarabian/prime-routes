import CheckAvailability from "@/components/hotel/hotel-filter/check-availability/CheckAvailability";
import React from "react";

const CustomerFilter = () => {
  return (
    <>
      <div className="customerFilter">
        <CheckAvailability />

        <button className="btn commonBtn">Book Now</button>
      </div>
    </>
  );
};

export default CustomerFilter;
