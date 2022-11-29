import React from 'react'
import Heading from './Heading'
import Navbar from './Navbar'
import Footer from './/Footer'
import Copyrights from './Copyrights'
import AboutUs from './AboutUs'
function About() {
  return (
    <div>
      <div>
      <div>
        <Heading />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <AboutUs/>
      </div>
      <div>
        <Footer />
      </div>
      <div>
          <Copyrights />
      </div>
    </div>
    </div>
  )
}

export default About
