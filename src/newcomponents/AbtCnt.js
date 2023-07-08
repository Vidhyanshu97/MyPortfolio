import React from "react";
import "./AbtCnt.css";

const AbtCnt = () => {
  return (
    <>
      <h1 className="skills-heading">MY SKILLS</h1>
      <div className="about">
        <div className="left">
          <div className="maincontainer">
            <div className="elmname">
              <p>HTML5/JSX: <span>80%</span></p>
            </div>
            <div className="container">
              <div className="skill html">80%</div>
            </div>
          </div>
          <div className="maincontainer">
            <div className="elmname">
              <p>JAVASCRIPT: <span>70%</span></p>
            </div>
            <div className="container">
              <div className="skill js">70%</div>
            </div>
          </div>
          <div className="maincontainer">
            <div className="elmname">
              <p>REACT JS: <span>75%</span></p>
            </div>
            <div className="container">
              <div className="skill rjs">75%</div>
            </div>
          </div>
          <div className="maincontainer">
            <div className="elmname">
              <p>MYSQL: <span>60%</span></p>
            </div>
            <div className="container">
              <div className="skill mysql">60%</div>
            </div>
          </div>
        </div>
        <div className="right">
        <div className="maincontainer">
            <div className="elmname">
              <p>CSS3: <span>75%</span></p>
            </div>
            <div className="container">
              <div className="skill rjs">75%</div>
            </div>
          </div>
          <div className="maincontainer">
            <div className="elmname">
              <p>CORE JAVA: <span>65%</span></p>
            </div>
            <div className="container">
              <div className="skill java">65%</div>
            </div>
          </div>
          <div className="maincontainer">
            <div className="elmname">
              <p>BOOTSTRAP: <span>70%</span></p>
            </div>
            <div className="container">
              <div className="skill js">70%</div>
            </div>
          </div>
          <div className="maincontainer">
            <div className="elmname">
              <p>PYTHON: <span>65%</span></p>
            </div>
            <div className="container">
              <div className="skill rjs">65%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbtCnt;
