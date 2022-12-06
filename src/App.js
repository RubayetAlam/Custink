import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import ContactPage from './components/ContactPage'
import Error from './components/Error'
import Home from './components/Home'
import ProductCards from './components/ProductCards'
import ProductPage from './components/ProductPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const App = () => {
  return (
    
      
      <Router>     
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/productpage" element={<ProductPage />} />
       <Route exact path="/productcards" element={<ProductCards />} />
       <Route exact path="/signin" element={<SignIn />} />
       <Route exact path="/signup" element={<SignUp />} />    
       <Route exact path="/contactpage" element={<ContactPage />} />    
       <Route exact path="/about" element={<About />} />    
       <Route element={<Error/>} />
       </Routes>    
      </Router>
      
      
     
  )
}

export default App