import Rating from "@/components/common/rating/Rating";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlCalender } from "react-icons/sl";
const flights = [
  {
    id: 1,
    name: "Antonov An-32",
    url: `${"/assets/images/flight/flight-01.jpg"}`,
    airline: "Air India",
    rating: 5.0,
    stops: "1-stop at Texas",
    seatsLeft: 20,
    description:
      "Experience top-notch service, in-flight amenities, and smooth takeoffs for a stress-free journey.",
    route: { from: "New York", to: "Sydney" },
    dates: { departure: "Aug 01, 2024", return: "Aug 03, 2024" },
    price: "$500",
  },
  {
    id: 2,
    name: "SkyBound 102",
    url: `${"/assets/images/flight/flight-02.jpg"}`,
    airline: "Indigo",
    rating: 4.5,
    stops: "1-stop at Dubai",
    seatsLeft: 18,
    description:
      "Enjoy a comfortable and seamless journey with top-notch service on every flight.",
    route: { from: "London", to: "London" },
    dates: { departure: "Aug 13, 2024", return: "Aug 15, 2024" },
    price: "$600",
  },
  {
    id: 3,
    name: "Nimbus 345",
    url: `${"/assets/images/flight/flight-03.jpg"}`,
    airline: "Indigo",
    rating: 4.9,
    stops: "1-stop at Dubai",
    seatsLeft: 27,
    description:
      "Enjoy a hassle-free journey with reliable service, spacious seating, and friendly staff.",
    route: { from: "Paris", to: "Cape Town" },
    dates: { departure: "Aug 26, 2024", return: "Aug 27, 2024" },
    price: "$300",
  },
  {
    id: 4,
    name: "AstraFlight 215",
    url: `${"/assets/images/flight/flight-04.jpg"}`,
    airline: "Indigo",
    rating: 4.3,
    stops: "1-stop at Frankfurt",
    seatsLeft: 27,
    description:
      "Travel smart with affordable fares, seamless connections, and exceptional in-flight comfort.",
    route: { from: "Toronto", to: "Bangkok" },
    dates: { departure: "Sep 04, 2024", return: "Sep 07, 2024" },
    price: "$300",
  },
  {
    id: 5,
    name: "Cloudrider 789",
    url: `${"/assets/images/flight/flight-05.jpg"}`,
    airline: "Air India",
    rating: 4.1,
    stops: "1-stop at Dallas",
    seatsLeft: 14,
    description:
      "Experience top-notch service, in-flight amenities, and smooth takeoffs for a stress-free journey.",
    route: { from: "Chicago", to: "Melbourne" },
    dates: { departure: "Sep 11, 2024", return: "Sep 13, 2024" },
    price: "$550",
  },
  {
    id: 6,
    name: "Aether Express 901",
    url: `${"/assets/images/flight/flight-06.jpg"}`,
    airline: "Indigo",
    rating: 4.6,
    stops: "1-stop at Seoul",
    seatsLeft: 12,
    description:
      "Fly with confidence, knowing our comfortable cabins and efficient service make every trip a breeze.",
    route: { from: "Miami", to: "Tokyo" },
    dates: { departure: "Sep 22, 2024", return: "Sep 24, 2024" },
    price: "$450",
  },
  {
    id: 7,
    name: "Voyager 658",
    url: `${"/assets/images/flight/flight-07.jpg"}`,
    airline: "Air India",
    rating: 4.8,
    stops: "1-stop at Sydney",
    seatsLeft: 21,
    description:
      "Relax and enjoy your flight with on-time schedules, comfortable seats, and world-class service.",
    route: { from: "Frankfurt", to: "Auckland" },
    dates: { departure: "Oct 04, 2024", return: "Oct 07, 2024" },
    price: "$350",
  },
];

const FlightItems = () => {
  return (
    <>
      {flights.map((item) => {
        return (
          <div className="hotelItems" key={item.id}>
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <div className="hotelFigure">
                  <Image
                    src={item.url}
                    width={360}
                    height={240}
                    alt="Hotel"
                  ></Image>
                  {item.bookNow && <span>{item.bookNow}</span>}
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="hotelContent p-0">
                  <h3><Link href={"/flight-detail"}>{item.name}</Link></h3>
                  <div className="airlinePart">
                    <div className="item">
                      <strong>{item.airline}</strong>
                      <span>{item.stops}</span>
                    </div>
                    <div className="item">{item.seatsLeft} Seat Left</div>
                  </div>
                  <p>{item.description}</p>
                  <div className="review">
                    <Rating /> ({item.reviews} Reviews)
                  </div>
                  <div className="footer">
                    <div className="dates">
                      <SlCalender />
                      <span>{item.dates.departure}</span>, {item.dates.return}
                    </div>
                    <p>From {item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FlightItems;
