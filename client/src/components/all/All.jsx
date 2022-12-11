import React, { useEffect , useLayoutEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom';


export default function All({user}) {
  const navigate = useNavigate();

  useLayoutEffect(()=>{
    document.title="Classy Learning - Course"

    try{
      if(user && user.displayName!=="pro_user"){
        navigate('/subscribe')
      }
    }
    catch(err){
      console.error(err)
    }
  })

  useEffect(()=>{
    document.title="Classy Learning - Course"

    try{
      if(user.displayName!=="pro_user"){
        navigate('/subscribe')
      }
    }
    catch(err){
      console.error(err)
    }
  })

    useEffect(()=>{
        setTimeout(() => {
          document.getElementById("load").style.display="none";
        }, 4000);
    
        let link = window.location.href;
        let getName = link.split("/")
        let name = getName[getName.length-1];
        document.getElementById(name).style.display="block";

        setTimeout(() => {
          document.getElementById("jobmsg").style.display='none';
        }, 12000);

    },[]) 
    
    console.clear();

  return (
<>

<div id='load' className='flex justify-center flex-col items-center mt-[25vh]'>

<script src="https://cdn.lordicon.com/qjzruarw.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/xtpmscgz.json"
    trigger="loop"
    style={{"width":"150px","height":"150px"}}>
</lord-icon>
<p className='text-white'>Hang on, Let the squiral finish her meal...</p>
      </div>

<p className='text-center text-white text-2xl mt-6' id='jobmsg'>For job mail us at job.classylearning@gmail.com and send your certificate.</p>

    <div id='Cforbeginners' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1jffCSmAYGIUFb_J2j26PdrNSyR5393Fc#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='Cppforbeginners' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1T2oKr-gK-0yBIJJvYEceaZSWpgFduyTO#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='CompleteSQLMastery' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1nv96ydqsHnawHxAwnGkg7aGfV6Uj2h5l#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='JAVAforbeginners' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1NdsaytTn_ZoU9FjncniCkmnbohzAoh8x#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='JAVASCRIPT' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=18esOASS-DOMXxf0-cWYIFjRCdrACgjE2#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='Python' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Ju79UanwUgYUZIUAo_PdU688fJQevJrP#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='NODEJS' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=19rNap3b491t1ALjW6xX6xz2amuPbd0hq#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='NODEJS2' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1LDSHvjiaHOfA4p05pxUQhxMAx3TTkLEU#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='ArtificialIntellegence' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1zQcIc5Rys9Zq1vPBcCe45rGP0xpIUNZm#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='Appdevelopment' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1aFOqOTt5OTnbCiI8IVTHJDW4NBm3CRPc#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='backenddevelopment' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1JU5D8-KikyJ2Bd-c1YLMgilehfkgVNDY#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='MONGO' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1IZKCLeX2ZlNZKeLx8a08mY1S1gi5razE#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='HACKING' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1u-8vGfx_rVZDrKOsEUpZrJ6iQw5kTU5g#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='AWS' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1YKTs4qmF3eVwVQNqcOQZGOmLfMYEseYr#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='Softwaretestingforbegginers' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1YMJNVQtyXyirrlUlLy5-MA6RpzF1Zeks#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='TimeMangement' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1h3x5LKg2BC20K4ZYvyS6jE-qlw8vgk-Z#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='Communication' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1wV3k_i7i9NATK-_E83W0bh6MI9vxQPF_#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='AdvancePresentationSkill' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1x_ARuqPCNjgV2HpvgzQvnfMWKJWSGIah#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]'></iframe>
    </div>

    <div id='DigitalMarketting' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1A9RrNgO9vnBXveoWZH04QA_XnQzDS0LI#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Entrepreneurship' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1J91L3e_cbczHVyq80-qwZqFRUyzQukfz#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Investment' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1ejNG3JJME2zkXwDujsd831BSBb81QnIX#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Politicalcomplex' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=10QP7rU0BR3b3FXcAkVa_BqyiiV_FBPCx#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>


    <div id='Projectmanagement' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1M_PD2LWDrUN6NxQjhE9ORWMzNtmVI-04#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='PurchasingManagement' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1QKM5EjOjshBIpFVvfd327trpCkniJ2JR#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='3Dmodelling' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1S4qwx2xUuCS_GSIP_mma_k6XpwCxBQIn#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Graphicdesign' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1X1xsPEhBV0l5B-yjWWgivLou-eGgwC_V#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Imageediting' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1bXuO3-vQ_Ph6UGaMAaoc3tRb_R8BKXdJ#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='InteriorDesign' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1IXnWFJG4nfIGNjBaUDK_mTsYE-HDc-vm#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='UXUserexperience' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1g7IqFH4mCPhQlQ8NFH1rRhpuWgCD2Dn0#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='CorporateFinance' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1--1SPOsFxuoznNbbGG84G1BdHIZw2VBt#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='FinancialAccounting' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1lsQzwnAWb6F2TAgxh1psBQCbntlu2YqS#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='advancemsexcel' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=13q2mRDnqG13O2IN5u5aPTfeDzZkZ6OJ-#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='tallyerp9withgst' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1hH2xl5ekFEsaZ3lPiBemugh6h5Rul1Hd#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='MindfluentialOptionstrading' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=19-YmTVcqLkL8uCanYBM8ecHYY9zcW0ak#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='UltimatePriceAction' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1aKu9XDOfsO5OCKlK6diVcijrV2CmUa7A#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='mspowerpoint' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1w-By5B_4IDVd__LsK6QEDuS-Wpuvl51w#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='English' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=11W5U1XXlNVAV9fkyYSIEORJAmsgtg2FS#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='signlanguage' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1CeMXpsNOkvxqCgMyAFZpMwEhGR4IFO5c#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='ALGEBRA' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Zsyrnf1Ud4XnNiDUababnuL4ZeH4LU-u#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='BIOLOGY' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1yDQL2Y50rT-lWynFyKXXxXo2bT65wn2w#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='CALCULUS' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1dPEyvC78NO-j2jMV66k4wGFIt6_9CljL#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='CHEMISTRY' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1glJHT2veeh9CSCKURWGdYwr5o4Yoj0bg#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='ECONOMICS' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1J5-ezjucijOUxExKelf6gkNycYrhXu0S#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Grammer' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1ByaZr9ge6lcz0rBDaCbr--gT1gy3wQA3#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Geometry' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Yzn24tqzbhmtvMbxy9hNNtkgCCPW4zgK#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='history' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Ihxmk9o5taMlkc4YadSnAEbG0dcMUc2o#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Litrature' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=13eWEv04Q8XFJVgqr1JJQr6Ea0Qx4iwan#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='logicalreasoning' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=13eWEv04Q8XFJVgqr1JJQr6Ea0Qx4iwan#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='physics' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Y9jsEQjbML3VF-jxKS9lpZkrGsKTx194#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='sociology' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Wg-LmMI7XguOt7Sl97cOwvGpD81RxVYZ#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='statistics' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Qbu8JPSwTeJSxgUbGhMY0uW-UDOV6MJT#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='trignometry' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=122xDCsaBf4-SXUfWLVPs7DQt8hIU_LqJ#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='philosophy' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1BUFETC60e8Bcw9DB30wA-XwGSx9aC8x8#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Makeup' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=138_jp-ZlRdlFjetkwihDAF3aEzvLiv0s#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='ManicureNails' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1rS5-iw6PQagpcMbGW5F7Mii3vEx6OQCD#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Skincare' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=12zPHF6c4WbHaoQPZFD3QeQO9lGJE3CzA#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Pedicure' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1yxReHrxOYQ391B5_ajd8DTqPv_v92nny#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='BASS' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1oxtqreSITUzqSp07xMQtlwGtTqcauHen#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='DRUMS' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1N8cCffjxn2IHKj9CjXHBCZe4h8HG9VpC#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='GUITAR' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1_qOtYuV6yGjxqhMQ4pxOoGLvK5rDh_Vz#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='EGUITAR' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1uL_pDRYLbRMl5qXt_rQq_VXagkhQ-Aux#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='PIANO' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1AG62ZdUZt4frqPqd-yT6E603UJguBA7J#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='SINGING' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1WutZOPBJi6_sN00vhWOC5TCV4Rcko2WS#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Astrology' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1yXYSXCN5-Xx1-6Eew0PtRyp-kIR5opQK#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Astronomy' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1PjWgkRCdBr2pTnmobiEGUcOSJboDoVoh#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Dance' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1UbXTNuCFjUGVHoqwkYhZHIDkdBxsEJdI#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='magicandhypnosis' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1JSzCHNZKD3cvYX-wIDbNwy93GDxKmTgY#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='nutrition' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1b_LmpUNBYWy_6FjmeewRqQKdxiSUUohQ#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='photography' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1zOWODSXq0NAchJVZ0DawMEtjo5malpIf#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='psychology' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=18kwwcFiZRusKbUAidPBg-FvHaLTFKYNE#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Sports' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1M0Fm9P2NXNGfdHMp5TOrGLESb498bynO#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='theater' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1dR0EfIrhXqZPfzNEmmz4XaHzoZfLDvu-#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='theology' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Rz4kO7hNWtbtEZ9oF1HhErTuR53xkAbX#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Youtuber' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1a2IO6zIPoSAoSdtngsyDPonarePmbjfx#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='ACandrefrigeratorrepair' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1wjK9ov3xXh8nXP7fuV_42cAtrZKlPrAf#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

    <div id='Carmaintainence' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1CDztcv7t2kfNFWRCE2lZe8LajrLWAliy#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>
    
    <div id='cashierandbankingteller' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1O1AA3AaG4La705uGIYPCfN8ZDP13K1U6#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>
    
    <div id='chef' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1tLVh5v7ej_OB3gHPUi0_TIw5-ezHOO6R#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>
    
    <div id='customerservice' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1RLLbCezkfn2fNqbzNJzQR2tk8UnKziDe#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>
    
    <div id='Designandsewing' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1sgy40iPFqxLeCjvFVuhlhqoX55Wgf4Kl#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>
    
    <div id='electrician' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1uXflUDYlUzikoxLbV-mJ2mMrKjqKz7Ca#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>
    
    <div id='mechanical' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=126PBRogANWbdmFcnQdbO7ftFJGtn0O6X#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>
    
    <div id='woodworking' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=126PBRogANWbdmFcnQdbO7ftFJGtn0O6X#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>
    
    <div id='barbershop' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1lzLRFQFQliiJ-DIAcP4weCOTqVn3T-aa#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>
    
    <div id='Mobilerepairing' className='text-white hidden'>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1zKK7Ey83KO8Ng_d4tVSGqxxjbwpu8FHg#grid" title='video' height="500" width="80%"  frameBorder="0" className='ml-[15%]' ></iframe>
    </div>

</>

  )
}
