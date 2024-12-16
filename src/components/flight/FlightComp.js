import React from "react";
import FlightForm from "./flight-form/FlightForm";
import InterestedFlight from "./interested-flight/InterestedFlight";
import FlightAside from "./flight-aside/FlightAside";
import FlightList from "./flight-list/FlightList";

const FlightComp = () => {
  return (
    <>
      <section className="FlightComp ">
        <div className="bgGray sectionSpace">
          <div className="container-fluid">
            <FlightForm />
            <InterestedFlight />
          </div>
        </div>
        <div className="sectionSpace">
          <div className="container-fluid">
            <div className="row">              
              <div className="col-lg-3 col-md-3">
                <FlightAside />
              </div>
              <div className="col-lg-9 col-md-9">
                <FlightList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlightComp;
