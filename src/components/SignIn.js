import React from 'react'
import {useState, useRef,useEffect,useContext} from 'react'
import authContext from '../context/authProvider';
import {NavLink} from 'react-router-dom';
import axios from '../api/axios'
const LOGIN_URL='/auth'
function SignIn() {
    const {setAuth}=useContext(authContext);
    const userRef=useRef();
    const errRef=useRef();
    const [user,setUser]=useState('');
    const [pwd,setPwd]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const [sucess,setSuccess]=useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[]);
    useEffect(()=>{
        setErrMsg('');
    },[user,pwd]);
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post(LOGIN_URL, 
                JSON.stringify({user,pwd}),
                {
                    header:{'Content-Type':'application/json'},
                    withCredentials:true
                });
                const accessToken=response?.data?.accessToken;
                const role=response?.data?.role;
                setAuth({user,pwd,role,accessToken});
            setUser('');
        setPwd('');
        setSuccess(true);
        }catch(err){
            if(!err?.response){
                setErrMsg('No Server response');
            } else if(err.response?.status===400){
                setErrMsg('Missing Email or Password');
            } else if(err.response?.status===401){
                setErrMsg("Unauthorized");
            } else{
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
        
    }
  return (
    <div>
      <section className="bg-fuchsia-50 min-h-screen flex items-center justify-center">
        <p ref={errRef} className={errMsg? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
        {/* <!-- =====Login Container ===== --> */}
        <div className="bg-fuchsia-100 flex rounded-2xl shadow-md max-w-3xl p-5">
            {/* <!-- ===content=== --> */}
            <div className="sm:w-full px-12">
            <span className=''>
                    <NavLink to='/' className="text-fuchsia-500 py-2 mt-4 font-bold hover:text-fuchsia-700">Home</NavLink> 
                    <NavLink to='/signup' className="text-fuchsia-500 py-2 mt-4 font-bold hover:text-fuchsia-700 ml-8">Sign Up</NavLink>
                    </span>
                <h2 className="font-bold text-2xl text-fuchsia-900">Login</h2>
                <p className="text-sm mt-4 text-fuchsia-900">If you are already a member, you can login.</p>
                <form action="#" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input type="text" className="p-2 mt-8 rounded-xl border focus:outline-none" ref={userRef} name="email" id="email" onChange={(e)=>setUser(e.target.value)} placeholder="Email" required/>
                    <div className="relative">
                        <input type="password" onChange={(e)=>setPwd(e.target.value)} className="w-full p-2 mt-2 rounded-xl border focus:outline-none" name="password" id="password" placeholder="Password" required/>
                        <i className="fas fa-light fa-eye absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-300"></i>
                    </div>
                    
                    <button className="bg-fuchsia-900 rounded-xl text-white py-2 mt-4 font-bold shadow-md hover:bg-fuchsia-800 hover:scale-105 duration-300">Log in</button>
                </form>
                <div className="mt-4 grid grid-cols-3 items-center text-fuchsia-900">
                    <hr className="border-fuchsia-900" />
                    <p className="text-center text-sm">OR</p>
                    <hr className="border-fuchsia-900" />
                </div>
                <button className="bg-white border py-2 w-full rounded-xl mt-4 text-gray-700 font-bold shadow-md">
                    <i className="fas fa-brands fa-google text-sm mr-3  text-fuchsia-900"></i>
                    Login with Google</button>
                
                <p className="text-xs py-4 border-b mt-3 border-fuchsia-600 text-fuchsia-900 font-bold"> <NavLink to="/">Forgot your password!</NavLink></p>
                <div className="text-sm mt-4 flex justify-between items-center">
                    <p className="text-fuchsia-700">Don't have any account...</p>
                    <button className="py-1 text-sm px-5 bg-white border rounded-xl text-fuchsia-900 font-bold shadow-md"><NavLink to="/signup">Register</NavLink></button>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default SignIn
