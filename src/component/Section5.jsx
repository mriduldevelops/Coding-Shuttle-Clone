import React from 'react'
import certificate from "./images/asset 33.png"
import badge from "./images/badge.svg"
function Section5() {
  return (
    <>
    <div className='certificate-section'>
        <div className="left">
            <div className="certificate-tag">
                <h5><img src={badge} alt="" /> TOP QUALITY CURRICULUM</h5>
            </div>
                <h1>Official and Verified Certificate of Completion</h1>
                <h4>Add the certificate to your CV or your resume or post it directly on Linkedin to enhance your professional credibility.</h4>
        </div>
        <div className="right">
          <img src={certificate} alt="" />
          </div>
    </div>
    </>
  )
}

export default Section5
