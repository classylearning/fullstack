import React from 'react'

export default function Job() {

    const tellthem = ()=>{
        alert("Complete your course and send us feedback message from contact us section and we will send your certificate within 2 days after little verification process.")
  
    }

    return (
    <div>
      <p className="text-white text-center mt-[20vh] flex justify-center items-center">Send your classylearning <span className='mx-1 text-blue-600' onClick={tellthem}>certificate</span>  to us.</p>
       <a  href="mailto:job.classylearning@gmail.com">  <p className=' text-blue-600 text-center' > job.classylearning@gmail.com</p> </a>
    </div>
  )
}
