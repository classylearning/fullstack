import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom';
import {Link} from "react-router-dom"

export default function Subscribe({user}) {

  const navigate = useNavigate();

    useEffect(() => {
        if(user==="null"){
            navigate("/login")
        }
        if(user && user.displayName==="pro_user"){
            navigate("/home")
        }
        document.title="Classy Learning - Subscribe"
    });



    const checkoutHandler = async (amount) => {

    
        
        const { data: { key } } = await axios.get("https://classylearning.herokuapp.com/api/getkey")
        
        const { data: { order } } = await axios.post("https://classylearning.herokuapp.com/api/checkout", {
            amount
        })
        
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Classy Learning",
            description: "One time subscribe fee",
            order_id: order.id,
            callback_url: "https://classylearning.in/PaymentSuccess",
            prefill: {
                email: user.email
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#111827"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();

    }



  return (

      
        (user) ?

      <div className='text-white mt-[5%]'>
      



<div  className="z-[-1] md:z-0 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
        <div className="bg-[#131e37] px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 className="text-2xl leading-8 font-extrabold  sm:text-3xl sm:leading-9 text-white">
                Be a Pro
            </h3>
            <p className="mt-6 text-base leading-6 text-gray-500 text-gray-200">
                Be a pro member and access all the features. Being pro member you can access all courses and refer and Earn feature.
            </p>
            <div className="mt-8">
                <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                        What&#x27;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200">
                    </div>
                </div>
                <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 text-gray-200">
                        certification and job placement 
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 text-gray-200">
                        Per refer 2500rs
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 text-gray-200">
                        Get advanced refering strategies in your email
                        </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 text-gray-200">
                        Refer amount will be credited with 2 hours
                        </p>
                    </li>
                    
                    <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                </path>
                            </svg>
                        </div>
                        <p className="ml-3 text-sm leading-5 text-gray-700 text-gray-200">
                        New courses will be added in every 2 weeks

                        </p>
                    </li>
               
                </ul>
            </div>
           
        </div>
        <div className="py-8 px-6 text-center  bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p className="text-lg leading-6 font-bold  text-white">
                AMOUNT
            </p>
            <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-white">
                <span>
                   5000₹
                </span>
            </div>
            <p className="mt-4 text-sm leading-5">
                <span className="block font-medium text-gray-400">
                    Cashless payment
                </span>
                <span className=" inline-block font-medium  text-gray-400">
                    pay online through UPI
                </span>
            </p>
            <div className="mt-6">
                <div className="rounded-md shadow">
                    <button onClick={() => checkoutHandler(5000)} type="button" className=" hidden md:block py-2 px-4  bg-[#407BFF] hover:bg-[#2652af] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Subscribe 
                    </button>
                </div>
        </div>
    </div>
</div>
            </div>


                    <button onClick={() => checkoutHandler(5000)} type="button" className="w-[80vw] md:hidden py-2 px-4  bg-[#407BFF] hover:bg-[#2652af] text-white ml-9 mt-4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Subscribe 
                    </button>

    </div>
                    :
                    <Link to='/login'><p className="text-blue-800 text-center mt-[25vh] mb-[20vh]">Login please</p></Link>
  )
}
