import { React, useEffect, useState } from 'react'
import config from '../../config'
import { initializeApp } from 'firebase/app'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineVerticalRight } from 'react-icons/ai'
import { useNavigate  } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { getDatabase, ref, child, get , update, } from "firebase/database";
import { Link } from 'react-router-dom'



export default function Login({user}) {


    useEffect(()=>{
        document.title="Classy Learning - Login"
    })


    initializeApp(config);
    const auth = getAuth(initializeApp(config));
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate('/home')
        }
    })

    const showLogin = (e) => {
        if (e.target.id === "loginbtn") {
            document.getElementById("signup").style.display = "block";
            document.getElementById("login").style.display = "none";
        }
        else {
            document.getElementById("signup").style.display = "none";
            document.getElementById("login").style.display = "block";
        }
    }


    const showPassword = (e) => {
        if (e.target.id === "eye") {
            document.getElementById("eye").style.display = "none";
            document.getElementById("closeeye").style.display = "block";
            document.getElementById("passwordLogin").type = "text";
        }
        else {
            document.getElementById("eye").style.display = "block";
            document.getElementById("closeeye").style.display = "none";
            document.getElementById("passwordLogin").type = "password";
        }
    }

    const upshowPassword = (e) => {
        if (e.target.id === "upeye") {
            document.getElementById("upeye").style.display = "none";
            document.getElementById("upcloseeye").style.display = "block";
            document.getElementById("uppassword").type = "text";
            document.getElementById("uppassword2").type = "text";
        }
        else {
            document.getElementById("upeye").style.display = "block";
            document.getElementById("upcloseeye").style.display = "none";
            document.getElementById("uppassword").type = "password";
            document.getElementById("uppassword2").type = "password";
        }
    }


    // sign up wala

    let ref_value = Math.random().toString(36).substring(2,7);

    const [userSignup, setsignupLogin] = useState({
        username:"",
        email: "",
        password: "",
        password2: "",
        isPaid:false,
        totalRef:0,
        Ref_code: ref_value,
        ever_ref : false,
        phone : ""
    })

    const handleSignupData = (e) => {
        setsignupLogin({ ...userSignup, [e.target.name]: e.target.value })
    }


    const senduserSignupData = async (e) => {

        e.preventDefault()
    
        try {

            let phone_no = document.getElementById("phone").value;
            var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
            if(!phone_no.match(phoneno)){            
                alert("Check your phone no");
                return false;
            }

            document.getElementById("SendSignupbtn").disable = "true";
            document.getElementById("SendSignupbtn").style.cursor = "no-drop";
            let len = userSignup.password.length;
            if ((userSignup.password === userSignup.password2) && (len >= 7)) {
                document.body.style.cursor = "wait";
                await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password).catch(()=>{
                    alert("sign up error")
                    document.getElementById("tellNot").style.display='block';
                })
                let { username ,email, password , totalRef , Ref_code , isPaid , ever_ref , phone} = userSignup;
                await fetch("https://justclassylearning-b9d93-default-rtdb.firebaseio.com/Users.json", {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                        totalRef,
                        Ref_code,
                        isPaid,
                        ever_ref,
                        phone
                    })
                }).catch(()=>{
                        document.getElementById("tellNot").style.display='block';
                    })
                    setsignupLogin({
                        name:"",
                        phone:"",
                        email: "",
                        password: "",
                        password2: ""
                    });
                    navigate("/dashboard");
            }
            else{
                alert("password not match")
            }
        }
        catch (error) {
            document.getElementById("tellNot").style.display='block';
            if(error==="FirebaseError: Firebase: Error (auth/user-not-found)."){
                document.getElementById("signuperro").innerText="This email doesn't exist ";
            }
            else if(error==="FirebaseError: Firebase: Error (auth/user-not-found)."){
                document.getElementById("signuperro").innerText="password wrong";
            }
            else{
            document.getElementById("signuperro").innerText=error;
            }
        }
        document.getElementById("SendSignupbtn").disable = "false";
        document.getElementById("SendSignupbtn").style.cursor = "pointer";
        document.body.style.cursor = "context-menu";
    }



