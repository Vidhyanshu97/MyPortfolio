import "./HomePageStyles.css";
import './AbtCnt.css';
import IntoImg from "../usefullFiles/pet.jpg";
import MyImg from "../usefullFiles/myphoto.jpg"
import React from "react";
import { Link } from "react-router-dom";
import DownloadCV from "../usefullFiles/Vidhyanshu.pdf"
import TypeWriterCode from "./TypeWriterCode";

const HomePage = () => {
  const downloadFileURL =(url)=>{
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  }

  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntoImg" />
      </div>
      <div className="content">
        <div className="about">
          <div className="left">
            <img src={MyImg} alt="MyImg" />
          </div>
          <div className="right">
            <h1 className="main-heading">Hi, I am <span className="name"><TypeWriterCode data={"Vidhyanshu Mishra."}/></span></h1>
          </div>
        </div>
        <h1>React Web Developer</h1>
        <p>1+ year of experince in working as React Web Developer. Currently, I am Working at<span className="name"> Tata Consultancy Services (TCS) </span> as a System Engineer.</p>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <button className="btn-light" onClick={()=>{downloadFileURL(DownloadCV)}}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
