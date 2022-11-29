import React from 'react'
import Tshirt from '../assets/Categories/t_shirt.jpg'
import Bag from '../assets/Categories/bag.jpeg'
import Cap from '../assets/Categories/cap.jpg'
import Hoodies from '../assets/Categories/hoodies.jpg'
import Sportswear from '../assets/Categories/sportswear.jpg'
import whoodies from '../assets/Categories/w_hoodies.jpg'
import {NavLink} from 'react-router-dom'
const Categories = () => {
  return (
    <div>
      <div className="container pl-16 py-6">
        <h2 className="text-3xl font-medium uppercase text-fuchsia-900 mb-6">Customization List</h2>
        <div className="grid grid-cols-3 gap-3">
            {/* <!-- ===1st col category=== --> */}
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Tshirt} alt="category_img" className="w-full" />
                <NavLink to="/productcards" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-20">T-Shirt</NavLink>
            </div>
            {/* <!-- ===2nd col category=== --> */}
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Hoodies} alt="category_img" className="w-full" />
                <NavLink href="/productcards" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-20">Hoodies</NavLink>
            </div>
            {/* <!-- ===3rd col category=== --> */}
            <div className="relative rounded-sm overflow-hidden group">
                <img src={whoodies} alt="category_img" className="w-full" />
                <NavLink to="/productcards" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-20">Women Hoodies</NavLink>
            </div>
            {/* <!-- ===1st col category=== --> */}
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Sportswear} alt="category_img" className="w-full" />
                <NavLink href="/productcards" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-20">Shoprtswear</NavLink>
            </div>
            {/* <!-- ===2nd col category=== --> */}
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Bag} alt="category_img" className="w-full" />
                <NavLink to="/productcards" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-20 contain">Bag</NavLink>
            </div>
            {/* <!-- ===3rd col category=== --> */}
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Cap} alt="category_img" className="w-full" />
                <navLink to="/productcards" className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-20">Cap</navLink>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Categories
