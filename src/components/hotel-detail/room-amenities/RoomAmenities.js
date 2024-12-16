import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaPhone, FaSmokingBan } from "react-icons/fa";
import { IoMdWifi } from "react-icons/io";
import { MdConnectedTv } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { LuHeater } from "react-icons/lu";
import { PiHairDryer } from "react-icons/pi";

const RoomAmenities = () => {
  return (
    <>
      <div className="amenities">
        <h4>Room Amenities</h4>
        <ul>
          <li>
            <MdConnectedTv />
            <span>TV</span>
          </li>
          <li>
            <IoMdWifi />
            <span>Free Wifi</span>
          </li>
          <li>
            <AiOutlineSafety />
            <span>Safe</span>
          </li>
          <li>
            <FaSmokingBan />
            <span>None Smoking</span>
          </li>
          <li>
            <TbAirConditioning />
            <span>Air Conditioning</span>
          </li>
          {/* <li>
            <LuHeater />
            <span>Heater</span>
          </li>
         <li>
          <FaPhone />
            <span>Phone</span>
          </li>
          <li>
          <PiHairDryer />
            <span>Hair Dryer</span>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default RoomAmenities;
