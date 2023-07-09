import React from "react";
import icon1 from "./images/asset 59.svg";
import icon2 from "./images/asset 60.svg";
import icon3 from "./images/asset 61.svg";
import icon4 from "./images/asset 62.svg";
import icon5 from "./images/asset 63.svg";
import icon6 from "./images/asset 64.svg";
import Heading from "./Heading";
const cardData = [
  {
    cardIcon: icon1,
    cardHeading: "High-quality Sessions",
    cardDetails:
      " Get a unique blend of online and live sessions to ensure that you recieve a high-quality learning experience that will keep you engaged and excited to learn",
    cardStyle: {
      backgroundColor: "#f2ebfb",
      border: "1px solid #6b63ff5d",
    },
  },
  {
    cardIcon: icon2,
    cardHeading: "High-quality Sessions",
    cardDetails:
      " Get a unique blend of online and live sessions to ensure that you recieve a high-quality learning experience that will keep you engaged and excited to learn",
    cardStyle: {
      backgroundColor: "#eaffee",
      border: "1px solid #b4ffd3",
    },
  },
  {
    cardIcon: icon3,
    cardHeading: "High-quality Sessions",
    cardDetails:
      " Get a unique blend of online and live sessions to ensure that you recieve a high-quality learning experience that will keep you engaged and excited to learn",
    cardStyle: {
      backgroundColor: "#eceeff",
      border: "1px solid #b0b8ff",
    },
  },
  {
    cardIcon: icon4,
    cardHeading: "High-quality Sessions",
    cardDetails:
      " Get a unique blend of online and live sessions to ensure that you recieve a high-quality learning experience that will keep you engaged and excited to learn",
    cardStyle: {
      backgroundColor: "#fff0f8",
      border: "1px solid #ffa3ca",
    },
  },
  {
    cardIcon: icon5,
    cardHeading: "High-quality Sessions",
    cardDetails:
      " Get a unique blend of online and live sessions to ensure that you recieve a high-quality learning experience that will keep you engaged and excited to learn",
    cardStyle: {
      backgroundColor: "#edf7ff",
      border: "1px solid #a6e6ff",
    },
  },
  {
    cardIcon: icon6,
    cardHeading: "High-quality Sessions",
    cardDetails:
      " Get a unique blend of online and live sessions to ensure that you recieve a high-quality learning experience that will keep you engaged and excited to learn",
    cardStyle: {
      backgroundColor: "#fff7d4",
      border: "1px solid #ffe9a0",
    },
  },
];

function Section1() {
  return (
    <>
    <Heading h5="PROGRAM BENEFITS" h1="Here Is What You Get" span=" Out Of This Program" color="#ec0868" />
      <div className="cards">
        {cardData.map((data) => {
          return (
            <div className="card" style={data.cardStyle}>
              <img src={data.cardIcon} alt="icon-1" />
              <h5>{data.cardHeading}</h5>
              <p>{data.cardDetails}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Section1;
