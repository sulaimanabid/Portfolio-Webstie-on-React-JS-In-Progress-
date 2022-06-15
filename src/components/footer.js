import React from "react";
import { CFooter } from "@coreui/react";
import "./footer.css";
import github from "../img/github.gif";
import facebook from "../img/facebook.gif";
import linkedin from "../img/linkedin.gif";

const footer = () => {
  return (
    <div className="footer">
      <CFooter>
        <div className="github">
          <a href="https://github.com/sulaimanabid" target="_blank">
            <img className="icons" src={github} alt="github" />
          </a>
        </div>
        <div className="fb">
          <a href="https://www.facebook.com/sulaiman.abid.92/" target="_blank">
            <img className="icons" src={facebook} alt="facebook" />
          </a>
        </div>

        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/sulaiman-abid-1508931a1/"
            target="_blank"
          >
            <img className="icons" src={linkedin} alt="linkedin" />
          </a>
        </div>
      </CFooter>
    </div>
  );
};

export default footer;
