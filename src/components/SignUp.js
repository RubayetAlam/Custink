import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function SignUp() {
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      });
     
      const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      })
     
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }
     
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
     
          switch (name) {
            case "username":
              if (!value) {
                stateObj[name] = "Please enter First name.";
              }
              break;
              case "lname":
                if (!value) {
                  stateObj[name] = "Please enter Last name.";
                }
                break;
       
            case "password":
              if (!value) {
                stateObj[name] = "Please enter Password.";
              } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
              } else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
              }
              break;
     
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (input.password && value !== input.password) {
                stateObj[name] = "Password and Confirm Password does not match.";
              }
              break;
     
            default:
              break;
          }
     
          return stateObj;
        });
      }
    return (
    <div>
      <section className="bg-fuchsia-50 min-h-screen flex items-center justify-center">
        {/* <!-- =====Login Container ===== --> */}
        <div className="bg-fuchsia-100 flex rounded-2xl shadow-md max-w-3xl p-5">
            {/* <!-- ===content=== --> */}
            <div className="sm:w-full px-12">
                <span className=''>
                    <NavLink to='/' className="text-fuchsia-500 py-2 mt-4 font-bold hover:text-fuchsia-700">Home</NavLink> 
                    <NavLink to='/signin' className="text-fuchsia-500 py-2 mt-4 font-bold hover:text-fuchsia-700 ml-8">Sign In</NavLink>
                    </span>
                <h2 className="font-bold text-2xl text-fuchsia-900">Create your account</h2>
                <p className="text-sm mt-2 text-fuchsia-400">If you are a new member, you can register here.</p>
                {/* <!-- ===From=== --> */}
                <form action="#" className="flex flex-col mt-4">
                    {/* <!-- 1st row --> */}
                    <div className="grid grid-cols-2 gap-2">
                        <div className="mt-4 flex flex-col">
                            <label for="fname" className="text-xs mb-1 ml-1 text-fuchsia-800">First Name</label>
                            <input type="text" className="p-2 rounded-xl border text-sm focus:outline-none" name="username" id="fname" placeholder="Enter your first name..." value={input.username} onChange={onInputChange} onBlur={validateInput}/>
                            {error.username && <span className='err'>{error.username}</span>}
                        </div>
                        <div className="mt-4 flex flex-col">
                            <label for="lname" className="text-xs mb-1 ml-1 text-fuchsia-800">Last Name</label>
                            <input type="text" className="p-2 rounded-xl border text-sm focus:outline-none" name="lname" id="lname" placeholder="Enter your last name..." value={input.lname} onChange={onInputChange} onBlur={validateInput}/>
                            {error.lname && <span className='err'>{error.lname}</span>}
                        </div>
                    </div>
                    {/* <!-- 2nd row --> */}
                    <div className="grid grid-cols-1 gap-2">
                        <div className="mt-4 flex flex-col">
                            <label for="email" className="text-xs mb-1 ml-1 text-fuchsia-800">Email</label>
                            <input type="text" className="p-2 rounded-xl border text-sm focus:outline-none" name="email" id="email" placeholder="Enter your email address..." />
                        </div>
                    </div>
                    {/* <!-- 3rd row --> */}
                    <div className="grid grid-cols-2 gap-2">
                        <div className="mt-4 flex flex-col">
                            <label for="password" className="text-xs mb-1 ml-1 text-fuchsia-800">Passwrod</label>
                            <input type="password" className="p-2 rounded-xl border text-sm focus:outline-none" name="password" id="password" placeholder="Enter your password..." value={input.password} onChange={onInputChange} onBlur={validateInput}/>
                            {error.password && <span className='err'>{error.password}</span>}
                        </div>
                        <div className="mt-4 flex flex-col">
                            <label for="confirmPassword" className="text-xs mb-1 ml-1 text-fuchsia-800">Confirm password</label>
                            <input type="password" className="p-2 rounded-xl border text-sm focus:outline-none" name="confirmPassword" id="confirmPassword" placeholder="confirm password..." value={input.confirmPassword} onChange={onInputChange} onBlur={validateInput}/>
                            {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                        </div>
                    </div>
                    {/* <!-- 4th row --> */}
                    <div className="grid grid-cols-2 gap-2">
                        <div className="mt-4 flex flex-col">
                            <label for="age" className="text-xs mb-1 ml-1 text-fuchsia-800">Age</label>
                            <input type="number" className="p-2 rounded-xl border text-sm focus:outline-none" name="age" id="age" placeholder="Enter your age..." />
                        </div>
                        <div className="mt-4 flex flex-col">
                            <label for="gender" className="text-xs mb-1 ml-1 text-fuchsia-800">Gender</label>
                            <select name="gender" id="gender" className="p-2 rounded-xl border text-sm focus:outline-none font-semibold">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Not interested</option>
                            </select>
                        </div>
                    </div>
                    <button className="bg-fuchsia-800 rounded-xl text-white py-2 mt-4 shadow-md font-bold hover:bg-fuchsia-700 hover:scale-105 duration-300">Sign up</button>
                </form>

                <div className="mt-4 grid grid-cols-3 items-center text-fuchsia-900">
                    <hr className="border-fuchsia-900" />
                    <p className="text-center text-sm">OR</p>
                    <hr className="border-fuchsia-900" />
                </div>
                <button className="bg-white border py-2 w-full rounded-xl mt-4 text-fuchsia-800 font-semibold shadow-md">
                    <i className="fas fa-brands fa-google text-sm mr-3 text-fuchsia-900"></i>
                    Connect with Google</button>
                
                <div className="mt-6">
                    <hr className="border-fuchsia-800" />
                </div>
                <div className="text-sm mt-4 flex justify-between items-center">
                    <p className="text-fuchsia-700">Already have an account!!!</p>
                    <button className="py-1 text-sm px-5 bg-white border rounded-xl text-fuchsia-900 font-bold shadow-md"><NavLink to="/signin">Login</NavLink></button>
                </div>
            </div>
        </div> 
    </section>
    </div>
  )
}

export default SignUp
