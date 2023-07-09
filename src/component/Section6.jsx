import React from "react";
import Heading from "./Heading";
import bhaiya from "./images/anuj_bhaiya.webp";
import amazon from "./images/asset 36.png"
import uc from "./images/asset 37.png"
function Section6() {
  return (
    <>
      <div className="founder-section">
        <Heading h5="GREETINGS" h1="From The" span="Founder" color="#04a777" />
        <div className="body">
          <div className="left">
            <img src={bhaiya} alt="Founder-img" />
          </div>
          <div className="right">
            <p>
              Hello Everyone, I understand that there is an overwhelming number
              of online courses, tutorials, and books out there. There are some
              great ones. But most of them are outdated, overly complicated, and
              don't teach proper skills. Most people feel paralyzed and don't
              know where to start when learning complex topics and many don't
              have 3 Lakhs Rupees to spend on a coding boot camp. <span> Programming &
              tech skills should be affordable and open to all.</span> And educational
              materials should teach real-life skills that are current and not
              waste your valuable time. This has been our mission from Day 1 and
              this is what <b>Coding Shuttle</b> is all about.
              <br />
              <br />
              A lot of students around the world have taken our previous courses
              and many of them are now working in their dream job at companies
              like <b>Microsoft, Google, Amazon, Atlassian</b> just to name a few.
              <br />
              <br />
              You can too 
              <br />
              <br />
              See you inside,
              <br />
              Anuj 
              <br />
              Founder of Coding Shuttle
            </p>
            <div className="experience">
                <h5>Ex SDE- <img src={amazon} alt="" /></h5>
                <h5>Ex SDE- <img src={uc} alt="" /></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
