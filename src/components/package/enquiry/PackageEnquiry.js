import React from "react";

const PackageEnquiry = () => {
  return (
    <>
      <div className="PackageEnquiry">
        <h4>We are here to serve you...</h4>
        <form className="PackageForm">
          <div className="form-group mb-3">
            <input type="text" placeholder="Name" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <input type="mail" placeholder="Email" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <input type="phone" placeholder="Mobile Number" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <input type="date" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <input type="phone" placeholder="Number of pax" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <input type="text" placeholder="Destination" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <textarea placeholder="Remarks" className="form-control" ></textarea>
          </div>
          <div className="form-group mb-3">
            <button className="bookNow border-0" >Send Enquiry</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PackageEnquiry;
