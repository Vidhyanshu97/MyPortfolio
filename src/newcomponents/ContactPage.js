import "./ContactPage.css";
import {
  FaBuilding,
  FaFacebook,
  FaGithub,
  FaGlobeAsia,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMapMarked,
  FaPhone,
} from "react-icons/fa";

import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="ctcpg">
        <h1>GET IN TOUCH</h1>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">
              <FaMapMarked
                size={20}
                style={{ color: "rgb(255 255 3)", marginTop: "1rem" }}
              />
              <span>Location:</span>
            </div>
            <p>Gurgaon, India</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">
              <FaMailBulk
                size={20}
                style={{ color: "rgb(255 255 3)", marginTop: "1rem" }}
              />
              <span>Email:</span>
            </div>
            <p>vidhyanshumishra377@gmail.com</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">
              <FaPhone
                size={20}
                style={{ color: "rgb(255 255 3)", marginTop: "1rem" }}
              />
              <span>Phone:</span>
            </div>
            <p>+91-9651648641</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">
              <FaBuilding
                size={20}
                style={{ color: "rgb(255 255 3)", marginTop: "1rem" }}
              />
              <span>Work:</span>
            </div>
            <p>Tata Consultancy Services, Gurgaon</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">
              <FaGlobeAsia
                size={20}
                style={{ color: "rgb(255 255 3)", marginTop: "1rem" }}
              />
              <span>Language:</span>
            </div>
            <p>English, Hindi</p>
          </div>
        </div>
        <div className="socialMedia">
          <a href="https://github.com/Vidhyanshu97/" target="blank"><FaGithub size={20} style={{ color: "#fff" }} /></a>
          <a href="https://www.linkedin.com/in/vidhyanshu/" target="blank"><FaLinkedin size={20} style={{ color: "#fff"}}/></a>
          <a href="https://www.instagram.com/vidhyanshu.mishra" target="blank"><FaInstagram size={20} style={{ color: "#fff"}}/></a>
          <a href="https://www.facebook.com/itsvikas.mishra" target="blank"><FaFacebook size={20} style={{ color: "#fff" }}/></a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
