import {BrowserRouter, Routes , Route } from 'react-router-dom'
import Contact from './components/next/Contact'
import Home from './components/Home'
import About from './components/next/About'
import Navbar from './components/Navbar'
import Course from './components/next/Course'
import Footer from './components/Footer'
import Dashboard from './components/next/Dashboard'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import Login from './components/next/Login'
import { useEffect, useState } from 'react'
import { getAuth ,onAuthStateChanged} from "firebase/auth";
import { initializeApp } from 'firebase/app'
import config from './config'
import Subscribe from './components/Subscribe'
import Forget from './components/next/Forget'
import Getpayment from './components/next/Getpayment'
import All from './components/all/All'
import PaymentSuccess from "./components/PaymentSuccess";
import Privacy from './components/next/Privacy'
import Terms from './components/next/Terms'
import Job from './components/next/Job'
import Refund from './components/next/Refund'
import Shipping from './components/next/Shipping'


defineElement(lottie.loadAnimation);

export default function App() {

  const [user,setUser] = useState(null)
  let auth = getAuth(initializeApp(config))
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user)setUser(user)
      })
  },[])
  console.clear();
  return (
   <>
   <BrowserRouter>
   <Navbar user={user}/>
   <Routes>
    <Route path='/' element={<Home user={user}/>}/>
    <Route path='/home' element={<Home user={user}/>}/>
    <Route path='/subscribe' element={<Subscribe user={user}/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/privacy' element={<Privacy/>} />
    <Route path='/termsandconditions' element={<Terms/>} />
    <Route path='/course' element={<Course user={user}/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/dashboard' element={<Dashboard user={user}/>} />
    <Route path='/login' element={<Login user={user}/>} />
    <Route path='/forget_password' element={ <Forget/>} />
    <Route path='/get_payment' element={<Getpayment user={user} />}/>
    <Route path='/PaymentSuccess' element={<PaymentSuccess user={user}/>}/>
    <Route path='/job' element={<Job user={user}/>}/>
    <Route path='/refund' element={ <Refund/> }/>
    <Route path='/shipping' element={ <Shipping/> }/>

    <Route path='/Cforbeginners' element={<All user={user}/>}/>
    <Route path='/Cppforbeginners' element={<All user={user}/>}/>
    <Route path='/CompleteSQLMastery' element={<All user={user}/>}/>
    <Route path='/JAVAforbeginners' element={<All user={user}/>}/>
    <Route path='/JAVASCRIPT' element={<All user={user}/>}/>
    <Route path='/Python' element={<All user={user}/>}/>
    <Route path='/NODEJS' element={<All user={user}/>}/>
    <Route path='/NODEJS2' element={<All user={user}/>}/>
    <Route path='/ArtificialIntellegence' element={<All user={user}/>}/>
    <Route path='/Appdevelopment' element={<All user={user}/>}/>
    <Route path='/backenddevelopment' element={<All user={user}/>}/>
    <Route path='/MONGO' element={<All user={user}/>}/>
    <Route path='/HACKING' element={<All user={user}/>}/>
    <Route path='/AWS' element={<All user={user}/>}/>
    <Route path='/Softwaretestingforbegginers' element={<All user={user}/>}/>

    <Route path='/Communication' element={<All user={user}/>}/>
    <Route path='/AdvancePresentationSkill' element={<All user={user}/>}/>
    <Route path='/TimeMangement' element={<All user={user}/>}/>
    <Route path='/DigitalMarketting' element={<All user={user}/>}/>
    <Route path='/Entrepreneurship' element={<All user={user}/>}/>
    <Route path='/Humanresources' element={<All user={user}/>}/>
    <Route path='/Investment' element={<All user={user}/>}/>
    <Route path='/Politicalcomplex' element={<All user={user}/>}/>
    <Route path='/Projectmanagement' element={<All user={user}/>}/>
    <Route path='/PurchasingManagement' element={<All user={user}/>}/>
    <Route path='/Sales' element={<All user={user}/>}/>
    <Route path='/Drawingandpainting' element={<All user={user}/>}/>
    <Route path='/3Dmodelling' element={<All user={user}/>}/>
    <Route path='/Graphicdesign' element={<All user={user}/>}/>
    <Route path='/Imageediting' element={<All user={user}/>}/>
    <Route path='/InteriorDesign' element={<All user={user}/>}/>
    <Route path='/UXUserexperience' element={<All user={user}/>}/>
    <Route path='/videoediting' element={<All user={user}/>}/>
    <Route path='/CorporateFinance' element={<All user={user}/>}/>
    <Route path='/FinancialAccounting' element={<All user={user}/>}/>
    <Route path='/advancemsexcel' element={<All user={user}/>}/>
    <Route path='/mspowerpoint' element={<All user={user}/>}/>
    <Route path='/tAll user={user}yerp9withgst' element={<All user={user}/>}/>
    <Route path='/MindfluentialOptionstrading' element={<All user={user}/>}/>
    <Route path='/UltimatePriceAction' element={<All user={user}/>}/>
    <Route path='/English' element={<All user={user}/>}/>
    <Route path='/signlanguage' element={<All user={user}/>}/>
    <Route path='/ALGEBRA' element={<All user={user}/>}/>
    <Route path='/BIOLOGY' element={<All user={user}/>}/>
    <Route path='/CALCULUS' element={<All user={user}/>}/>
    <Route path='/CHEMISTRY' element={<All user={user}/>}/>
    <Route path='/ECONOMICS' element={<All user={user}/>}/>
    <Route path='/GEOPRAPHY' element={<All user={user}/>}/>
    <Route path='/Grammer' element={<All user={user}/>}/>
    <Route path='/Geometry' element={<All user={user}/>}/>
    <Route path='/history' element={<All user={user}/>}/>
    <Route path='/Litrature' element={<All user={user}/>}/>
    <Route path='/logicalreasoning' element={<All user={user}/>}/>
    <Route path='/physics' element={<All user={user}/>}/>
    <Route path='/sociology' element={<All user={user}/>}/>
    <Route path='/statistics' element={<All user={user}/>}/>
    <Route path='/trignometry' element={<All user={user}/>}/>
    <Route path='/philosophy' element={<All user={user}/>}/>
    
    <Route path='/Makeup' element={<All user={user}/>}/>
    <Route path='/ManicureNails' element={<All user={user}/>}/>
    <Route path='/Skincare' element={<All user={user}/>}/>
    <Route path='/Pedicure' element={<All user={user}/>}/>

    <Route path='/BASS' element={<All user={user}/>}/>
    <Route path='/DRUMS' element={<All user={user}/>}/>
    <Route path='/GUITAR' element={<All user={user}/>}/>
    <Route path='/EGUITAR' element={<All user={user}/>}/>
    <Route path='/PIANO' element={<All user={user}/>}/>
    <Route path='/SINGING' element={<All user={user}/>}/>

    <Route path='/Astrology' element={<All user={user}/>}/>
    <Route path='/Astronomy' element={<All user={user}/>}/>
    <Route path='/Dance' element={<All user={user}/>}/>
    <Route path='/magicandhypnosis' element={<All user={user}/>}/>
    <Route path='/nutrition' element={<All user={user}/>}/>
    <Route path='/photography' element={<All user={user}/>}/>
    <Route path='/psychology' element={<All user={user}/>}/>
    <Route path='/Sports' element={<All user={user}/>}/>
    <Route path='/theater' element={<All user={user}/>}/>
    <Route path='/theology' element={<All user={user}/>}/>
    <Route path='/Youtuber' element={<All user={user}/>}/>

    <Route path='/ACandrefrigeratorrepair' element={<All user={user}/>}/>
    <Route path='/Carmaintainence' element={<All user={user}/>}/>
    <Route path='/cashierandbankingteller' element={<All user={user}/>}/>
    <Route path='/chef' element={<All user={user}/>}/>
    <Route path='/customerservice' element={<All user={user}/>}/>
    <Route path='/Designandsewing' element={<All user={user}/>}/>
    <Route path='/electrician' element={<All user={user}/>}/>
    <Route path='/mechanical' element={<All user={user}/>}/>
    <Route path='/woodworking' element={<All user={user}/>}/>
    <Route path='/barbershop' element={<All user={user}/>}/>
    <Route path='/Mobilerepairing' element={<All user={user}/>}/>

    <Route path="/paymentsuccess" element={<PaymentSuccess />} />
   </Routes>
   <Footer/>
   <footer className=' text-center text-white mb-4'>&copy; Copyright 2022 CLASSY LEARNING</footer>
   </BrowserRouter>
   </>
  )
}














// machine learning and data science = https://drive.google.com/drive/folders/1MCUmQrHY6SbSTmUQOOZ8IJEKvfNtSWbz?usp=sharing


