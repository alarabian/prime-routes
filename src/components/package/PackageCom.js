import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuHotel } from "react-icons/lu";
import { RiWhatsappLine } from "react-icons/ri";
import { GiAtSea, GiHotMeal } from "react-icons/gi";
import PackageEnquiry from "./enquiry/PackageEnquiry";
import { FiArrowRight } from "react-icons/fi";
import ProviderDetails from "../hotel-detail/hotel-detail-aside/provider-details/ProviderDetails";

const PackageCom = () => {
  return (
    <>
      <section className="packageCom sectionSpace">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="packageCard">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="packageFigure">
                      <Image
                        src={"/assets/images/package/sort.webp"}
                        alt="Package"
                        width={820}
                        height={500}
                      ></Image>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="packageText">
                      <div className="packageList">
                        <ul>
                          <li>
                            <LuHotel /> Hotels
                          </li>
                          <li>
                            <GiHotMeal /> Meals
                          </li>
                          <li>
                            <GiAtSea /> Sightseeing
                          </li>
                        </ul>
                      </div>
                      <div className="packageTitle">
                        <div className="pack">
                          <h3>Delhi Tour Packages</h3>
                          <p>5 Days | 4 Nights</p>
                          <span>Delhi, India</span>
                        </div>
                        <div className="pack">
                          <p>Starting from</p>
                          <h3>₹20,671</h3>
                          <span>Per Person</span>
                        </div>
                      </div>
                      <div className="packageView">
                        <Link href="/">
                          <RiWhatsappLine /> Book Now
                        </Link>
                        <Link href="/package-details" className="bg-black">
                          View Details <FiArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <PackageEnquiry />
              <div className="PackageEnquiry">
                <ProviderDetails />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageCom;
