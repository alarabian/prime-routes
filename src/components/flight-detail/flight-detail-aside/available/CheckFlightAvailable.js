import React from "react";

const CheckFlightAvailable = () => {
  return (
    <>
      <div className="checkFlightAvailable">
        <h4>Check Availability</h4>
        <div className="cycleCard">
          <div className="cycle">
            <span>From</span>
            <h3>New york</h3>
            <p>Ken International Airport</p>
          </div>
          <div className="cycle">
            <span>To</span>
            <h3>Las Vegas</h3>
            <p> Martini International Airport</p>
          </div>
          <div className="cycle">
            <span>Departure</span>
            <h3>21-10-2024</h3>
            <p>Monday</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckFlightAvailable;
