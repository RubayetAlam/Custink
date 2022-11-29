import React from 'react'
import logo from '../assets/logo.png'
import { User } from './User'
import { useState } from 'react'
import Table from './Table'
import {NavLink} from 'react-router-dom'
const Heading = () => {
    // const [query,setQuery]=useState("");
    // const keys=["type","code","link"];
    // const search=(data)=>{
    //     return data.filter((item)=>
    //     keys.some((key)=>item[key].toLowerCase().includes(query)))
    // }
    return (
    <div>
        <header className="py-6 shadow-sm bg-white">
        <div className="container flex items-center justify-around">
            {/* ============ Logo ========== */}
            <NavLink to="/">
                <img src={logo} alt="logo_image" className="w-32 h-12"/>
            </NavLink>
            {/* =======Search Bar ======= */}
            <div className="flex w-full max-w-xl relative">
                <span className="absolute left-4 top-3 text lg text-gray-400">
                    <i className="fas fa-search"></i>
                </span>
                <input type="text" className="w-full border border-indigo-500 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="search"/>
                {/* <input type="text" className="w-full border border-indigo-500 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="search" onChange={(e)=>setQuery(e.target.value)}/> */}
                <button type="button" className="bg-indigo-600 border border-indigo-500 text-white text- px-8 rounded-r-md hover:bg-slate-100 hover:text-indigo-600 transition">Search</button>
                {/* <!----- For searching -------> */}
                {/* <ul className="list">
                {
                    User.filter(user=>user.type.toLocaleLowerCase().includes(query)).map((user)=>(
                        <li key={user.id} className='listItem'>{user.type}</li>
                    ))
                }  
                </ul> */}
                {/* <br/>
                <Table data={search(User)}/> */}
            </div>
            {/*  ===Icons===  */}
            <div className="flex items-center space-x-4">
                <NavLink to="/" className="text-center text-fuchsia-600 hover:text-fuchsia-700 transition relative">
                    <div className="text-2xl">
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="text-xs leading-3">Wish List</div>
                    <span className="absolute right-1 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-fuchsia-500 text-white text-xs">8</span>
                </NavLink>
                <NavLink href="/" className="text-center text-fuchsia-600 hover:text-fuchsia-700 transition relative">
                    <div className="text-2xl">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <div className="text-xs leading-3">Shopping</div>
                    <span className="absolute right-2 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-fuchsia-500 text-white text-xs">3</span>
                </NavLink>
                <NavLink to="/signin" className="text-center text-fuchsia-600 hover:text-fuchsia-700 transition relative">
                    <div className="text-2xl">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="text-xs leading-3">Account</div>
                </NavLink>
            </div>

        </div>
    </header>
    </div>
  )
}

export default Heading