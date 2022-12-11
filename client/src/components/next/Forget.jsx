import React , {useEffect} from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function Forget() {

  
  useEffect(()=>{
    document.title="Classy Learning - Forget"
  })
    
const auth = getAuth();

const sendLink = ()=>{

    const email = document.getElementById("email").value;
    sendPasswordResetEmail(auth, email)
    .then(() => {
        document.getElementById("tell").innerText="Password link has been sent"
    })
    .catch((error) => {
      alert(error)
    });
    
}
console.clear();
  return (
    <div className='flex justify-center items-center'>
      <div className='w-fit border rounded-lg border-gray-500 h-full p-4'>
          <p className='text-white text-center my-6'>Enter your email </p>
          <input autoComplete='off' type="email" name="email" id="email" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gamil.com" required="" />
          <button className='text-white text-center w-full bg-blue-600 p-2 mt-4 rounded-lg' onClick={sendLink}>send</button>
      </div>
    </div>
  )
}
