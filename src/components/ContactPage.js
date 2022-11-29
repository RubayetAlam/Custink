
import React from 'react'
import Heading from './Heading'
import Navbar from './Navbar'
import Footer from './Footer'
import Copyrights from './Copyrights'
import Contact from './Contact'
function ContactPage() {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Contact />
    </div>
      <div>
        <Footer />
      </div>
      <div>
          <Copyrights />
      </div>
    </div>
  )
}

export default ContactPage
