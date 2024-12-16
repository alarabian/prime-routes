import React from "react";
const popular = [
  { id: 1, name: "Free Wifi" },
  { id: 2, name: "Charging Ports" },
  { id: 3, name: "Entertainment" },
  { id: 4, name: "Air France" },
  { id: 5, name: "Blankets & Pillows" },
  { id: 6, name: "Adjustable headrests" },
];

const Amenities = () => {
  return (
    <>
      <div className="facility flightAsideGap">
        <h5>Amenities</h5>
        {popular.map((item) => {
          return (
            <div className="form-check" key={item.id}>
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id={item.name}
              />
              <label className="form-check-label" htmlFor={item.name}>
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Amenities;
