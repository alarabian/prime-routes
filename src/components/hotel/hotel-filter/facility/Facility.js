import React from "react";
const amenities = [
  { id: 1, name: "Air Conditioner" },
  { id: 2, name: "Bath Tub" },
  { id: 3, name: "Heater" },
  { id: 4, name: "Iron" },
  { id: 5, name: "Safety Box" },
];

const Facility = () => {
  return (
    <>
      <div className="facility">
        <h4>Facility</h4>
        {amenities.map((item) => {
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

export default Facility;
