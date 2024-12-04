import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const Breathtaking = () => {
  return (
    <>
      <div className="breathtakingSec bgGray sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="cityTitle">
                <h6>Go & Discover</h6>
                <h3>Breathtaking Cities</h3>
                <p>
                  Curabitur aliquet quam id dui posuere blandit. Vivamus magna
                  justo, lacinia eget consectetur sed, convgallis at tellus.
                </p>
              </div>
              <div className="cityFigure">
                <Image
                  src={"/assets/images/gallery-1-1.jpg"}
                  alt="Gallery"
                  width={300}
                  height={400}
                ></Image>
                <Image
                  src={"/assets/images/gallery-1-2.jpg"}
                  alt="Gallery"
                  width={300}
                  height={400}
                ></Image>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="cityFigure1">
                <Image
                  src={"/assets/images/gallery-1-1.jpg"}
                  alt="Gallery"
                  width={600}
                  height={600}
                ></Image>
                <div className="watch">
                  Watch Video{" "}
                  <span>
                    {" "}
                    <FaPlay />
                  </span>
                </div>
                <div className="numbers">
                  <ul>
                    <li>
                      Since
                      <span>2012</span>
                    </li>
                    <li>
                      Destinations
                      <span>06</span>
                    </li>
                    <li>
                      Travellers
                      <span>8450</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breathtaking;
