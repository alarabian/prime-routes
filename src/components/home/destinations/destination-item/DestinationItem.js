import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const data = [
  {
    id: "1",
    url: "/assets/images/gallery-1-1.jpg",
    desc: "Visit the country where even the stones tell a story. It’s a land of a billion smiles and a land that makes you appreciate the minimalism. The essence of this country is the unpretentious simplicity and the skills that are thousands of years old and have been passed down from generation to generation.",
  },
  {
    id: "2",
    url: "/assets/images/gallery-1-1.jpg",
    desc: "Visit the country where even the stones tell a story. It’s a land of a billion smiles and a land that makes you appreciate the minimalism. The essence of this country is the unpretentious simplicity and the skills that are thousands of years old and have been passed down from generation to generation.",
  },
  {
    id: "3",
    url: "/assets/images/gallery-1-1.jpg",
    desc: "Visit the country where even the stones tell a story. It’s a land of a billion smiles and a land that makes you appreciate the minimalism. The essence of this country is the unpretentious simplicity and the skills that are thousands of years old and have been passed down from generation to generation.",
  },
  {
    id: "4",
    url: "/assets/images/gallery-1-1.jpg",
    desc: "Visit the country where even the stones tell a story. It’s a land of a billion smiles and a land that makes you appreciate the minimalism. The essence of this country is the unpretentious simplicity and the skills that are thousands of years old and have been passed down from generation to generation.",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const DestinationItem = () => {
  return (
    <>
     <Slider {...settings}>
      {data.map((item) => {
        return (
          <div className="destinationItem" key={item.id}>
            <Image
              src={item.url}
              alt="Gallery"
              width={400}
              height={400}
            ></Image>
            <p>{item.desc}</p>
            <Link href={"/"} className="bookNow">Explore Now</Link>
          </div>
        );
      })}
      </Slider>
    </>
  );
};

export default DestinationItem;
