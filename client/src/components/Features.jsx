import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate  } from 'react-router-dom';


export default function Features({user}) {

  const navigate = useNavigate();

const tell = ()=>{
  alert("Complete your course and send us feedback message from contact us section and we will send your certificate within 2 days after little verification process.")
  navigate("/course")
}

console.clear();
  return (
    <div>
      <section className="text-white mt-[-25%] md:mt-0 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div data-aos="zoom-in" className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Features of <span className='text-blue-600'>Classy</span> Learning</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">Feature can also mean to give special attention to something..</p>
            <div className="inline-flex justify-center items-center w-full">
              <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
              <div className="absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900">
                <svg ariaHidden="true" className="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
              </div>
            </div>
          </div>

          <div className="all grid ml-[15%] md:ml-[8%] grid-cols-1 gap-14 md:grid-cols-2 ">

            <div className="1 w-[75%]">
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-full flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#407BFF] mb-5 flex-shrink-0">
                    <lord-icon
                      src="https://cdn.lordicon.com/jefnhaqh.json"
                      trigger="hover"
                      style={{ "width": "250px", "height": "250px" }}>
                    </lord-icon>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-white text-lg title-font font-medium mb-3">LEGIT AND AFFORDABLE</h2>
                    <p className="leading-relaxed text-base">Its price is low enough that you (or most people) have enough money to buy it</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="1 w-[75%]">
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-full flex flex-col text-center items-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#407BFF] mb-5 flex-shrink-0">
                  <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/rgyftmhc.json"
    trigger="hover"
    colors="primary:#7166ee,secondary:#66a1ee"
    style={{"width":"250px","height":"250px"}}>
</lord-icon>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-white text-lg title-font font-medium mb-3">EARN <span className='text-[#ffbf01] text-3xl'>2500₹</span>  PER REFER</h2>
                    <p className="leading-relaxed text-base">Earn while study. Refer your family and friends.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="1 w-[75%]">
              <div className="p-4 md:w-full flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#407BFF] mb-5 flex-shrink-0">
                  <lord-icon
                    src="https://cdn.lordicon.com/kbtmbyzy.json"
                    trigger="hover"
                    style={{ "width": "250px", "height": "250px" }}>
                  </lord-icon>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">EASE OF ACCESS</h2>
                  <p className="leading-relaxed text-base">Most Ease of Access options are available</p>
                 
                </div>
              </div>
            </div>

            <div className="1 w-[75%]">
              <div className="p-4 md:w-full flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#407BFF] mb-5 flex-shrink-0">
                  <lord-icon
                    src="https://cdn.lordicon.com/kjkiqtxg.json"
                    trigger="hover"
                    style={{ "width": "250px", "height": "250px" }}>
                  </lord-icon>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">NEW CONTENT EVERY IN 2 WEEK</h2>
                  <p className="leading-relaxed text-base">Constantly rolling out new course and updates with a focus of scale and quality.</p>
                  
                </div>
              </div>
            </div>

          </div>
          {
            user ? 
          <button onClick={tell} data-aos="fade-up" className="flex w-fit mx-auto mt-16 text-white bg-[#407BFF] border-0 py-2 px-8 focus:outline-none hover:bg-[#2652af] rounded text-lg">Get certified</button>
          :
          <Link to="/subscribe" data-aos="fade-up" className="flex w-fit mx-auto mt-16 text-white bg-[#407BFF] border-0 py-2 px-8 focus:outline-none hover:bg-[#2652af] rounded text-lg">Get certified</Link>
        }
        </div>
      </section>
    </div>
  )
}
