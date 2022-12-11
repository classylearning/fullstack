import React,{useEffect} from 'react'

export default function About() {

  // console.clear();
  useEffect(()=>{
    document.title="Classy Learning - About"
  })
  console.clear();

  return (
    <div className='text-white'>
      
<p className='w-[80%] ml-14 md:ml-28 mt-14'>
<p> <span className='text-blue-600 text-3xl'>w</span>e are happy you want to know something more about our site So, basically, nowadays people are more dependent on online products and services that's why we also, take forward a step to help you.Our first wish is to provide you with a better solution to solve your problem. </p>If you have additional questions or require more information about our About Us Page, do not hesitate to contact us through email at <a className='text-blue-600' href="mailto:contact.classylearning.in@gmail.com">mail </a> There are millions of websites created every day, also, there is much fake content spread on the internet.So, Our main goal is to provide you with 100% Original and Safe content that provides you a great and better experience on the world wide web.We mainly focus on our service so and improving it regularly to provide a better user experience to all users.Basically, we focus on the education niche so, our main priority is to search for new content and present it in front of you to learn something new.
</p>


    </div>
  )
}