import React from "react";

const FlightSort = () => {
  return (
    <>
      <div className="lightSort">
        <div className="title">
          <h5>920 Flights Found on Your Search</h5>
        </div>
        <div className="sortButton">
          <div className="view"></div>
          <div className="sort">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>Sort By:</strong> Recommended
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Recommended
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Price: low to high
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Newest
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ratings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSort;
