import React from 'react'
import Navbar from '../newcomponents/Navbar'
import Footer from '../newcomponents/Footer'
import AboutPage from '../newcomponents/AboutPage'
import Card from '../newcomponents/Card'
import Work from '../newcomponents/Work'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <AboutPage heading="PROJECT." text="Some of my most recent work"/>
      <Work/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Home
