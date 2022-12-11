import React , {useEffect , useState} from 'react'
import { useSearchParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import { getAuth ,onAuthStateChanged , updateProfile } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import config from '../config.js'
import { getDatabase, ref, child, get , update, } from "firebase/database";
import { useNavigate  } from 'react-router-dom';



const PaymentSuccess = ({user}) => {

 const [paidUser,setpaidUser] = useState(null)
  let auth = getAuth(initializeApp(config))
  const db = getDatabase();
  const dbRef = ref(getDatabase());


  useEffect(()=>{
    onAuthStateChanged(auth, (paidUser) => {
      if (paidUser){
        setpaidUser(paidUser)
        updateProfile(paidUser,{
            displayName:"pro_user"
        })
        get(child(dbRef, "Users")).then((snapshot) => {
            let data = snapshot.val()
            if (snapshot.exists()) {
              for (const property in data) {
                if(data[property].email===paidUser.email){
                  update(ref(db, `Users/${property}`), {
                        isPaid:true
                  });
                }
              }
            }
          });
      }
      })
  },[])


    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    
    const navigate = useNavigate();

    const check = async(refvalPass)=>{
        try{
            var uid;
            get(child(dbRef, "Users")).then((snapshot) => {
          if (snapshot.exists()) {
            let data = snapshot.val()
            let refValue = document.getElementById("referLogin").value;
            let refers , id ;  get(child(dbRef, "Users")).then((snapshot) => {
              let data = snapshot.val()
              if (snapshot.exists()) {
                for (const property in data) {
                  if(data[property].email===paidUser.email){
                    uid = property;
                  }
                }
              }
            });
            for (const property in data) {
              refers = data[property].Ref_code;
              id = property;
              if(refers===refValue){
                update(ref(db, `Users/${id}`), {
                      totalRef: data[property].totalRef+1
                });
                    alert("refer successfully 😁")
                    navigate("/course")
              }
            }
          }
        });
    }
    catch(error){
        alert(error)
    }
    
}


    return (
<div className='flex flex-col justify-center items-center border-gray-600 mt-[15vh]'>
          
            <input  name="referLogin" autoComplete='off' type="refer" id="referLogin" className=" border w-[30wv] border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 text-white bg-gray-700  placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="jhon1" required="" maxLength="5"/>
            <button id='BtnLogin' type="submit" onClick={check} className="w-[10wv] mt-3 text-white p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#407BFF] hover:bg-[#2652af] "><p className='text-white'>refer</p></button>


                {/* <Heading textTransform={"uppercase"} > Order Successfull</Heading>
                
                <Text>
                Reference No.{referenceNum}
            </Text> */}
<p className='text-red-700'>or</p>
                <Link  to="/course" className='text-blue-700'>Go To Course</Link>

            </div>
    )
}

export default PaymentSuccess