import React from "react";
import FlightSort from "./flight-sort/FlightSort";
import Average from "./average/Average";
import HotelItems from "@/components/hotel/hotel-items/HotelItems";
import FlightItems from "./flight-items/FlightItems";

const FlightList = () => {
  return (
    <>
      <div className="FlightList">
        <FlightSort />
        <Average />
        <FlightItems />
      </div>
    </>
  );
};

export default FlightList;
