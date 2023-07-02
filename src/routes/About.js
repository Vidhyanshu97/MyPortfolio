import React from "react";
import Navbar from "../newcomponents/Navbar";
import Footer from "../newcomponents/Footer";
import AboutPage from "../newcomponents/AboutPage";
import AbtCnt from "../newcomponents/AbtCnt";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutPage heading="ABOUT" text="1+ year of experince in working as React Web Developer"/>
      <AbtCnt/>
      <Footer />
    </div>
  );
};

export default Home;
