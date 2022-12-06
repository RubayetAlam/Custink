import React from 'react'
import Footer from './/Footer'
import Copyrights from './Copyrights'
import Heading from './Heading'
import Navbar from './Navbar'

import ProductDetials from './ProductDetials'
function ProductCards() {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <ProductDetials/>
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

export default ProductCards
