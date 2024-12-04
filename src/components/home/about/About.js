import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <section className="aboutSec sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="aboutImg">
                <Image
                  src={"/assets/images/about-lg.jpg"}
                  alt="banner"
                  width={400}
                  height={500}
                ></Image>
                <Image
                  src={"/assets/images/about-sm.jpg"}
                  alt="banner"
                  width={200}
                  height={300}
                ></Image>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="aboutContent">
                <h2>Experience the Ultimate Beach Getaway</h2>
                <p>
                  Our expert team is dedicated to turning your travel dreams
                  into reality. We offer personalized itineraries, luxury
                  accommodations, and unique experiences that cater to all types
                  of travelers
                </p>
                <ul>
                  <li>
                    <h5>Experienced Guides</h5>
                    <p>
                      Embark on a journey where the sun kisses the horizon, the
                      waves whisper stories of far-off lands, and every moment
                      is a step closer to paradise.
                    </p>
                  </li>
                  <li>
                    <h5>Customizable Packages</h5>
                    <p>
                      The vibrant culture of tropical islands, or the thrill of
                      ocean adventures, we have the perfect destination for you.
                    </p>
                  </li>
                </ul>
                <Link href="/" className="bookNow">
                  book now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
