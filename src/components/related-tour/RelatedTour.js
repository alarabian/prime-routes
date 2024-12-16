import Image from "next/image";
import Link from "next/link";
import React from "react";
const data = [
  {
    id: "1",
    title: "Turkey",
    url: `${"/assets/images/package/destination-01.jpg"}`,
  },
  {
    id: "2",
    title: "Thailand",
    url: `${"/assets/images/package/destination-02.jpg"}`,
  },
  {
    id: "3",
    title: "Australia",
    url: `${"/assets/images/package/destination-03.jpg"}`,
  },
  {
    id: "4",
    title: "Brazil",
    url: `${"/assets/images/package/destination-04.jpg"}`,
  },
];
const RelatedTour = () => {
  return (
    <>
      <section className="relatedTour sectionSpace" style={{
          background: `url(${"/assets/images/benefit-bg.PNG"})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sectionTitle">
                <h2>You might also like</h2>
                <p>
                  Prime Routes Marketplace is a platform designed to connect
                  fans with exclusive experiences related to a specific tour
                </p>
              </div>
            </div>
            {data.map((item) => {
              return (
                <div className="col-lg-3 col-md-3" key={item.id}>
                  <div className="relatedItem">
                    <Link href={"/package"}>
                      <Image
                        src={item.url}
                        alt="item"
                        width={290}
                        height={300}
                      ></Image>
                      <h4>{item.title}</h4>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedTour;
