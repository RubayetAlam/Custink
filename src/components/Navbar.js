import React from 'react';
import print_logo from '../assets/Navbar_logo/print_logo.png'
import embroidary_logo from '../assets/Navbar_logo/embroidary_logo.jpg'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        <nav className="bg-fuchsia-500">
        <div className="container flex">
            <div className="flex items-center font-medium justify-between flex-grow pl-12 cursor-pointer ">
            <NavLink exact to="/" activeClassName="text-gray-200 hover:text-white transition capitalize">Home</NavLink>
            <div className="relative group flex items-center space-x-6 py-4 px-8">
                <NavLink exact to="/productpage" activeClassName="text-gray-200 hover:text-white transition capitalize">Create design</NavLink>
                    {/* <!-- ===Sub-Navbar=== --> */}
                    <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-800 divide-dashed hidden group-hover:block">
                        <NavLink exact to="/" activeClassName="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                            <img src={print_logo} alt="print_t_shirt_logo" className="h-5 w-5 object-contain" />
                            <span className="ml-3 text-gray-600 text-sm">Print</span>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                        <img src={embroidary_logo} alt="embriodary_t_shirt_logo" className="h-5 w-5 object-contain" />
                        <span className="ml-3 text-gray-600 text-sm">Embroidary</span>
                        </NavLink>
                    </div>
                {/* <!-- ===Sub-Navbar End=== --> */}
            </div>
            <div className="relative group flex items-center space-x-6 py-4 px-8">
                <NavLink exact to="/productpage" activeClassName="text-gray-200 hover:text-white transition capitalize"> Products</NavLink>
                {/* <!-- ===Sub-Navbar=== --> */}
                <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-800 divide-dashed hidden group-hover:block">
                    <NavLink exact to="/" activeClassName="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                        <img src={print_logo} alt="print_t_shirt_logo" className="h-5 w-5 object-contain" />
                        <span className="ml-2 text-gray-600 text-sm">Cloths</span>
                    </NavLink>
                    <NavLink exact to="/" activeClassName="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                        <img src={embroidary_logo} alt="embriodary_t_shirt_logo" className="h-5 w-5 object-contain" />
                        <span className="ml-2 text-gray-600 text-sm">Accessories</span> 
                    </NavLink>
                    <NavLink exact to="/" activeClassName="flex items-center px-6 py-3 hover:bg-gray-200 transition">
                        <img src={embroidary_logo} alt="embriodary_t_shirt_logo" className="h-5 w-5 object-contain" />
                        <span className="ml-2 text-gray-600 text-sm">Cards</span> 
                    </NavLink>
                </div>
                {/* <!-- ===Sub-Navbar End=== --> */}
            </div>
            <NavLink exact to="/productpage" activeClassName="text-gray-200 hover:text-white transition capitalize">Gifts & Occasions</NavLink>
            <NavLink exact to="/productpage" activeClassName="text-gray-200 hover:text-white transition capitalize">business</NavLink>
            <NavLink exact to="/productpage" activeClassName="text-gray-200 hover:text-white transition capitalize">Popular</NavLink>
            <NavLink exact to="/about" activeClassName="text-gray-200 hover:text-white transition capitalize">About Us</NavLink>

        </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar