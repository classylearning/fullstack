import { useNavigate  } from 'react-router-dom';


export default function CourseItem(props) {

  const navigate = useNavigate();
  const sendCourse = ()=>{
    navigate(`/${props.where}`)
  }
  console.clear();
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6 text-white">
    <div className="rounded-lg h-64 overflow-hidden">
      <img alt="content" className="object-cover object-center h-full w-full " src={props.link}/>
    </div>
    <h2 className="text-2xl font-bold title-font  mt-5 text-white ">{props.title}</h2>
    
    <p onClick={sendCourse} className="text-indigo-500 hover:text-white inline-flex items-center mt-3">Go to course
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </p>
  </div> 

  )
}
