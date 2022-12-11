import React, { useEffect , useState } from 'react'
import { getAuth ,onAuthStateChanged , updateProfile } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import config from '../../config'
import { getDatabase, ref, child, get , update, } from "firebase/database";

export default function Getpayment({user}) {

    useEffect(()=>{
        document.title="Classy Learning - Get Payment"
    })

    let auth = getAuth(initializeApp(config))
    const db = getDatabase();
    const dbRef = ref(getDatabase());
   
 


    const [upi, setUpi] = useState({
        upiid:''
    })

    
    const [bank, setBank] = useState({
        accNo:'',
        accNo2:'',
        ifsc:'',
    })


    const handleUpi = (e) => {
        setUpi({ ...upi, [e.target.name]: e.target.value })
    }

    const handleBank = (e) => {
        setBank({ ...bank, [e.target.name]: e.target.value })
    }

    const sendUpiReq = async()=>{
        if(upi.upiid!=="" && upi.upiid!==" "){
                let {upiid} = upi;
                var money;
                get(child(dbRef, "Users")).then(async(snapshot) => {
                    if (snapshot.exists()) {
                      let data = snapshot.val()
                      for (const property in data) {
                        if(data[property].email===user.email){
                         money = data[property].totalRef;
                        }
                      }
                    }
                  
                await fetch("https://justclassylearning-b9d93-default-rtdb.firebaseio.com/UPI.json", {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        upiid,
                        money,
                    })
                }).then(()=>{
                alert("Request sent")
                get(child(dbRef, "Users")).then((snapshot) => {
                    if (snapshot.exists()) {
                      let data = snapshot.val()
                      let id ;
                      for (const property in data) {
                        id = property;
                        if(data[property].email===user.email){
                          update(ref(db, `Users/${id}`), {
                                totalRef: data[property].totalRef * 0
                              });
                        }
                      }
                    }
                  });
                }).catch(()=>{
                    document.getElementById("conMsg").style.display="tellNot";
                })
            });
                setUpi({
                    upiid:""
                });
            }
    }

    const sendBankReq = async()=>{
        if( bank.accNo!==bank.accNo2 ){
            alert("account no does not match")
        }
        else{
            let {accNo,ifsc} = bank;
            var bankMoney ;
            get(child(dbRef, "Users")).then(async(snapshot) => {
                if (snapshot.exists()) {
                  let data = snapshot.val()
                  for (const property in data) {
                    if(data[property].email===user.email){
                     bankMoney = data[property].totalRef;
                    }
                  }
                }
              
            await fetch("https://justclassylearning-b9d93-default-rtdb.firebaseio.com/BANK.json", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    accNo,
                    ifsc,
                    bankMoney
                })
            }).then(()=>{
                alert("Request sent")
                get(child(dbRef, "Users")).then((snapshot) => {
                    if (snapshot.exists()) {
                      let data = snapshot.val()
                      let id ;
                      for (const property in data) {
                        id = property;
                        if(data[property].email===user.email){
                          update(ref(db, `Users/${id}`), {
                                totalRef: data[property].totalRef * 0
                              });
                        }
                      }
                    }
                  });
                document.getElementById("conMsg").style.display="block";
            }).catch(()=>{
                document.getElementById("tellNot").style.display="block";
            })
        });
            setBank({
                accNo:"",
                accNo2:"",
                ifsc:""
            });
        }
    }

    const show = ()=>{
        document.getElementById("accNoId").style.display='block';
        document.getElementById("upitn").style.display='block';
        document.getElementById("accNoId2").style.display='none';
        document.getElementById("accNoId3").style.display='none';
        document.getElementById("accNoId4").style.display='none';
        document.getElementById("banktn").style.display='none';
    }
    const show2 = ()=>{
        document.getElementById("upitn").style.display='none';
        document.getElementById("accNoId").style.display='none';
        document.getElementById("accNoId2").style.display='block';
        document.getElementById("accNoId3").style.display='block';
        document.getElementById("accNoId4").style.display='block';
        document.getElementById("banktn").style.display='block';
    }
    console.clear();
  return (
    <>
<div id="tellNot" className="hidden">
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

<div className='block absolute top-[-50vh]' id='conMsg'>
<div id="alert-3" className="flex  p-4 mb-4 w-[50%] ml-[25%] bg-green-100 rounded-lg dark:bg-green-200" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Info</span>
  <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
    Your request has been recived. We will transfer money between 1-2 days.
  </div>
  <button type="button" onClick={()=>{document.getElementById("alert-3").style.display='none'}} className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
	  <span className="sr-only">Close</span>
    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
</div>

    <div className='text-white flex justify-center p-16'>


      <div className="w-full  bg-[#0f182c] max-w-sm p-4 border border-gray-600 rounded-lg shadow-md sm:p-6">
        <h5 className="mb-3 text-center text-base font-semibold md:text-xl text-[#469fff]">
            Get your payment
        </h5>
        <p className="text-sm font-normal text-center text-gray-500">Connect with one of our available wallet. Recomended UPI</p>
        <ul className="my-4 space-y-3">
            <li onClick={show}>
                <p className="flex flex-col items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span className="flex-1  ml-3 whitespace-nowrap">UPI
                    <span className="px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 hidden rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                    </span>
                <input  id="accNoId" value={upi.upiid} onChange={handleUpi} name="upiid" autoComplete='off' type="text" className="text-black bg-gray-50 hidden mt-4 border none ease-in-out duration-500 border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500" placeholder="upiid@okidfcbank" required="" />
                <button id='upitn' onClick={sendUpiReq} className="w-full hidden mt-4 text-white p-3 rounded-md text-sm font-bold tracking-wide uppercase  bg-[#407BFF] hover:bg-[#2652af]"><p className='text-white'>Send Upi Request</p></button>
                </p>
                

            </li>
            <li onClick={show2}>
                <p className="flex flex-col items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span className="flex-1 ml-3 whitespace-nowrap">BANK</span>
                <input  value={bank.accNo} onChange={handleBank} name="accNo"  id="accNoId2"  autoComplete='off' type="text" className="bg-gray-50 hidden mt-4 border none ease-in-out duration-500 border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500" placeholder="CONFIRM BANK ACCOUNT NO" required="" />
                <input  value={bank.accNo2} onChange={handleBank} name="accNo2"  id="accNoId3"  autoComplete='off' type="text" className="bg-gray-50 hidden mt-4 border none ease-in-out duration-500 border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500" placeholder="CONFIRM BANK ACCOUNT NO" required="" />
                <input value={bank.ifsc} onChange={handleBank} name="ifsc"  id="accNoId4"  autoComplete='off' type="text" className="bg-gray-50 hidden mt-4 border none ease-in-out duration-500 border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500" placeholder="IFSC CODE" required="" />
           
            <button id='banktn' onClick={sendBankReq} className="w-full hidden mt-4 text-white p-3 rounded-md text-sm font-bold tracking-wide uppercase  bg-[#407BFF] hover:bg-[#2652af]"><p className='text-white'>Send Bank Request</p></button>
                </p>
            </li>
           
        </ul>
    </div>



    </div>
    </>
  )
}
