import React, { useEffect, useState } from 'react'
import img from '../../assets/dashboard.png'
import { useNavigate  } from 'react-router-dom';
import config from '../../config'
import { initializeApp } from 'firebase/app'
import { getAuth, sendEmailVerification  } from "firebase/auth"
import { getDatabase, ref, child, get } from "firebase/database";


export default function Dashboard({user}) {

  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name:"",
    tot_ref: "",
    isPaid: "",
    refcode:"",
    total_earning:0
})

  useEffect(()=>{
    document.title="Classy Learning - Dashboard"
    document.body.style.cursor="context-menu"

    if(user ){

    if(!user.emailVerified){
      sendEmailVerification(user)
      .then(()=>{
        console.log("mail send")
      })
      .catch((error)=>{
        alert("verify your email")
      })
      document.getElementById("welcomeuser").innerText=`verify your email address ${user.email} check you spam folder`
      document.getElementById("welcomep1").innerText=""
      document.getElementById("welcomep2").innerText="verify your email"
      document.getElementById("welcomep3").innerText="verify your email";
    }
    else{
      const dbRef = ref(getDatabase());
      var whole_ref ;
      var dashuser;
      var dashref;
      var dashPaid;
      var dashcode;
      get(child(dbRef, "Users")).then((snapshot) => {
      if (snapshot.exists()) {
          let data = snapshot.val()
          for (const property in data) {
            if(data[property].email===user.email){
              document.getElementById("welcomeuser").innerText=data[property].username
              dashuser=data[property].username;
              dashref=data[property].totalRef;
              dashPaid=data[property].isPaid;
              whole_ref = data[property].totalRef;
              dashcode = data[property].Ref_code;
            }
            }
          }
      });

      get(child(dbRef, "Referral")).then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val()
             setAdmin({
              name : dashuser,
              tot_ref : dashref,
              isPaid : dashPaid,
              refcode : dashcode,
              total_earning: whole_ref*data.amount,
             })
      }
      });
  }
}

  },[]);


  const showCode = ()=>{
    const dbRef = ref(getDatabase());
    get(child(dbRef, "Users")).then((snapshot) => {
      if (snapshot.exists()) {
          let data = snapshot.val()
          for (const property in data) {
            if(data[property].email===user.email){
              if(data[property].isPaid){
                document.getElementById("code").innerHTML=`${data[property].Ref_code} <br/>Refer code`
              }else{
                document.getElementById("code").innerHTML="Subscribe<br/>for code"
                setTimeout(() => {
                  document.getElementById("code").innerHTML="click to<br/>subscribe"
                  document.getElementById("code").addEventListener("click",()=>{
                    navigate("/subscribe")
                  })
                }, 1000);
              }
            }
            }
          }
      });
  }

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  },[])

  const auth = getAuth(initializeApp(config));
  const userlogout = ()=>{
    auth.signOut();
    navigate('/')
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  const getMoney = (e)=>{
    if(admin.tot_ref>=5){
      navigate("/get_payment")
    }else{
      document.getElementById("gm").style.cursor="not-allowed"
      document.getElementById("wmsg").innerText="You must refer to minimum 5 people only";
      setTimeout(() => {
        document.getElementById("wmsg").innerText="Withdraw";
      }, 4000);
    }
  }
  console.clear();
  return (
    
    <>
    { 

   (user) ? 
    <div className="max-w-[1240px] bg-[#131e37]  mt-14  px-8 py-12 mx-auto rounded-xl md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100 text-white">
       
       <div className='md:flex md:justify-between md:relative hidden md:top-[-8vh] md:items-center '>


        <div id='gm' >
        <p onClick={getMoney} className='flex p-1  items-center justify-center border bg-[#407BFF] h-15 w-fit rounded-md '>
      <p id="wmsg">Withdraw Money </p>
      <lord-icon
    src="https://cdn.lordicon.com/pimvysaa.json"
    trigger="hover"
    style={{"width":"45px","height":"45px"}}>
</lord-icon>
        </p>

        </div>


        <div>
       {/* <p className='w-fit flex items-center text-white ml-3 hover:bg-[#2652af] bg-[#407BFF] rounded-md font-medium my-8 mx-auto pl-3 pt-1'>EDIT <lord-icon src="https://cdn.lordicon.com/alzqexpi.json" trigger="hover"style={{"width":"40px","height":"40px"}}></lord-icon></p> */}
       <p onClick={userlogout} className='w-fit p-4 text-center flex items-center text-white ml-3 hover:bg-[#2652af] bg-[#407BFF] rounded-md font-medium my-8 mx-auto'>Logout</p>
        </div>

       </div>

       <div className='flex w-[70vw] mt-[-5%] justify-between'>
        
       <div>
       <h1 className='text-3xl text-white font-bold ' id='welcomeuser'>"</h1>
       <p id='welcomep1' className='mt-4'>You'vd done an amazing job this week! <br/> Keep it up and improve!</p>


        <div className='flex gap-8 mt-14'>
           <div className='bg-[#407BFF] h-24 w-24 rounded-md '><p className='text-center mt-6' id='welcomep2'> {admin.tot_ref} <br/>  Referral </p></div>
           <div className='bg-[#407BFF] h-24 w-24 rounded-md '><p className='text-center mt-6' id='welcomep3'>₹ {admin.total_earning}  <br/>Total earning</p></div>
           <div onClick={showCode} className='bg-[#407BFF] h-24 w-24 hover:bg-[#2652af] rounded-md '><p className='text-center mt-6 ' id='code' > ••••• <br/>Refer code</p></div>
        </div>

        <div className='md:hidden flex justify-between'>
       <p onClick={getMoney} className='w-fit relative top-[5vh] text-white  hover:bg-[#2652af] bg-[#407BFF] rounded-md font-medium  p-3 '>Withdraw</p>
       <p onClick={userlogout} className='w-fit relative mr-2 top-[5vh] text-white  hover:bg-[#2652af] bg-[#407BFF] rounded-md font-medium  p-3 '>Logout</p>
        </div>

       </div>

        <div>
            <img src={img} className="h-60 w-50 mr-[15vw] hidden md:block" alt="dashboard" />
        </div>


       </div>


    <br />
<br />
    <hr />

    
    </div>




    :
    navigate("/login")

    }

  </>
  )
}
