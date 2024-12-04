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
        <LatestBlog />
        <div className="container-fluid">
          <div className="row getStarted">
            <div className="col-lg-8 col-md-8">
              <div className="getStartedText">
                <h3>Ready to get started?</h3>
                <p>
                  It only takes a few minutes to register your FREE Prime ROutes
                  account.
                </p>
                <Link href={"/signup"}>Open An Account</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="getStartedImg">
                <Image
                  alt="Get Started"
                  src={"/assets/images/newsletter.png"}
                  width={400}
                  height={300}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
