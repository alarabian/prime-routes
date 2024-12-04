import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlCalender } from "react-icons/sl";

const data = [
  {
    id: "1",
    url: "/assets/images/blog1.jpg",
    name: "The Eliza Experience At The Imperial, Delhi",
    desc: "The Imperial is the oldest and one of the finest luxury hotels in New Delhi. The Eliza Experience is a special facility curated for",
    date: "12 December 2023",
  },
  {
    id: "2",
    url: "/assets/images/blog2.jpg",
    name: "Diwali",
    desc: "Exchange of presents are followed by pujas (prayer ceremonies) of Hindu deities like Ganesh, the elephant headed god and goddess Laxmi, the bringer of",
    date: "12 December 2023",
  },
  {
    id: "3",
    url: "/assets/images/blog3.jpg",
    name: "Ashram Way Of Life",
    desc: "Life finds a new meaning back at the ashrams in India. Away from all forms of materialism many commit to a quest of finding",
    date: "12 December 2023",
  },
];

const BlogItem = () => {
  return (
    <>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-lg-4 col-md-4" key={item.id}>
            <div className="blogItem" >
              <div className="figure">
                <Image
                  alt="Blog"
                  src={item.url}
                  width={360}
                  height={250}
                ></Image>
              </div>
              <div className="content">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>

                <div className="footer">
                  <div className="date">
                    <SlCalender />
                    {item.date}
                  </div>
                  <Link href={"/"}>Read More</Link>
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogItem;
