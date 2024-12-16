import React from "react";
import ShortInfo from "./short-info/ShortInfo";
import RoomView from "./room-view/RoomView";
import AboutRoom from "./about-room/AboutRoom";
import RoomAmenities from "./room-amenities/RoomAmenities";
import HotelFilter from "../hotel/hotel-filter/HotelFilter";
import HotelAmenities from "./hotel-amenities/HotelAmenities";
import HotelRules from "./hotel-rules/HotelRules";
import HotelDetailAside from "./hotel-detail-aside/HotelDetailAside";

const HotelDetail = () => {
  return (
    <>
      <section className="hotelDetailPage sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="hotelDetail">
                <ShortInfo />
                <RoomView />
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="homeDetailBody">
                <AboutRoom />
                <RoomAmenities />
                <HotelAmenities />
                <HotelRules />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <HotelDetailAside />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelDetail;
