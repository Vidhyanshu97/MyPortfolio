import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <ul className="location">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/blogs">MyBlogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="https://www.google.com" target="blank">FAQs</Link>
            </li>
            <li>
              <Link to="https://www.netlify.com/privacy/" target="blank">Privcy</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          {/* <h4>Follow Me</h4> */}
          
          <div className="socialMedia">
          <a href="https://github.com/Vidhyanshu97/" target="blank"><FaGithub size={20} style={{ color: "#fff" }} /></a>
          <a href="https://www.linkedin.com/in/vidhyanshu/" target="blank"><FaLinkedin size={20} style={{ color: "#fff"}}/></a>
          <a href="https://www.instagram.com/vidhyanshu.mishra" target="blank"><FaInstagram size={20} style={{ color: "#fff"}}/></a>
          <a href="https://www.facebook.com/itsvikas.mishra" target="blank"><FaFacebook size={20} style={{ color: "#fff" }}/></a>
          </div>
        </div>
        
      </div>
      <p className="social">Copyright &#169; 2023-24</p>
    </div>
  );
};

export default Footer;
