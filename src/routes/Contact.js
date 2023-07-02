import React from 'react'
import Navbar from '../newcomponents/Navbar'
import Footer from '../newcomponents/Footer'
import AboutPage from '../newcomponents/AboutPage'
import Form from '../newcomponents/Form';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <AboutPage heading="CONTACT" text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