//  login wala hai


    const [userLogin, setUserLogin] = useState({
        emailLogin: "",
        passwordLogin: ""
    });

    const handleUserLogin = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    }

    const sendUserLoginData = async (e) => {
        e.preventDefault()
        try {
            document.getElementById("BtnLogin").disable = "true";
            document.getElementById("BtnLogin").style.cursor = "no-drop";
            let len = userLogin.passwordLogin.length;
            if(len>=7){
                await signInWithEmailAndPassword(auth,userLogin.emailLogin,userLogin.passwordLogin)
                .then((res)=>{
                    navigate("/dashboard")
                })
                setUserLogin({
                    emailLogin: "",
                    passwordLogin: ""
                });
            }
        }
        catch (error) {
            alert(error)
            document.getElementById("tellNot").style.display='block';
            if(error==="FirebaseError: Firebase: Error (auth/user-not-found)."){
                alert("This email doesn't exist ")
                document.getElementById("error").innerText="This email doesn't exist ";
            }
            else{
                alert("check your email and password again .")
            }
        }
        document.getElementById("BtnLogin").disable = "false";
        document.getElementById("BtnLogin").style.cursor = "pointer";
        document.body.style.cursor = "context-menu";
    }

    console.clear();

    return (
        <div>
            



            <section id='login' className="bg-[#111827] ease-in-out duration-100 text-white">

            <div id="tellNot" className="hidden">
<div id="alert-2" className="flex p-4 w-[35%] ml-[33%] mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
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

                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white border border-gray-700 border-b-0 rounded-lg shadow md:mt-[-10vh] sm:max-w-md xl:p-0 ">

                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#182645]">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl text-white">
                                LOGIN
                            </h1>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                                    <input onChange={handleUserLogin} value={userLogin.emailLogin} name="emailLogin" autoComplete='off' type="email" id="emailLogin" className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-white bg-gray-700  placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required="" />
                                </div>
                                <div >
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                                    <div >
                                        <input value={userLogin.passwordLogin} onChange={handleUserLogin} name="passwordLogin" autoComplete='off' type="password" id="passwordLogin" placeholder="••••••••" className="text-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" required="" />
                                        <AiOutlineEye onClick={showPassword} id="eye" className=' relative left-[90%] top-[-4.5vh]' />
                                        <AiOutlineEyeInvisible onClick={showPassword} id="closeeye" className='hidden relative left-[90%] top-[-4.5vh]' />
                                    </div>
                                </div>
                                        <div>
                                        <p className='text-sm text-center text-red-600 hidden' id="error">Check your email or password</p>
                                        </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input name="email" autoComplete='off' id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700  focus:ring-primary-600 ring-offset-gray-800" required="" />
                                      
               
                                        </div>


                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className=" text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="/forget_password" className="text-sm font-medium text-primary-600 hover:underline text-primary-500">Forgot password?</Link>
                                </div>
                                <button id='BtnLogin' type="submit" onClick={sendUserLoginData} className="w-full text-white p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#407BFF] hover:bg-[#2652af] "><p className='text-white'>Login</p></button>
                                <p onClick={showLogin} id="loginbtn" className="font-bold flex text-white justify-center decoration-blue-600 text-center text-sm ">
                                    Don't have account ? <b onClick={showLogin} id="loginbtn" className=" text-primary-600 ml-2 underline decoration-blue-800 hover:underline text-white font-bold">Sign up</b>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <section id='signup' className=" hidden text-white bg-gray-900">
            <div id="tellNot" className="hidden">
<div id="alert-2" className="flex p-4 w-[35%] ml-[33%] mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
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
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full  rounded-lg shadow border md:mt-[-10vh] sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">

                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#182645]">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl text-[#407BFF]">
                                SIGN UP
                            </h1>
                            <form className="space-y-4 md:space-y-6">

                                <div >
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Name</label>
                                       <input onChange={handleSignupData} value={userSignup.username} autoComplete='off' type="text" name="username" id="username" className=" border w-full sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="jhon das" required="" />    
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone no</label>
                                         <input onChange={handleSignupData} value={userSignup.phone} id="phone" type="tel" name="phone" className=" border w-full sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder='7428730894'/>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                                    <input onChange={handleSignupData} value={userSignup.email} autoComplete='off' type="email" name="email" id="email" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input autoComplete='off' type="password" onChange={handleSignupData} value={userSignup.password} name="password" id="uppassword" placeholder="••••••••" className=" borde sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                    <AiOutlineEye onClick={upshowPassword} id="upeye" className=' relative left-[90%] top-[-4.5vh]' />
                                    <AiOutlineEyeInvisible onClick={upshowPassword} id="upcloseeye" className='hidden relative left-[90%] top-[-4.5vh]' />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">Confirm Password</label>
                                    <input autoComplete='off' type="password" onChange={handleSignupData} value={userSignup.password2} name="password2" id="uppassword2" placeholder="••••••••" className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                    <p className='text-red-600 text-center pt-2 hidden' id='signuperro'>Something wrong here</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            
                                        </div>
                                    </div>
                                     </div>
                                <button id='SendSignupbtn' onClick={senduserSignupData} className="w-full text-white p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#407BFF] hover:bg-[#2652af]"><p className='text-white'>Sign up</p></button>
                                <p onClick={showLogin} id="signupbtn" className="font-bold flex text-white justify-center decoration-blue-600 text-center text-sm ">
                                    Already have account ? <b className=" text-primary-600 ml-2 underline decoration-blue-800 hover:underline text-white font-bold">Login</b>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
