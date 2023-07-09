import React,{useState} from "react";
import logo from "./images/logo.svg"
import google from "./images/asset 0.png"
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleClick(){
    isExpanded ? setIsExpanded(false): setIsExpanded(true);
  }
  return (
    <div className="header">
      {/* panel */}
      <div className="panel">
        <center>
          🎉 Use the coupon code FIRST500 🎉 Offer valid for first 500 seats
          only
        </center>
      </div>
      {/* navbar */}
      <nav>
        <div className="nav-items">

        <div className="logo">
            <img src={logo} alt="Coding Shuttle" />
        </div>
        <div className="links">
            <ul>
                <li><a href="/">Testimonials</a></li>
                <li><a href="/">Curriculum</a></li>
                <li><a href="/">FAQs</a></li>
            </ul>
        </div>
        <div className="enroll"><button>Enroll Now</button></div>
        <div className="login"><button><img src={google} alt="G" /> Login with Google</button></div>
        <div className="menu-icon hidden" onClick={handleClick}>
          <MenuIcon sx={{ fontSize: 34 }}/>
        </div>
        </div>
        {isExpanded &&
        <div className="hidden toggled-nav">
            <ul>
                <li><a href="/">Testimonials</a></li>
                <li><a href="/">Curriculum</a></li>
                <li><a href="/">FAQs</a></li>
            </ul>    
            <hr />  
            <div className="google-button">
              <button>
                <img src={google} alt="" />
              </button>
            </div>
        </div>
        }
      </nav>
    </div>
  );
}

export default Header;
