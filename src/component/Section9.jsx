import React from "react";
import Heading from "./Heading";
import sana from "./images/asset 8.png";
import linkedin from "./images/in.svg";

const cardInfo = [
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE Intern at IBM",
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA,  content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE Intern at IBM",
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA,  content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE Intern at IBM",
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA,  content!",
  },
];
export default function Section9() {
  return (
    <>
      <div className="review-section">
        <Heading
          h5="REVIEWS"
          h1="Go Through Reviews Of Previous Students To"
          span="Make An Informed Decision"
          color="#d81159"
        />
        <div className="body">
          <div className="success-cards">
            {cardInfo.map((info) => {
              return (
                <div className="s-card">
                    <div className="rating">
                        <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    </div>
                  <div className="bottom">
                    <p>{info.review}</p>
                  </div>
                  <div className="top">
                    <div className="img">
                      <img src={info.profile} alt="img" />
                    </div>
                    <div className="info">
                      <h5>{info.info.name}</h5>
                      <p>{info.info.position}</p>
                    </div>
                    <div className="in">
                      <img src={linkedin} alt="linkedin-logo" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
