import Rating from "@/components/common/rating/Rating";
import React from "react";
import { PiCity } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineBed } from "react-icons/md";

const ShortInfo = () => {
  return (
    <>
      <div className="shortInfo">
        <h3>Standard Deluxe</h3>
        <div className="review">
          <Rating /> (1 Review)
        </div>
        <ul>
          <li>
            <div className="icon">
              <MdOutlineBed />
            </div>
            <div className="text">
              <p>2 King Beds</p>
            </div>
          </li>
          <li>
            <div className="icon">
              <FaRegCircleUser />
            </div>
            <div className="text">
              <p>Max: 6 Guests</p>
            </div>
          </li>
          <li>
            <div className="icon">
              <FiPlusSquare />
            </div>
            <div className="text">
              <p>45 sqm</p>
            </div>
          </li>
          <li>
            <div className="icon">
              <PiCity />
            </div>
            <div className="text">
              <p>City View</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShortInfo;
