import React from "react";
import "./Timline.css";
import { FaBook, FaBriefcase } from "react-icons/fa";

const Timline = () => {
  return (
    <>
      <h1 className="Timeline-heading">My TimeLines</h1>
      <div className="tl-about">
        <div className="timeline">
          <div className="mainicon">
            <div className="newline"></div>
            <div className="tlicon">
              <FaBriefcase size={20} style={{ color: "rgb(255 255 3)" }} />
            </div>
            <div className="cont">
              <p class="tl-duration">2022 - present</p>
              <h5>
                Assistance System Engineer<span> - Gurgaon</span>
              </h5>
              <p className="roll">React/Java Web Developer</p>
            </div>
          </div>

          <div className="mainicon">
            <div className="newline"></div>
            <div className="tlicon">
              <FaBriefcase size={20} style={{ color: "rgb(255 255 3)" }} />
            </div>
            <div className="cont">
              <p class="tl-duration">2021 - 2022</p>
              <h5>
                Graduate Engineer Trainee<span> - Polycab India Ltd.</span>
              </h5>
              <p className="roll">Procurment & Product Planning</p>
            </div>
          </div>

          <div className="mainicon">
            <div className="newline"></div>
            <div className="tlicon">
              <FaBook size={20} style={{ color: "rgb(255 255 3)" }} />
            </div>
            <div className="cont">
              <p class="tl-duration">2017- 2021</p>
              <h5>
                B.Tech/B.E.
                <span>
                  {" "}
                  -Shri Ramswaroop Memorial College of Engineering & Management.
                </span>
              </h5>
              <p className="roll">Percentage: 75-80%</p>
            </div>
          </div>

          <div className="mainicon">
            <div className="nextline"></div>
            <div className="tlicon">
              <FaBook size={20} style={{ color: "rgb(255 255 3)" }} />
            </div>
            <div className="cont">
              <p class="tl-duration">2013 - 2015</p>
              <h5>
                HIGHER SECONDARY<span> - P. J. Inter Colleges</span>
              </h5>
              <p className="roll">Percentage: 60-65%</p>
            </div>
          </div>
          <div className="mainicon">
            <div className="tlicon">
              <FaBook size={20} style={{ color: "rgb(255 255 3)" }} />
            </div>
            <div className="cont">
              <p class="tl-duration">2011 - 2013</p>
              <h5>
                SECONDARY EDUCATION <span> - P. J. Inter Colleges</span>
              </h5>
              <p className="roll">Percentage: 80-85%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timline;
