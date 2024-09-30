import React, { useState } from 'react'
import theme from '../assets/theme_pattern.svg'
import proj1 from '../assets/youtube.png'
import proj2 from '../assets/family.png'
import proj3 from '../assets/family2.png'
import proj4 from '../assets/youtube2.png'
import proj5 from '../assets/rejoice.png'
import proj6 from '../assets/rejoice2.png'
import proj7 from '../assets/personal.png'
import proj8 from '../assets/personal2.png'
import proj9 from '../assets/spotify.png'
import proj10 from '../assets/spotify2.png'
import proj11 from '../assets/bubble.png'
import proj12 from '../assets/netflix.png'
import proj13 from '../assets/netflix2.png'
import proj14 from '../assets/notes.png'
import proj15 from '../assets/todo.png'
import proj16 from '../assets/weather.png'



import arrow from '../assets/arrow_icon.svg'
import arrow2 from '../assets/arrow2_icon.svg'









const Projects = ({changeColor}) => {
  const [page, setpage] = useState(0);
  function show(){
  if(page===0){
    setpage(1)
  }else{
    setpage(0)
  }
  }
  return (
    <main id='portfolio' className={`${changeColor===true?'change1':'change'} font-Outfit text-white flex flex-col items-center mt-20 gap-6`}>
    <div className="title relative z-10 flex">
        <h1 className='h1 font-semibold text-6xl'>My Projects</h1>
        <img className='img absolute bottom-0 top-3 right-0 -z-[1] w-44' src={theme} alt="Sorry Network Issue" />
    </div>
    <div className="projects    grid grid-cols-3 gap-6 p-14">

         <a target='_blank' href='https://youutube-clonee.netlify.app/' className="proj2 cursor-pointer relative  hover:scale-110 duration-500 ">
            <img className='rounded-lg hover:opacity-0 duration-500' src={proj1} alt="Sorry Network Issue" />
            <img className='rounded-lg absolute top-0 -z-10' src={proj4} alt="Sorry Network Issue" />
          </a>
          <a target='_blank' href='https://lush123s.github.io/Famliy-Golf2/' className="proj2 cursor-pointer relative  hover:scale-110 duration-500 ">
            <img className='rounded-lg hover:opacity-0 duration-500' src={proj2} alt="Sorry Network Issue" />
            <img className='rounded-lg absolute top-0 -z-10' src={proj3} alt="Sorry Network Issue" />
          </a>
          <a target='_blank' href='https://lush123s.github.io/Rejoice2/' className="proj2 relative cursor-pointer  hover:scale-110 duration-500 ">
            <img className='rounded-lg hover:opacity-0 duration-500' src={proj5} alt="Sorry Network Issue" />
            <img className='rounded-lg absolute top-0 -z-10' src={proj6} alt="Sorry Network Issue" />
          </a>
          <a target='_blank' href='https://personalwebsite-react.netlify.app/' className="proj2 relative cursor-pointer  hover:scale-110 duration-500 ">
            <img className='rounded-lg hover:opacity-0 duration-500' src={proj7} alt="Sorry Network Issue" />
            <img className='rounded-lg absolute top-0 -z-10' src={proj8} alt="Sorry Network Issue" />
          </a>
          <div className="proj2 relative cursor-pointer  hover:scale-110 duration-500 ">
            <img className='rounded-lg hover:opacity-0 duration-500' src={proj9} alt="Sorry Network Issue" />
            <img className='rounded-lg absolute top-0 -z-10' src={proj10} alt="Sorry Network Issue" />
          </div>
          <div className="proj2 relative cursor-pointer  hover:scale-110 duration-500 ">
            <img className='rounded-lg hover:opacity-0 duration-500' src={proj12} alt="Sorry Network Issue" />
            <img className='rounded-lg absolute top-0 -z-10' src={proj13} alt="Sorry Network Issue" />
          </div>
          <a target='_blank' href='https://lush123s.github.io/bubble/' className={`${page===1?'':'hidden'} proj2 relative cursor-pointer  hover:scale-110 duration-500 `}>
            <img className='rounded-lg  duration-500' src={proj11} alt="Sorry Network Issue" />
            
          </a>
          <a target='_blank' href='https://lush123s.github.io/Notes-Taking/' className={`${page===1?'':'hidden'} proj2 relative cursor-pointer  hover:scale-110 duration-500 `}>
            <img className='rounded-lg  duration-500' src={proj14} alt="Sorry Network Issue" />
            
          </a>
          <a target='_blank' href='https://mytodo-task-manager.netlify.app/' className={`${page===1?'':'hidden'} proj2 relative cursor-pointer  hover:scale-110 duration-500 `}>
            <img className='rounded-lg  duration-500' src={proj15} alt="Sorry Network Issue" />
            
          </a>
          <a target='_blank' href='https://myweatherapp-react2.netlify.app/' className={`${page===1?'':'hidden'} proj2 relative cursor-pointer  hover:scale-110 duration-500 `}>
            <img className='rounded-lg  duration-500' src={proj16} alt="Sorry Network Issue" />
            
          </a>

         
    </div>
    <div onClick={show} className={`${changeColor==true?'':'border'} show-more flex gap-5   border-white border-solid border-2 px-6 py-3 rounded-full cursor-pointer hover:gap-7 duration-500`}>
      <p className='font-medium text-lg '>Show More</p>
      {changeColor==true?<img className='w-7 ' src={arrow} alt="Sorry Netowrk Issue!" />:<img className='w-7 ' src={arrow2} alt="Sorry Netowrk Issue!" />}
    </div>
    </main>
  )
}

export default Projects
