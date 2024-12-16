import React from "react";
import { MdFlight } from "react-icons/md";
const airlines = [
  {
    id: 1,
    name: "American Airline",
    flights: 216,
  },
  {
    id: 2,
    name: "Delta Airlines",
    flights: 569,
  },
  {
    id: 3,
    name: "Emirates",
    flights: 129,
  },
  {
    id: 4,
    name: "Air France",
    flights: 600,
  },
  {
    id: 5,
    name: "Qatar Airways",
    flights: 200,
  },
  {
    id: 6,
    name: "Air India",
    flights: 180,
  },
];

const InterestedFlight = () => {
  return (
    <>
      <div className="interestedFlight sectionSpace">
        <h4>Choose type of Flights you are interested</h4>
        <ul>
          {airlines.map((item) => {
            return (
              <li key={item.id}>
                <div className="icon">
                <MdFlight />
                </div>
                <div className="text">
                  <strong>{item.name}</strong>
                  {item.flights}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default InterestedFlight;
