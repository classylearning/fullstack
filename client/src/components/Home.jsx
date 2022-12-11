import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Features from './Features'
import Newsletter from './Newsletter'
import Testomonial from './Testomonial'
import Aos from "aos"
import "aos/dist/aos.css"
import B from '../assets/B.gif'
import Typed from 'react-typed';

export default function Home({user}) {

  useEffect(()=>{
    let link = window.location.href;
    let getName = link.split("/")
    let name = getName[getName.length-1];
    if(name==="home"){
      document.title="Classy Learning - Home"
    }
    else{
      document.title="Classy Learning - Learn and Earn"
    }
    Aos.init({duration:2000});
  })
  console.clear();
  return (
    <>



      <div>
{/*   
        <section className="text-gray-400 ml-[3%] hidden md:block max-w-[1440px] bg-gray-900 body-font" id='homebg'>
          <div className="container mx-auto flex px-5 py-24  justify-center items-center">
            <div data-aos="fade-down" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="text-white text-center  ml-[33vw] mt-[12vh]">स्वस्तिप्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः।<br/>
गोब्राह्मणेभ्यः शुभमस्तु नित्यं लोकाः समस्ताः सुखिनो भवन्तु॥</p>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  mt-[12vh]  text-white ml-[45vh]">Before they sold outreadymade gluten
              </h1>
              <p className="mb-8 leading-relaxed text-center w-[80%] ml-[10vw] mt-[10h] text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex text-white justify-center ml-[40vw]  mt-[8vh] mb-[5vh] ">
                <Link to="/subscribe" className="relative  inline-flex items-center justify-center p-3 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#407BFF] rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#407BFF] group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">SUBSCRIBE</span>
                  <span className="relative invisible text-white">SUBSCRIBE</span>
                </Link>
              </div>
            </div>
          </div>
        </section> */}






<section className="text-gray-400 ml-[8%] md:block hidden max-w-[1440px]  bg-gray-900 body-font">
{/* <p className="text-white text-center mt-[-7vh] mr-[5vw]"> स्वस्तिप्रजाभ्यः परिपालयन्तां न्यायेन मार्गेण महीं महीशाः।<br/>
गोब्राह्मणेभ्यः शुभमस्तु नित्यं लोकाः समस्ताः सुखिनो भवन्तु॥ </p> */}

          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
            <div data-aos="fade-down" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex mx-8 flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
              
          <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/wxnxiano.json"
    trigger="morph"
    colors="primary:#1663c7,secondary:#4030e8"
    style={{"width":"14vw","height":"13vh"}}>
</lord-icon>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                <Typed
                strings={[
                    'EDUCATION IS THE MOTHER OF LEADERSHIP',
                    'EDUCATION IS THE TRANSMISSION OF CIVILIZATION',
                  ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
              </h1>
            
              <p className="mb-8 leading-relaxed">Education is a purposeful activity directed at achieving certain aims, such as transmitting knowledge or fostering skills and character traits.</p>
              <div className="flex justify-center">
        
        {

          (user && user.displayName==="pro_user") ?

          <Link to="/course" className="relative inline-flex items-center justify-center p-3 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#407BFF] rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#407BFF] group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-[#407BFF] transition-all duration-300 transform group-hover:translate-x-full ease">COURSE</span>
                  <span className="relative invisible">COURSE</span>
                </Link>
          :
          
          <Link to="/subscribe" className="relative inline-flex items-center justify-center p-3 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#407BFF] rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#407BFF] group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-[#407BFF] transition-all duration-300 transform group-hover:translate-x-full ease">SUBSCRIBE</span>
                  <span className="relative invisible">SUBSCRIBE</span>
                </Link>

        }
              </div>
            </div>

            <div id='imghome' data-aos="fade-up" className="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6">
<img  className="object-cover object-center rounded " alt="hero" src={B} />
            </div>
          </div>
        </section>







        <section className="text-gray-400 ml-[3%] md:hidden block max-w-[1440px] bg-gray-900 body-font">
          <div className="container mx-auto flex px-5 pt-8 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img  className="object-cover object-center rounded" alt="hero" src={B}  />
            </div>
            
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                <Typed
                strings={[
                    'EDUCATION IS THE MOTHER OF LEADERSHIP',
                    'EDUCATION IS THE TRANSMISSION OF CIVILIZATION',
                  ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
              </h1>
              <p className="mb-8 leading-relaxed">Education is a purposeful activity directed at achieving certain aims, such as transmitting knowledge or fostering skills and character traits.</p>
              <div className="flex justify-center">
              {

(user && user.displayName==="pro_user") ?

<Link to="/course" className="relative inline-flex items-center justify-center p-3 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#407BFF] rounded-full shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#407BFF] group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-[#407BFF] transition-all duration-300 transform group-hover:translate-x-full ease">COURSE</span>
        <span className="relative invisible">COURSE</span>
      </Link>
:

<Link to="/subscribe" className="relative inline-flex items-center justify-center p-3 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#407BFF] rounded-full shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#407BFF] group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-[#407BFF] transition-all duration-300 transform group-hover:translate-x-full ease">SUBSCRIBE</span>
        <span className="relative invisible">SUBSCRIBE</span>
      </Link>

} 
              </div>
            </div>
          </div>
        </section>

      </div>

      <Features user={user}/>
      
  <div class="container text-white px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl">6.7K +</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl">2.8K +</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl">1.7K +</h2>
        <p class="leading-relaxed">Refers</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl ">110+</h2>
        <p class="leading-relaxed">Course</p>
      </div>
    </div>
  </div>
      <Testomonial />
      <Newsletter />
    </>
  )
}
