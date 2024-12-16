import React from "react";
const cruiseOptions = [
  {
    id: 1,
    category: "Dining Options",
    options: [
      "Room Service",
      "Cafés and Bakeries",
      "Specialty Restaurants",
      "Buffet Restaurants",
    ],
  },
  {
    id: 2,
    category: "Entertainment",
    options: ["Live Shows", "Movie Theaters", "Nightclubs & Bars", "Casino"],
  },
  {
    id: 3,
    category: "Sports & Fitness",
    options: [
      "Pools",
      "Fitness Centers",
      "Sports Courts",
      "Rock Climbing Walls",
    ],
  },
  {
    id: 4,
    category: "Wellness & Relaxation",
    options: ["Spas", "Thermal Suites", "Adult-Only Retreats"],
  },
  {
    id: 5,
    category: "Family & Kids",
    options: ["Kids' Clubs", "Arcades", "Water Parks"],
  },
  {
    id: 6,
    category: "Accommodations",
    options: ["Cabins", "Private Balconies", "Concierge and Butler Service"],
  },
];

const FlightAmenties = () => {
  return (
    <>
      <div className="flightAmenty">
        <h4>Amenties</h4>
        <div className="amenCard">
          {cruiseOptions.map((item) => {
            return (
              <div className="amenItem" key={item.id}>
                <h5>{item.category}</h5>
                <ul>
                  {item.options.map((name, i) => {
                    return <li key={i}>{name}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FlightAmenties;
