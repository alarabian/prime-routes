import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

const ContactDetail = () => {
  return (
    <>
      <div className="contactDetailSec sectionSpace">
        <div className="container-fluid">
          <div className="contactDetail">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="detailCard">
                  <div className="icon">
                    <FaRegAddressBook />
                  </div>
                  <div className="text">
                    <h4>Address</h4>
                    <p>
                      98B, 2nd Floor, Namberdar Estate, Taimoor Nagar, New
                      Friends Colony, New Delhi-110025
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="detailCard">
                  <div className="icon">
                    <IoIosContact />
                  </div>
                  <div className="text">
                    <h4>Contact</h4>
                    <p>Mobile: 123456789</p>
                    <p>Landline: 123456789</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="detailCard">
                  <div className="icon">
                    <FaRegAddressBook />
                  </div>
                  <div className="text">
                    <h4>Office Hour</h4>
                    <p>Monday - Friday: 8:30 - 20:00</p>
                    <p>Saturday & Sunday: 9:30 - 21:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
