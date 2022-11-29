import React from 'react'
import {NavLink} from 'react-router-dom'
import Banner02 from '../assets/Banner/banner02.jpg'

const Banner = () => {
  return (
    <div>
      <div className="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `url(${Banner02})`}}>
        <div className="container px-5">
            <h1 className="text-6xl text-white mb-4 font-medium capitalize">Design your own cloths...</h1>
            <p className="text-fuchsia-500 font-medium">
            Create matching collections for special events,<br/> staff uniforms and business promotions.
            </p>
            <div className="mt-12">
                <NavLink to="#" className="bg-fuchsia-500 border border-fuchsia-500 text-white px-6 py-3 rounded-md hover:bg-transparent hover:text-fuchsia-500 transition">Shop Now</NavLink>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner
