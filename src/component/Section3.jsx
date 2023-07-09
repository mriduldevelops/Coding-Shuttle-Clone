import React from "react";
import Heading from "./Heading";
import amazon from "./images/asset 36.png";
import sana from "./images/asset 8.png";
import linkedin from "./images/in.svg";

const cardInfo = [
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE INTERN",
      company: amazon,
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it never disappointed. No doubt, the best content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE INTERN",
      company: amazon,
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it never disappointed. No doubt, the best content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE INTERN",
      company: amazon,
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it never disappointed. No doubt, the best content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE INTERN",
      company: amazon,
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it never disappointed. No doubt, the best content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE INTERN",
      company: amazon,
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it never disappointed. No doubt, the best content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE INTERN",
      company: amazon,
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it never disappointed. No doubt, the best content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE INTERN",
      company: amazon,
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it never disappointed. No doubt, the best content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE INTERN",
      company: amazon,
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it never disappointed. No doubt, the best content!",
  },
  {
    profile: sana,
    info: {
      name: "Sana Siddiqui",
      position: "SDE INTERN",
      company: amazon,
    },
    review:
      "The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it never disappointed. No doubt, the best content!",
  },
];
function Section3() {
  return (
    <>
      <div className="success-section">
        <Heading
          h5="SUCCESS STORIES"
          h1="Transform Your Life With"
          span="Coding Shuttle"
          color="#8f2d56"
        />
        <div className="success-cards">
          {cardInfo.map((info) => {
            return (
              <div className="s-card">
                <div className="top">
                  <div className="img">
                    <img src={info.profile} alt="img" />
                  </div>
                  <div className="info">
                    <h5>{info.info.name}</h5>
                    <p>{info.info.position}</p>
                    <img src={info.info.company} alt="amazon-logo" />
                  </div>
                  <div className="in">
                    <img src={linkedin} alt="linkedin-logo" />
                  </div>
                </div>
                <div className="bottom">
                  <p>{info.review}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Section3;
