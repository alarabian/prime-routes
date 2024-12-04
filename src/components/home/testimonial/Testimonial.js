import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const data = [
  {
    id: "1",
    name: "Mr. Jorge Oscar Lopez",
    desc: "Commercial Director Andreani Group & Mrs. Maria Laura Solinas Visited us from Argentina wanting to explore Bhutan and North India. Their response on our services took us over the moon which they mentioned, when Nitin and his family had them over for dinner and rinks at their home –“The hospitality experience in India is so very personalized with the hotels, drivers, guide and every person that meet you, you feel so welcomed with the warmth that they transmit. Never felt solike home even when away from home					",
  },
  {
    id: "2",
    name: "Mr. Jorge Oscar Lopez",
    desc: "Commercial Director Andreani Group & Mrs. Maria Laura Solinas Visited us from Argentina wanting to explore Bhutan and North India. Their response on our services took us over the moon which they mentioned, when Nitin and his family had them over for dinner and rinks at their home –“The hospitality experience in India is so very personalized with the hotels, drivers, guide and every person that meet you, you feel so welcomed with the warmth that they transmit. Never felt solike home even when away from home					",
  },
  {
    id: "3",
    name: "Mr. Jorge Oscar Lopez",
    desc: "Commercial Director Andreani Group & Mrs. Maria Laura Solinas Visited us from Argentina wanting to explore Bhutan and North India. Their response on our services took us over the moon which they mentioned, when Nitin and his family had them over for dinner and rinks at their home –“The hospitality experience in India is so very personalized with the hotels, drivers, guide and every person that meet you, you feel so welcomed with the warmth that they transmit. Never felt solike home even when away from home					",
  },
  {
    id: "4",
    name: "Mr. Jorge Oscar Lopez",
    desc: "Commercial Director Andreani Group & Mrs. Maria Laura Solinas Visited us from Argentina wanting to explore Bhutan and North India. Their response on our services took us over the moon which they mentioned, when Nitin and his family had them over for dinner and rinks at their home –“The hospitality experience in India is so very personalized with the hotels, drivers, guide and every person that meet you, you feel so welcomed with the warmth that they transmit. Never felt solike home even when away from home					",
  },
];
const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Testimonial = () => {
  return (
    <>
      <section
        className="testimonialSec"
        style={{
          backgroundImage: `url(${"/assets/images/testimonial-bg.jpg"})`,
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12  col-md-12 ">
              <div className="testimonialTitle">
                <h6 className="text-white">Go & Discover</h6>
                <h2 className="text-white">Collection of traveler’s stories</h2>
                <p className="text-white">
                  We seek candid feedback to improve customer satisfaction and
                  we are...
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="customerContent">
                <Slider {...settings}>
                  {data.map((item) => {
                    return (
                      <div className="content">
                        <span>{item.name}</span>
                        <p>{item.desc}</p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
