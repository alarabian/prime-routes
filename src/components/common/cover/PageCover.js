import React from "react";

const PageCover = ({ title, url }) => {
  return (
    <>
      <div
        className="pageCoverSec testimonialSec"
        style={{
          backgroundImage: url
            ? `url(${url})`
            : `url(${"/assets/images/breadcrumb.jpg"})`,
        }}
      >
        <div className="container-fluid">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
};

export default PageCover;
