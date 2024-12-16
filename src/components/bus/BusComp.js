import React from "react";
import BusForm from "./bus-form/BusForm";
import InterestedFlight from "../flight/interested-flight/InterestedFlight";
import BusFilter from "./bus-filter/BusFilter";
import BusListSec from "./bus-list-sec/BusListSec";
import BusListItem from "./bus-list-sec/bus-list-item/BusListItem";

const BusComp = () => {
  return (
    <>
      <section className="busPage">
        <div className="sectionSpace pb-0 bgGray">
          <div className="container-fluid">
            <BusForm />
          </div>
        </div>
        <div className="sectionSpace bgGray">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <BusFilter />
              </div>
              <div className="col-lg-9 col-md-9">
                <BusListSec />
                <div className="busListItems">
                  <BusListItem/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusComp;
