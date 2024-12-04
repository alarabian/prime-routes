"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Banner from "./banner/Banner";
import About from "./about/About";
import Breathtaking from "./breath-taking/Breathtaking";
import Destinations from "./destinations/Destinations";
import Testimonial from "./testimonial/Testimonial";
import LatestBlog from "./latest-blog/LatestBlog";
import Image from "next/image";
import StayTouch from "./stay-touch/StayTouch";
import GetStarted from "./get-started/GetStarted";

const Home = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <main className="main">
        <Banner />
        <About />
        <Breathtaking />
        <Testimonial />
        <Destinations />
        <StayTouch />
        <LatestBlog />
        <GetStarted />
        
      </main>
    </>
  );
};

export default Home;
