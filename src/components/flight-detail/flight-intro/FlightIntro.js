import React from "react";
const flight = {
  id: 1,
  name: "Antonov An-32",
  airline: "Air India",
  verified: "verified",
  category: "Cheapest",
  stops: "1-stop at Dubai",
  location: "Ciutat Vella, Barcelona",
  rating: 5.0,
  reviews: 400,
};

const FlightIntro = () => {
  return (
    <>
      <div className="flightIntro">
        <h4>
          {flight.name} <span>{flight.verified}</span>{" "}
          <span>{flight.category}</span>
        </h4>
        <p>
          <span>{flight.airline}</span>
          <span>{flight.stops}</span>
          <span>{flight.location}</span>
          <span>Rating: {flight.rating}</span>
        </p>
      </div>
    </>
  );
};

export default FlightIntro;
