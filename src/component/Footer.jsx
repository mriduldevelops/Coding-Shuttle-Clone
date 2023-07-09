import React from "react";
import logo from "./images/asset 88.svg";
import youtube from "./images/asset 89.svg";
import linkedIn from "./images/asset 90.svg";
import Instagram from "./images/asset 91.svg";
import Telegram from "./images/asset 92.svg";
import location from "./images/asset 93.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          <center>
            <h1>Skills Gets You The Job, Not Your Degree.</h1>
            <button>Apply Now</button>
          </center>
        </div>
        <div className="bottom">
          <div className="left-section">
            <img src={logo} alt="" />
            <h6>
              <i>#NeedForChange</i>
            </h6>
            
          </div>
          <div className="mid-section">            
              <h5>COMPANY</h5>
              <ul>
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Pricing & Refund Policy</li>
                <li>Contact Us</li>
              </ul>
          </div>
          <div className="right-section">
            <center>
              <h5>FOLLOW US ON</h5>
            </center>
            <div className="social-media">
              <div>
              <img src={youtube} alt="" />
              </div>
              <div>
              <img src={linkedIn} alt="" />
              </div>
              <div>
              <img src={Instagram} alt="" />
              </div>
              <div>
              <img src={Telegram} alt="" />
              </div>
            </div>
            <p>
              <img src={location} alt="" /> 255 Karan Vihar Part-2,
              &nbsp;&nbsp;&nbsp;&nbsp; Kirari, Delhi-110086
            </p>
          </div>
        </div>
        <p className="copyright">Copyright © NGU Education Pvt. Ltd.</p>
      </div>
    </>
  );
}

export default Footer;
