import React, { useState } from "react";
import Header from'./Header';
const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true)
  const toggleSinnInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return( 
   <div>
    <Header/>
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""/>
    </div>
    <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm ?"SignIn":"SignUp"}</h1>
      {!isSignInForm &&(
      <input type="text" 
      placeholder="FullName" 
      className="p-2 my-4 w-full bg-gray-500 rounded-lg"
      />)} 
      
      <input type="text" 
      placeholder="Email Address" 
      className="p-2 my-4 w-full bg-gray-500 rounded-lg"
      />
      <input type="text"
       placeholder="Email Address" 
       className="p-2 my-4 w-full bg-gray-500 rounded-lg"/>
    <button 
    className="p-4 my-6 bg-red-800 w-full rounded-lg">
      {isSignInForm ?"SignIn":"SignUp"}
      </button>
      <p className="py-4 cursor-pointer"onClick={toggleSinnInForm}>{isSignInForm ?"New to Netflix? sign up Now": "Already registerted? Sign In Now"}</p>
    </form>
    </div>
    
  )
};

export default Login;
