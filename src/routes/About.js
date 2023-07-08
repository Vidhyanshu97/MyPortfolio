import React from "react";
import Navbar from "../newcomponents/Navbar";
import Footer from "../newcomponents/Footer";
import AboutPage from "../newcomponents/AboutPage";
import AbtCnt from "../newcomponents/AbtCnt";
import Timline from "../newcomponents/Timline";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutPage heading="ABOUT ME" text="Hii, I am a Java/React web developer with expertise in ReactJS, JSX, Java, JSP and MySQL, I am passionate about building robust and scalable web applications using modern technologies and industry best practices. I possess strong technical skills in building RESTful APIs, integrating with third-party APIs, and utilizing databases to create data-driven applications. With excellent communication and interpersonal skills."/>
      <AbtCnt/>
      <Timline/>
      <Footer />
    </div>
  );
};

export default Home;
