import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import logo from '../assets/logo.png'

export default function Navbar({user}) {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }
  const scrollLock = require('scroll-lock');

  useEffect(()=>{
    if(!nav){
      scrollLock.disablePageScroll();
    }
    else{
      scrollLock.enablePageScroll();
    }
  })

  const hideNav = ()=>{
    if(!nav){
      setNav(!nav)
    }
  }
  


  return (
    <div className={`text-white flex justify-between items-center h-20 max-w-[1440px] mx-auto px-4`}>
      {/* <h1 className='w-full text-2xl md:text-3xl font-bold text-[#407BFF]'><Link to='/'>Classy Learning</Link></h1> */}
      <img src={logo} alt="logo" className='hidden md:block w-[35%] ml-[-10%]' />
      <img src={logo} alt="logo" className=' md:hidden w-[65%] ml-[-20%]' />
      <ul className='md:flex hidden'>
        <li className='p-4 hover:text-[#2652af]'><Link to='/home'>Home</Link></li>

          <li className='p-4 hover:text-[#2652af]'><Link to='/course'>Course</Link></li>
   

        <li className='p-4 hover:text-[#2652af]'><Link to='/about'>About</Link></li>

        <li className='p-4 hover:text-[#2652af]'><Link to='/contact'>Contact</Link></li>

        { (user && user.displayName==="pro_user") ?  <li className='p-4 hover:text-[#2652af]'><Link to='/job'>Job</Link></li> : console.log("done") }

        {
          user?
          <li className='p-4 hover:text-[#2652af]'><Link to="/dashboard" >Dashboard</Link></li>
          :
          <li className='p-4 hover:text-[#2652af]'><Link to="/login" >Login</Link></li>
        }  
      </ul>

      <div className='flex md:hidden '>
        <div className='hover:text-[#2652af]'>
        {!nav ? <AiOutlineClose size={20}  onClick={handleNav}/> : <AiOutlineMenu size={20}  onClick={handleNav}/>}
        </div>
        <div className='hover:text-[#2652af]' > 
          <Link to="/dashboard"> <AiOutlineUser size={20} className="ml-3"/></Link>
          </div>
      </div>
      <div className={!nav ? "fixed left-0 top-20 w-full h-[100vh] z-50 bg-[#111827] ease-in-out duration-500 md:hidden"  : "fixed -left-[100%]"}>
        <ul className='pt-12 uppercase text-center'>
          <li onClick={hideNav} className='p-4 hover:text-[#2652af] border-b border-gray-600 cursor-pointer'><Link to='/home'>Home</Link></li>
          <li onClick={hideNav} className='p-4 hover:text-[#2652af] border-b border-gray-600 cursor-pointer'><Link to='/course'>Course</Link></li>
        {
          (user) ?
          (user.displayName)==="pro_user" ?
          <li onClick={hideNav} className='p-4 hover:text-[#2652af] border-b border-gray-600 cursor-pointer'><Link to='/job'>Job</Link></li>
          :
          console.log("done")

          : 
         <li onClick={hideNav} className='p-4 hover:text-[#2652af] border-b border-gray-600 cursor-pointer'><Link to='/subscribe'>Pricing</Link></li>
        }
   
          <li onClick={hideNav} className='p-4 hover:text-[#2652af] border-b border-gray-600 cursor-pointer'><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>

    </div>
  )
}
