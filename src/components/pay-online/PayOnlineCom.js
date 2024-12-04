import React from "react";

const PayOnlineCom = () => {
  return (
    <>
      <div className="payCard sectionSpace">
        <div className="container-fluid">
        <div className="cityTitle">
        <h6>Payment online</h6>
        <h3>Payment Gateway</h3>
        
      </div>
      <div className="getTouch">
        <form className="mb-0">
          <div className="row">
            <div className="col-lg-6">
              
              <div className="form-group mb-3">
                <label className="mb-1" htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group mb-3">
                <label className="mb-1" htmlFor="contact-email">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact-email"
                  name="phone"
                  required
                  placeholder="Phone number"
                />
            </div>
            <div className="form-group mb-3">
                <label className="mb-1" htmlFor="contact-email">
                  Invoice Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact-email"
                  name="number"
                  required
                  placeholder="Amount"
                />
            </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group mb-3">
                <label className="mb-1" htmlFor="contact-email">
                  Your E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group mb-3">
                <label className="mb-1" htmlFor="contact-email">
                  Invoice Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contact-email"
                  name="phone"
                  required
                  placeholder="As Mentioned on your invoice"
                />
            </div>
            </div>
            <div className="col-lg-12">
              
              <div className="form-group mb-3">
                <label className="mb-1" htmlFor="contact-email">
                  Address
                </label>
                <input
                  type="number"
                  className="form-control mb-3"
                  id="contact-email"
                  name="text"
                  required
                  placeholder="Billing Address 1"
                />
                <input
                  type="number"
                  className="form-control mb-3"
                  id="contact-email"
                  name="text"
                  required
                  placeholder="Billing Address 2"
                />
                <input
                  type="number"
                  className="form-control mb-3"
                  id="contact-email"
                  name="text"
                  required
                  placeholder="City"
                />
                <input
                  type="number"
                  className="form-control mb-3"
                  id="contact-email"
                  name="text"
                  required
                  placeholder="State"
                />
                <input
                  type="number"
                  className="form-control mb-3"
                  id="contact-email"
                  name="text"
                  required
                  placeholder="Country"
                />
                <input
                  type="number"
                  className="form-control mb-3"
                  id="contact-email"
                  name="number"
                  required
                  placeholder="Pin Code"
                />
              </div>
              <div className="form-group mb-3">
                <label className="mb-1" htmlFor="contact-message">
                  Your Message
                </label>
                <textarea
                  cols={30}
                  rows={4}
                  id="contact-message"
                  className="form-control"
                  name="message"
                  required
                  placeholder="Enter Your Message"
                  defaultValue={""}
                />
              </div>{" "}
              <div className="form-footer mb-0">
                <button type="button" className="bookNow border-0">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
        </div>
      </div>
    </>
  );
};

export default PayOnlineCom;
