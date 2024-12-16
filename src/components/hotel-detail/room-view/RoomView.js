import Image from "next/image";
import { RiGalleryView2 } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";

import React from "react";

const RoomView = () => {
  return (
    <>
      <div className="roomView">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="bigView">
              <Image
                src={"/assets/images/hotel/hotel-detail1.jpg"}
                width={840}
                height={404}
                alt="Image"
              ></Image>
              <div className="viewPlayer">
                <span>
                  <RiGalleryView2 />
                  Gallery
                </span>
                <span>
                  <MdOndemandVideo />
                  Video
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="smallView">
              <Image
                src={"/assets/images/hotel/hotel-detail2.jpg"}
                width={400}
                height={200}
                alt="Image"
              ></Image>
              <Image
                src={"/assets/images/hotel/hotel-detail3.jpg"}
                width={400}
                height={200}
                alt="Image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomView;
