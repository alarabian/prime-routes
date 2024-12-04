import React from "react";
import BlogItem from "./blogItem/BlogItem";

const LatestBlog = () => {
  return (
    <>
      <section className="latestBlog sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="sectionTitle text-center">
                <h6>Blog & News</h6>
                <h2>Our Latest Blog</h2>
                <p>
                  Curabitur aliquet quam id dui posuere blandit. Vivamus magna
                  justo, lacinia eget consectetur sed, convgallis at tellus.
                  Vestibulum ac diam sit.
                </p>
              </div>
              <BlogItem />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestBlog;
