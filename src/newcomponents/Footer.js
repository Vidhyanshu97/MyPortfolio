import React from "react";
import "./Footer.css";
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", margin: "0.6rem" }} />
            <div>
              <p>Sector 15 Part-1</p>
              <p>Gurgaon, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", margin: "0.6rem", marginBottom: "0" }} />
              +91-9651648641
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", margin: "0.6rem", marginBottom: "0"}} />
              vidhyanshumishra2@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corrupti dicta fuga cumque a doloremque quod magnam nihil cum fugit.</p>
            <div className="social">
            <FaFacebook size={30} style={{ color: "#fff", margin: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", margin: "1rem" }} />
            <FaInstagram size={30} style={{ color: "#fff", margin: "1rem" }} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
