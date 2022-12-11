import React from 'react'
export default function Newsletter() {

  
const done = ()=>{
    alert("done")
}
    return (
        <div className='w-full py-6 bg-[#182645] md:py-16 text-white'>
            <div className="max-w-[1440] mx-auto md:flex justify-evenly">
                <div>
                    <h1 className='md:text-4xl sm:text-2xl text-xl text-center font-bold py-2'>Want more course <span className='text-[#407BFF]'>suggest</span> your course here ?</h1>
                    <p className='text-center'>Get your suggest course within 2 weeks.</p>
                </div>
                <div className="inp flex">
                    <div>
                    <input type="text"  id='text' name='text' placeholder='Course Name' className='ml-8 mt-5 font-bold text-black p-4 rounded-md' />
                    <button onClick={done} id='clearbtn' type="button" className='text-white text-center ml-3 hover:bg-[#2652af] p-4 bg-[#407BFF] md:w-[100px] w-[68px] rounded-md font-medium mt-5 mx-auto '>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


// bg-[#181a1b]