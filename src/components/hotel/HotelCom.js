import React from "react";
import HotelFilter from "./hotel-filter/HotelFilter";
import HotelItems from "./hotel-items/HotelItems";

const HotelCom = () => {
  return (
    <>
      <section className="hotelListPage sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <HotelFilter />
            </div>
            <div className="col-lg-9 col-md-9">
              <HotelItems />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelCom;
