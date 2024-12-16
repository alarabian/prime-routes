import React from "react";
import { BiSearch } from "react-icons/bi";

const BusForm = () => {
  return (
    <>
      <div className="busForm travelBooking">
        <div className="title">
          <h3>India best booking system with special discounts &amp; perks</h3>
          <p>
            A booking is a system for travels in the form odf service. A vibe
            and explore the top destination in words
          </p>
        </div>
        <form className="hotelForm busForm">
          <div className="form-group fromCom">
            <input type="text" className="form-control" placeholder="From" />
          </div>

          <div className="form-group">
            <input type="text" className="form-control" placeholder="To" />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              placeholder="Travel Date"
            />
          </div>

          <div className="form-group">
            <a href="/bus-list" className="btn searchHotel">
              {" "}
              <BiSearch /> Search Bus
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default BusForm;
