import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaPhone, FaSmokingBan } from "react-icons/fa";
import { IoMdWifi } from "react-icons/io";
import { MdConnectedTv } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { LuHeater } from "react-icons/lu";
import { PiHairDryer } from "react-icons/pi";

const HotelAmenities = () => {
  return (
    <>
      <div className="amenities">
        <h4>Hotel Amenities</h4>
        <ul>
          <li>
            <MdConnectedTv />
            <span>Gym</span>
          </li>
          <li>
            <IoMdWifi />
            <span>Parking</span>
          </li>
          <li>
            <AiOutlineSafety />
            <span>Spa</span>
          </li>
          <li>
            <FaSmokingBan />
            <span>Restaurant</span>
          </li>
          <li>
            <TbAirConditioning />
            <span>Room Service</span>
          </li>
          <li>
            <TbAirConditioning />
            <span>Swimming Pool</span>
          </li>
          <li>
            <TbAirConditioning />
            <span>24 Hour Concierge</span>
          </li>
          <li>
            <TbAirConditioning />
            <span>In-house Laundry</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HotelAmenities;
