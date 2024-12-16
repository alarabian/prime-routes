import React from "react";
const ships = [
  {
    id: 1,
    property: "Launched On",
    value: "25 May 2025",
  },
  {
    id: 2,
    property: "Length",
    value: "35 M",
  },
  {
    id: 3,
    property: "Staffs",
    value: 200,
  },
  {
    id: 4,
    property: "Beam",
    value: "200 ft",
  },
  {
    id: 5,
    property: "Weight",
    value: "8000 grt",
  },
  {
    id: 6,
    property: "Dining Crew",
    value: 12,
  },
  {
    id: 7,
    property: "Speed",
    value: "80.6 knots",
  },
];

const FlightInfo = () => {
  return (
    <>
      <div className="flightInfo">
        <h4>Flight Information</h4>
        <ul>
          {ships.map((item) => {
            return (
              <li key={item.id}>
                <strong>{item.property}</strong>
                <span>{item.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flightAbout">
        <h4>Flight Information</h4>
        <p>
          Description Kicking off on April 1, 2025, the Prime Routes will take
          Luna to major cities across North America and Europe, including Los
          Angeles, New York, Chicago, Toronto, and London.
        </p>
        <p>
          Each concert will showcase her unique blend of pop and ethereal
          soundscapes, bringing her music to life in a way you have never seen
          before.
        </p>
      </div>
    </>
  );
};

export default FlightInfo;
