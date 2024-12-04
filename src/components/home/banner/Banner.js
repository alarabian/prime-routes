"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Banner = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <section className="bannerSection">
        <Slider {...settings}>
          <div className="bannerSec">
            <Image
              src={"/assets/images/hero_bg_1_2.jpg"}
              alt="banner"
              width={1500}
              height={800}
            ></Image>
            <div className="container-fluid">
              <div className="bannerContent">
                <h6>Get unforgetable pleasure with us</h6>
                <h1>Let’s make your best trip with us </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis accusantium harum alias explicabo aperiam ullam quasi
                  temporibus, laudantium voluptatibus labore fugiat vel autem
                  dolorum distinctio! Cumque doloremque iure optio saepe?
                </p>
                <Link href={"/"} className="bookNow">
                  Explore Tours
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="bannerSec">
            <Image
              src={"/assets/images/hero_bg_1_3.jpg"}
              alt="banner"
              width={1500}
              height={800}
            ></Image>
            <div className="container-fluid">
              <div className="bannerContent">
                <h6>Get unforgetable pleasure with us</h6>
                <h1>Let’s make your best trip with us </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis accusantium harum alias explicabo aperiam ullam quasi
                  temporibus, laudantium voluptatibus labore fugiat vel autem
                  dolorum distinctio! Cumque doloremque iure optio saepe?
                </p>
                <Link href={"/"} className="bookNow">
                  Explore Tours
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Banner;
