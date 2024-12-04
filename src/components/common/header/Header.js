"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand mainLogo">
              <Image
                src="/assets/images/logo.png"
                alt="Prime Routes"
                width={200}
                height={60}
              ></Image>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menuCard">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Who we are
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Destinations
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Thematic Journeys
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="loginPart">
              <div className="loginItem">
                <Link href={"/payonline"} className="login">
                  Pay Online
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
