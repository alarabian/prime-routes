import React from "react";

const PageCover = ({ title }) => {
  return (
    <>
      <div className="pageCoverSec testimonialSec" style={{
          backgroundImage: `url(${"/assets/images/breadcumb-bg.jpg"})`,
        }}>
        <div className="container-fluid">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
};

export default PageCover;
