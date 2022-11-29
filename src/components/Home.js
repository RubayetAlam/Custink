import React from 'react'
import Categories from './Categories'
import Features from './Features'
import Heading from './Heading'
import Navbar from './Navbar'
import ProductItems from './productItems'
import Footer from './/Footer'
import Copyrights from './Copyrights'
import Sliders from './Sliders'
function Home() {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Sliders />
      </div>
      <div>
        <Features/>
      </div>
      <div>
        <Categories/>
      </div>
      <div>
        <ProductItems />
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

export default Home
