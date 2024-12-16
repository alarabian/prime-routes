import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
const data = [
  { id: "1", url: `${"/assets/images/gallery/gallery1.jpg"}` },
  { id: "2", url: `${"/assets/images/gallery/gallery2.jpg"}` },
  { id: "3", url: `${"/assets/images/gallery/gallery3.jpg"}` },
  { id: "4", url: `${"/assets/images/gallery/gallery4.jpg"}` },
  { id: "5", url: `${"/assets/images/gallery/gallery5.jpg"}` },
  { id: "6", url: `${"/assets/images/gallery/gallery6.jpg"}` },
];
const VideoComp = () => {
  return (
    <>
      <section className="galleryPage sectionSpace">
        <div className="container-fluid">
          <div className="galleryTitle">
            <h3>
              Video <span>Gallery</span>
            </h3>
          </div>
          <div className="galleryCard">
            {data.map((item) => {
              return (
                <div className="galleryItem" key={item.id}>
                  <Image
                    src={item.url}
                    width={610}
                    height={350}
                    alt="Gallery"
                  />
                  <div className="play pulse">
                    <FaPlay />{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoComp;
