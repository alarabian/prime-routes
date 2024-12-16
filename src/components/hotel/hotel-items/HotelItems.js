import Rating from "@/components/common/rating/Rating";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const suites = [
  {
    id: 1,
    url: `${"/assets/images/hotel/hotel1.jpg"}`,
    name: "Luxury Suite",
    description:
      "Our Suites has been honored with the prestigious Five-Star Award by Forbes.",
    reviews: 1,
    price: 90,
    discount: "17% OFF",
    bookNow: true,
  },
  {
    id: 2,
    url: `${"/assets/images/hotel/hotel2.jpg"}`,
    name: "Standard Deluxe",
    description:
      "Our Suites has been honored with the prestigious Five-Star Award by Forbes.",
    reviews: 1,
    price: 75,
    originalPrice: 90,
    bookNow: true,
  },
  {
    id: 3,
    url: `${"/assets/images/hotel/hotel3.jpg"}`,
    name: "The Penthouse",
    description:
      "Our Suites has been honored with the prestigious Five-Star Award by Forbes.",
    reviews: 1,
    price: 200,
    discount: "20% OFF",
    bookNow: true,
  },
  {
    id: 4,
    url: `${"/assets/images/hotel/hotel4.jpg"}`,
    name: "Grand Suite Room",
    description:
      "Our Suites has been honored with the prestigious Five-Star Award by Forbes.",
    reviews: 1,
    price: 120,
    originalPrice: 150,
    bookNow: true,
  },
  {
    id: 5,
    url: `${"/assets/images/hotel/hotel5.jpg"}`,
    name: "Junior Suite Room",
    description:
      "Our Suites has been honored with the prestigious Five-Star Award by Forbes.",
    reviews: 1,
    price: 79,
    bookNow: true,
  },
];

const HotelItems = () => {
  return (
    <>
      {suites.map((item) => {
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
                <div className="hotelContent">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="review">
                    <Rating /> ({item.reviews} Reviews)
                  </div>
                  <div className="footer">
                    <Link href={"/hotel-detail"}>Book Now</Link>
                    <p>From ${item.price}</p>
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

export default HotelItems;
