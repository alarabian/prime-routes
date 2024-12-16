import React from "react";

const PassengerCount = () => {
  return (
    <>
      <div className="passengerCount">
        <h5>Details</h5>
        <ul>
          <li>
            Adults
            <span>4</span>
          </li>
          <li>
            Infants ( 0-12 Yrs )<span>01</span>
          </li>
          <li>
            Children
            <span>( 2-12 Yrs )</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PassengerCount;
