import React from "react";
import HeroImg from "./images/heroimg.svg";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="hero-section">
          <div className="hero-section-left">
            <div id="div1">

            <h1>
              <span style={{ color: "#7209b7", textDecoration: "underline" }}>
                Prime
              </span>{" "}
              Program is now Open for Enrollments
            </h1>
            </div>
            <div id="div2">

              <p>A Program to make you Job Ready for your Dream Company 🚀</p>
              <button>ENROLL NOW </button>
              <p style={{ fontSize: "18px", color: "#000" }}>
                This batch starts from <b>30th July</b>
              </p>
            </div>
              <div id="div3">
                <div>
                  <p>
                    <span>1000+</span>
                    <br />
                    Sucess Stories
                  </p>
                </div>
                <div>
                  <p>
                    <span>120+</span>
                    <br />
                    Companies Hired
                  </p>
                </div>
                <div style={{ border: "none" }}>
                  <p>
                    <span>40LPA</span>
                    <br />
                    Highest Package
                  </p>
                </div>
              </div>
          </div>
          <div className="hero-section-right">
            <img src={HeroImg} alt="hero-section-img" />
          </div>
        </div>
        <div className="assurance">
          A Certified 5-Months Program To Assure Your Success
        </div>
      </div>
    </>
  );
}

export default Hero;
