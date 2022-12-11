import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import {Link} from "react-router-dom"

const Footer = () => {

  console.clear();

  return (
    <div id='footer' className='max-w-[1440px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#407BFF] text-center md:text-left'><Link to="/">Classy learning</Link></h1>
        <p className='py-4 text-center md:text-left'>Education is both the act of teaching knowledge to others and the act of receiving knowledge from someone else. Education also refers to the knowledge received through schooling or instruction and to the institution of teaching as a whole.</p>
        <div className='flex  justify-evenly md:justify-between md:w-[40%] lg:w-[50%] md:ml-12 my-6'>
          <a href="https://www.instagram.com/classylearning.in/" target="_blank">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/Classylearning1?t=hRhtPMXUneOxkFPP4kyETA&s=08" target="_blank">
            <FaTwitterSquare size={30} />
          </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-[#407BFF]'><Link to="/course">Course</Link></h6>
        <ul>
            <li className='py-2 text-sm'><Link to="course#PROGRAMMINGLANGUAGE">Programming</Link></li>
            <li className='py-2 text-sm'><Link to="/course#BUSINESS">Marketing</Link></li>
            <li className='py-2 text-sm'><Link to="/course#STOCKMARKET">Stock market</Link></li>
            <li className='py-2 text-sm'><Link to="/course#Graphicdesigner">Graphic designer</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#407BFF]'>Support</h6>
        <ul>
            <li className='py-2 text-sm'><Link to="/subscribe">Pricing</Link></li>
            <li className='py-2 text-sm'><Link to="/shipping">Shipping</Link></li>
            <li className='py-2 text-sm'><Link to="/refund">Refund & Cancellation  </Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#407BFF]'>Company</h6>
        <ul>
            <li className='py-2 text-sm'><Link to="about">About</Link></li>
            <li className='py-2 text-sm'><Link to="privacy">Privacy</Link></li>
            <li className='py-2 text-sm'><Link to="termsandconditions">Terms and conditions</Link></li>
        </ul>
    </div>
      </div>
     </div>
  );
};

export default Footer;