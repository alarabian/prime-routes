import CheckAvailability from "@/components/hotel/hotel-filter/check-availability/CheckAvailability";
import React from "react";
import CheckFlightAvailable from "./available/CheckFlightAvailable";
import PassengerCount from "./passenger-count/PassengerCount";

const FlightDetailAside = () => {
  return (
    <>
      <div className="flightDetailAside">
        <div className="price">
          <span>Starts From</span>
          <strong>$500 / Person</strong>
        </div>
        <CheckFlightAvailable />
        <div className="selectSeat">
          <h5>Preferred Class</h5>
          <select className="form-select">
            <option value="economy">Economy</option>
            <option value="business-class">Business Class</option>
          </select>
        </div>
        <PassengerCount />
        <button className="bookNow w-100 border-0">Book Now</button>
      </div>
    </>
  );
};

export default FlightDetailAside;
