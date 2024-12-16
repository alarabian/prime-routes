import React from "react";
const data = [
  { id: 1, name: "Economy" },
  { id: 2, name: "Premium Economy" },
  { id: 3, name: "Business Class" },
  { id: 4, name: "First Class" },
  { id: 5, name: "Basic Economy" },
];

const CabinClass = () => {
  return (
    <>
      <div className="facility flightAsideGap">
        <h5>Cabin Class</h5>
        {data.map((item) => {
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

export default CabinClass;
