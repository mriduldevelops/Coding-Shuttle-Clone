import React from "react";
import Heading from "./Heading";
import programImg from "./images/Prime_Program.png";
import Accordion from "./Accordian";

export default function Section4() {
  return (
    <div className="curriculum">
      <Heading
        h5="OUR CURRICULUM"
        h1="Structured Curriculum Vetted By"
        span="Industry Experts"
        color="#006d77"
      />
      <div className="content">
        <div className="left">
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          </div>
        <div className="right">
          <div className="program-card">
            <div className="img">
              <img src={programImg} alt="Prime Program" />
            </div>
            <div className="pricing">
              <h4>
                <strike> &#8377; 7,800/ </strike>
              </h4>
              <div>
              <h1>
                <span> &#8377; </span> 6,480
              </h1>
              <p>or EMI Rs1,080/mon*</p>
              </div>
              <button>Start Learning</button>
            </div>
            <div className="feature">
              <ul>
                <li>30+ Hrs LIVE Problem Solving Classes</li>
                <li>60+ Hrs Online Content</li>
                <li>400+ Hanpicked Problems</li>
                <li>5 Months Program</li>
                <li>2 Years Access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
