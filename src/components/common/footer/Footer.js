import Image from "next/image";
import React from "react";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="footerWidget">
                <div className="mainLogo">
                  <Link href={"/"}>
                    <Image
                      src="/assets/images/logo.png"
                      alt="Prime Routes"
                      width={200}
                      height={60}
                    />
                  </Link>
                  <p>
                    Curabitur aliquet quam id dui bandit posuere blandit.
                    Vivamfdsus magna justo blandit aliquet.
                  </p>
                </div>
                <div className="social">
                  <ul>
                    <li>
                      <Link href="/">
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <VscTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <AiFillInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footerWidget">
                <h4>Useful Links</h4>

                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Who we Are</Link>
                  </li>
                  <li>
                    <Link href="/">Destinations</Link>
                  </li>
                  <li>
                    <Link href="/">Thematic Journeys</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/">Our Blogs</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/">Payment Gateway</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footerWidget">
                <h4> Address</h4>
                <p>
                98B, 2nd Floor, Namberdar Estate, Taimoor Nagar, New Friends Colony, New Delhi-110025

                </p>
              </div>
              <div className="footerWidget">
                <h4>Contact</h4>
                <p>Tel: +91 11 4705 2815</p>
                <p>india@demo.com</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright">
                <p>@2024 Prime Routes</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
