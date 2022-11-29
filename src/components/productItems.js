import React from 'react'
import Product01 from '../assets/Product/product01.jpg'
import Product02 from '../assets/Product/product02.jpg'
import Product03 from '../assets/Product/product03.jpg'
import Product04 from '../assets/Product/product04.jpg'
import {NavLink} from 'react-router-dom'

const productItems = () => {
  return (
    <div>
      <div className="container pb-16 pl-16">
        <div className="text-2xl uppercase font-medium mb-6 text-fuchsia-900">Our Best seeling Product</div>
        <div className="grid grid-cols-4 gap-3">
        {/* <!-- ===1st product=== --> */}
        <div className="bg-white shadow rounded overflow-hidden">
            {/* <!-- ===product image === --> */}
            <div className="relative">
                <img src={Product01}alt="product" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2">
                    <NavLink to="/" className="text-white text-lg w-9 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center hover:bg-fuchsia-900 transition">
                        <i className="fas fa-search"></i>
                    </NavLink>
                    <NavLink href="/" className="text-white text-lg w-9 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center hover:bg-fuchsia-900 transition">
                        <i className="fas fa-heart"></i>
                    </NavLink>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <navLink to="/productcards">
                    <h4 className="uppercase font-medium text-xl mb-2 text-fuchsia-500 hover:text-fuchsia-900 transition">T-shirt</h4>
                </navLink>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-sm text-fuchsia-500 font-semibold">$12.50</p>
                    <p className="text-sm text-gray-400 line-through">$15.50</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                    <div className="text-xs text-gray-400 ml-3">(142)</div>
                </div>
            </div>
            <NavLink to="/productcards" className="block w-full py-1 text-white bg-fuchsia-500 border border-fuchsia-500 rounded-b hover:bg-transparent hover:text-fuchsia-500">Add to card</NavLink>
        </div>

        {/* <!-- ===2nd product=== --> */}
        <div className="bg-white shadow rounded overflow-hidden">
            {/* <!-- ===product image === --> */}
            <div className="relative">
                <img src={Product02} alt="product" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2">
                    <NavLink to="/" className="text-white text-lg w-9 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center hover:bg-fuchsia-900 transition">
                        <i className="fas fa-search"></i>
                    </NavLink>
                    <NavLink to="/" className="text-white text-lg w-9 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center hover:bg-fuchsia-900 transition">
                        <i className="fas fa-heart"></i>
                    </NavLink>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <NavLink to="/productcards">
                    <h4 className="uppercase font-medium text-xl mb-2 text-fuchsia-500 hover:text-fuchsia-900 transition">T-shirt</h4>
                </NavLink>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-sm text-fuchsia-500 font-semibold">$12.50</p>
                    <p className="text-sm text-gray-400 line-through">$15.50</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                    <div className="text-xs text-gray-400 ml-3">(142)</div>
                </div>
            </div>
            <NavLink to="/" className="block w-full py-1 text-white bg-fuchsia-500 border border-fuchsia-500 rounded-b hover:bg-transparent hover:text-fuchsia-500">Add to card</NavLink>
        </div>

        {/* <!-- ===3rd product=== --> */}
        <div className="bg-white shadow rounded overflow-hidden">
            {/* <!-- ===product image === --> */}
            <div className="relative">
                <img src={Product03} alt="product" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2">
                    <NavLink to="/" className="text-white text-lg w-9 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center hover:bg-fuchsia-900 transition">
                        <i className="fas fa-search"></i>
                    </NavLink>
                    <NavLink to="/" className="text-white text-lg w-9 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center hover:bg-fuchsia-900 transition">
                        <i className="fas fa-heart"></i>
                    </NavLink>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <NavLink to="/productcards">
                    <h4 className="uppercase font-medium text-xl mb-2 text-fuchsia-500 hover:text-fuchsia-900 transition">T-shirt</h4>
                </NavLink>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-sm text-fuchsia-500 font-semibold">$12.50</p>
                    <p className="text-sm text-gray-400 line-through">$15.50</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                    <div className="text-xs text-gray-400 ml-3">(142)</div>
                </div>
            </div>
            <NavLink to="/productcards" className="block w-full py-1 text-white bg-fuchsia-500 border border-fuchsia-500 rounded-b hover:bg-transparent hover:text-fuchsia-500">Add to card</NavLink>
        </div>
        {/* <!-- ===4th product=== --> */}
        <div className="bg-white shadow rounded overflow-hidden">
            {/* <!-- ===product image === --> */}
            <div className="relative">
                <img src={Product04} alt="product" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2">
                    <NavLink to="/" className="text-white text-lg w-9 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center hover:bg-fuchsia-900 transition">
                        <i className="fas fa-search"></i>
                    </NavLink>
                    <NavLink to="/" className="text-white text-lg w-9 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center hover:bg-fuchsia-900 transition">
                        <i className="fas fa-heart"></i>
                    </NavLink>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <NavLink to="/productcards">
                    <h4 className="uppercase font-medium text-xl mb-2 text-fuchsia-500 hover:text-fuchsia-900 transition">T-shirt</h4>
                </NavLink>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-sm text-fuchsia-500 font-semibold">$12.50</p>
                    <p className="text-sm text-gray-400 line-through">$15.50</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                    <div className="text-xs text-gray-400 ml-3">(142)</div>
                </div>
            </div>
            <NavLink to="/productcards" className="block w-full py-1 text-white bg-fuchsia-500 border border-fuchsia-500 rounded-b hover:bg-transparent hover:text-fuchsia-500">Add to card</NavLink>
        </div>
    </div>
    </div> 
    </div>
  )
}

export default productItems
