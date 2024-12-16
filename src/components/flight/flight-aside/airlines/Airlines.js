import React from "react";
const popular = [
  { id: 1, name: "American Airlines" },
  { id: 2, name: "Delta Air Lines" },
  { id: 3, name: "Emirates" },
  { id: 4, name: "Air France" },
  { id: 5, name: "Japan Airlines" },
];

const Airlines = () => {
  return (
    <>
      <div className="facility flightAsideGap">
        <h5>Airlines Names</h5>
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

export default Airlines;
