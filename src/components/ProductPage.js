import React from 'react'
import Copyrights from './Copyrights'
import Footer from './Footer'
import Heading from './Heading'
import Navbar from './Navbar'
import ProductList from './ProductList'

function ProductPage() {
  return (
    <div>
      <Heading />
      <Navbar />
      <ProductList />
      <Footer />
      <Copyrights />
    </div>
  )
}

export default ProductPage
