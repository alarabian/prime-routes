import React from "react";
import ProviderDetails from "./provider-details/ProviderDetails";
import CustomerFilter from "./customer-filter/CustomerFilter";

const HotelDetailAside = () => {
  return (
    <>
      <div className="hotelDetailAside">
        <CustomerFilter />
        <ProviderDetails />
      </div>
    </>
  );
};

export default HotelDetailAside;
