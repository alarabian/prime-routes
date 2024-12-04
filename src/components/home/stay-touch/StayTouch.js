import Image from "next/image";
import Link from "next/link";
import React from "react";
const data = [
  {
    id: "1",
    url: "/assets/images/insta1.jpg",
  },
  {
    id: "2",
    url: "/assets/images/insta2.jpg",
  },
  {
    id: "3",
    url: "/assets/images/insta3.jpg",
  },
  {
    id: "4",
    url: "/assets/images/insta4.jpg",
  },
  {
    id: "5",
    url: "/assets/images/insta5.jpg",
  },
  {
    id: "6",
    url: "/assets/images/insta6.jpg",
  },
];

const StayTouch = () => {
  return (
    <>
      <section className="stayTouch sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="cityTitle">
                <h6>Contact With Us</h6>
                <h3>Lets Stay in Touch</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  provident non...
                </p>
              </div>
              <div className="getTouch">
                <form className="mb-0">
                  <div className="row">
                    <div className="col-lg-6">
                      {" "}
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
                    </div>
                    <div className="col-lg-12">
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
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="instagramSec">
                <h2>Our Instagram</h2>
                <div className="social">
                  {" "}
                  {data.map((item) => {
                    return (
                      <Link href={"/"} key={item.id}>
                        <Image
                          src={item.url}
                          alt="Instagram"
                          width={135}
                          height={135}
                        ></Image>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StayTouch;
