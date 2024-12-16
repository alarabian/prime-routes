import Image from "next/image";
import React from "react";
const data = [
  {
    id: "1",
    url: `${"/assets/images/flight/flight-thumb-01.jpg"}`,
  },
  {
    id: "2",
    url: `${"/assets/images/flight/flight-thumb-02.jpg"}`,
  },
  {
    id: "3",
    url: `${"/assets/images/flight/flight-thumb-03.jpg"}`,
  },
  {
    id: "4",
    url: `${"/assets/images/flight/flight-thumb-04.jpg"}`,
  },
  {
    id: "5",
    url: `${"/assets/images/flight/flight-thumb-05.jpg"}`,
  },
];

const FlightFigure = () => {
  return (
    <>
      <div className="flightFigure">
        <Image
          src="/assets/images/flight/flight-large-01.jpg"
          alt="FLight"
          width={820}
          height={400}
        />
        <div className="thumbnail">
          {data.map((item) => {
            return (
              <Image
                src={item.url}
                key={item.id}
                alt="FLight"
                width={164}
                height={150}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FlightFigure;
