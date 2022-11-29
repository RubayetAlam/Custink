import React from 'react'
import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer className="bg-white pt-16 pb-12 pl-8 border-t border-fuchsia-200">
        <div className="container grid grid-cols-4">
            {/* <!-- ===footer text === --> */}
            <div className="col-span-1 space-y-8">
                <img src={logo} alt="logo" className="w-20" />
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Consequuntur, aperiam?</p>
                <div className="flex space-x-6">
                    <NavLink to="https://www.facebook.com" className="text-gray-400 hover:text-gray-500">
                        <i className="fab fa-facebook-f"></i>
                    </NavLink>
                    <NavLink to="https://www.instagram.com" className="text-gray-400 hover:text-gray-500">
                        <i className="fab fa-instagram"></i>
                    </NavLink>
                    <NavLink to="https://www.twiteer.com" className="text-gray-400 hover:text-gray-500">
                        <i className="fab fa-twitter"></i>
                    </NavLink>
                    <NavLink to="https://www.linkedin.com" className="text-gray-400 hover:text-gray-500">
                        <i className="fab fa-linkedin-in"></i>
                    </NavLink>
                </div>
            </div>
                {/* <!-- ===footer links=== --> */}
            <div className="col-span-2 grid grid-cols-2 gap-8">
                <div className="grid gap-4">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">The Company</h3>
                    <div className="mt-4 space-y-4">
                        <NavLink to="/about" className="text-base text-gray-400 hover:text-gray-900 block">About Us</NavLink>
                        <NavLink to="/about" className="text-base text-gray-400 hover:text-gray-900 block">Bulk Order</NavLink>
                        <NavLink to="/about" className="text-base text-gray-400 hover:text-gray-900 block">Privacy</NavLink>
                        <NavLink to="/about" className="text-base text-gray-400 hover:text-gray-900 block">Terms & Condition</NavLink>
                        <NavLink to="/about" className="text-base text-gray-400 hover:text-gray-900 block">Press</NavLink>
                    </div>
                </div>
                {/* <!-- === Services=== --> */}
                <div className="grid gap-4">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Service</h3>
                    <div className="mt-4 space-y-4">
                        <NavLink to="/about" className="text-base text-gray-400 hover:text-gray-900 block">Your Order</NavLink>
                        <NavLink to="/about" className="text-base text-gray-400 hover:text-gray-900 block">Help</NavLink>
                        <NavLink to="/contact" className="text-base text-gray-400 hover:text-gray-900 block">Contact</NavLink>
                        <NavLink to="/about" className="text-base text-gray-400 hover:text-gray-900 block">Address</NavLink>
                        <navLink to="/about" className="text-base text-gray-400 hover:text-gray-900 block">About Us</navLink>
                    </div>
                </div>
            </div>
            {/* <!-- === Footer link ends=== --> */}
            {/* <!-- ===Message Option on --> */}
            <div className="grid grid-cols-1 col-span-1 gap-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Send us mail</h3>
                <textarea name="stext" id="stext" className="border border-fuchsia-300 bg-fuchsia-200 h-28 w-70 focus:outline-none text-fuchsia-900 p-2 font-medium rounded-md shadow-md" placeholder="Write something here..."></textarea>
                <input type="email" className="border border-fuchsia-300 bg-fuchsia-200 w-70 mt-0 p-2 text-fuchsia-900 font-semibold focus:outline-none rounded-md shadow-md" placeholder="Email Addess..." />
                <input type="submit" name="submit" id="email" value="Send" className="w-40 border border-orange-700 bg-orange-600 text-white focus:outline-none cursor-pointer ml-40 text-center p-2 rounded-md" />

            </div>
            
        </div>

    </footer>  
    </div>
  )
}

export default Footer
