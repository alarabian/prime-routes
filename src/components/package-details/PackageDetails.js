import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

import { RiWhatsappLine } from "react-icons/ri";
import { LuHotel } from "react-icons/lu";
import { GiAtSea, GiHotMeal } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import Link from "next/link";

const PackageDetails = () => {
  return (
    <>
      <section className="packageDetailPage sectionSpace bgGray">
        <div className="container-fluid">
          <div className="packageDetailCard">
            <h3>Package Includes</h3>
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
                <li>
                  <IoDocumentTextOutline />
                  Itinerary
                </li>
                <li>
                  <GrDocumentText /> Terms & Conditions
                </li>
              </ul>
            </div>
            <p>
              Delhi is the capital city of India. The city that is bordered by
              Haryana and Uttar Pradesh. This city is very populous in the
              country that ranked the second-highest after Mumbai in India. It
              also has the second-highest GDP per capita in the country. Home to
              magnificent palaces and kingdoms, this city has captured the
              hearts of people from all over the world. It is a perfect blender
              of traditions and modernism. Delhi is very rich in its
              infrastructure. It is one of the most developed cities in India
              that is home to the famous International Airport - Indira Gandhi
              International Airport in which several international flights take
              off and land on. It is the busiest airport in India and South
              Asia. Delhi s roads are very well connected and there are a lot of
              options available to travel in and around the city. You will come
              across a lot of private vehicles and especially cars while
              travelling on the roads. Delhi is home to some of the famous
              national highways like NH1, NH2, NH8, NH10 and NH24 that connects
              itself from the other major cities in the country. Delhi Metro is
              very advanced and has become the daily transport of millions of
              people. Hinduism is the predominant religion in this city followed
              by Islam, Sikhism, Jainism, Christianity and then Buddhism.
              Several languages are spoken in the town with Hindi being the main
              cultural language. English is the second most spoken language in
              Delhi. To the surprise, around half of the population in Delhi
              lives in slums and unauthorized colonies that lack basic amenities
              in many of the places. You will come across several festivals that
              are celebrated every other day with full excitement and traditions
              such as Gandhi Jayanti, Independence Day, Diwali, Raksha Bandhan,
              Eid-ul-Fitr, Moharram, Lohri, Holi, Janmashtami and many more.
              There s magic in the city s air when it s the festive season. The
              tourism sector has flourished significantly in Delhi. In the year
              2015, Delhi was ranked as the 28th most visited city in the world.
              Tourists from all over the world love the culture in Delhi and how
              to forget, Delhi is home to three of the main UNESCO World
              Heritage Sites that are Qutub Minar, Humayuns Tomb and the Red
              Fort. Delhi is also home to one of the most famous landmarks in
              the country names the India Gate. There are a lot many cultural,
              historical, ancient, adventurous and thrilling places in Delhi
              that make it a must-visit city in India.
            </p>

            <p>
              <strong>Price Includes:</strong> 1 Hotel(s), 4 Sightseeing,
              Flight, All Meals, Guided Tours, Visa, Travel Insurance, All
              Transfers
            </p>
            <div className="packageView">
              <Link href="/">
                <RiWhatsappLine /> Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageDetails;
