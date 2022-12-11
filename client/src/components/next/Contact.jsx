import {React, useEffect, useState} from 'react'
import config from '../.././config'
import { initializeApp } from 'firebase/app'


export default function Contact() {

	useEffect(()=>{
		document.title="Classy Learning - Contact"
	})

	initializeApp(config);

	const [conDetail , setConDetail] = useState({
		name:"",
		email:"",
		msg:""
	})

	const handleUserData = (e)=>{
		setConDetail({...conDetail,[e.target.name]:e.target.value})
	}

	const [showSucess, setshowSucess] = useState(false)

	const sendContactData = async(e)=>{
		e.preventDefault()
		try{
			let {name,email,msg} = conDetail;
			if(conDetail.name!=="" && conDetail.email!=="" && conDetail.msg!==""){

				await fetch("https://justclassylearning-b9d93-default-rtdb.firebaseio.com/Contact.json",{
					method:"POST",
					headers:{
						"Content-Type":"Application/json"
					},
					body: JSON.stringify({
						name,
						email,
						msg
					})
				}).then(()=>{
					document.getElementById("conMsg").style.display='block';
				})
				
				
				document.getElementById("icon").click();
				setConDetail({
					name:"",
					email:"",
					msg:""
				})
				
			}
			
		}
		catch(error){
			alert(error);
			document.getElementById("tellNot").style.display='block';
		}
	}
	console.clear();

  return (
    <div className='text-white'>

<div id="tellNot " className="hidden">
<div id="alert-2" className="flex p-4 w-[50%] ml-[25%] mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Info</span>
  <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
    Error occurred. Please try again
  </div>
  <button type="button" onClick={()=>{document.getElementById("alert-2").style.display='none'}} className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
    <span className="sr-only">Close</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
</div>

<div className='hidden' id='conMsg'>
<div id="alert-3" className="flex  p-4 mb-4 w-[50%] ml-[25%] bg-green-100 rounded-lg dark:bg-green-200" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Info</span>
  <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
    Your feedback has been sent. We will Contact you shortly.
  </div>
  <button type="button" onClick={()=>{document.getElementById("alert-3").style.display='none'}} className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
	  <span className="sr-only">Close</span>
    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
</div>

<div className="grid bg-[#131e37] max-w-screen-xl mt-6 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="text-gray-400">Fill this form to be in touch 😉.</div>
	  <div id='icon'>
	  
		</div>
      <p className='md:block hidden md:pt-14 md:text-5xl font-bold'>We'd love to <br/>hear from you.</p>
		
		</div>
	</div>
	<form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input autoComplete='off' name="name" value={conDetail.name} onChange={handleUserData} id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-800 border border-gray-600"/>
		</div>
		
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input type="email"  autoComplete='off' name="email" value={conDetail.email} onChange={handleUserData} id="email"  className="w-full p-3 rounded bg-gray-800 border border-gray-600" />
		</div>

		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea name="msg" value={conDetail.msg} onChange={handleUserData} id="message" rows="3" className="w-full p-3 rounded bg-gray-800 border border-gray-600"></textarea>
		</div>
		<button onClick={sendContactData} type="submit" className="w-full text-white p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#407BFF] hover:bg-[#2652af]"><p className='text-white'>Send Message</p></button>
	</form>
</div>

    </div>
  )
}