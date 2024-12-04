import React from "react";
import DestinationItem from "./destination-item/DestinationItem";

const Destinations = () => {
  return (
    <>
      <section className="destinationSec sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="sectionTitle text-center">
                <h2>Our Destinations</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo illo culpa modi placeat error autem vel quod debitis
                  eaque laborum!
                </p>
              </div>
              <DestinationItem />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
