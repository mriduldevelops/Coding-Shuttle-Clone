import React from "react";
import amazon from "./images/amazon.webp";
import adobe from "./images/adobe.webp";
import atlassian from "./images/atlassian.webp";
import paytm from "./images/paytm.webp";
import microsoft from "./images/microsoft.webp";
import oracle from "./images/oracle.webp";
import Heading from "./Heading";
const companiesLogo = [amazon, adobe, paytm, atlassian, microsoft, oracle];
export default function Section2() {
  return (
    <div className="companies-section">
      <Heading
        h1="Top Tech Companies"
        span="Hire Our Students"
        color="#007bff"
      />
      <div className="companies">
        {companiesLogo.map((logo) => (
          <img src={logo} alt="company-logo" />
        ))}
        <h3>+100 More</h3>
      </div>
    </div>
  );
}
