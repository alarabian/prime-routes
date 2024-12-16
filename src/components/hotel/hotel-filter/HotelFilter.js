import React from "react";
import CheckAvailability from "./check-availability/CheckAvailability";
import Facility from "./facility/Facility";
import RoomSize from "./room-size/RoomSize";

const HotelFilter = () => {
  return (
    <>
      <div className="hotelFilter">
        <CheckAvailability />
        <Facility />
        <RoomSize />
        <button className="btn commonBtn">Search</button>
      </div>
    </>
  );
};

export default HotelFilter;
