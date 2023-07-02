import React from "react";
import "./AbtCnt.css";
import { Link } from "react-router-dom";
import React1 from "../usefullFiles/react1.jpg";
import React2 from "../usefullFiles/react2.webp";

const AbtCnt = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who AM I?</h1>
        <p>
          IT professional with 1 yrs of experience as Java/SQL developer,
          React-js, JavaScript, Web frameworks etc.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} alt="ReactImg" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} alt="ReactImg" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtCnt;
