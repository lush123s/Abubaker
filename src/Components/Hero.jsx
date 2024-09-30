import React from 'react'
import profile from '../assets/profile-pic.png'
const Hero = ({changeColor}) => {
  return (
    <main id='home' className={`${changeColor===true?'change1':'change'} font-Outfit text-white flex flex-col items-center gap-5`}>
        <img className='hero-img w-64 mt-7' src={profile} alt="Sorry Network Issue" />
        <h1 className='hero-title1 text-5xl text-center w-[70%] font-semibold leading-[3.7rem]'><h1 className='hero-title special text-[3.7rem] font-semibold'>Hi I'm Abubaker,</h1>Your Front End Web Developer From Pakistan.</h1>
        <p className='hero-p text-center w-[60%] leading-8'>I am Front End Web Developer With 3+ years of experience in technologies like HTML,CSS,JS,TailwindCSS and ReactJS.</p>
        <div className="buttons">
        <a href="#portfolio"><div className='cursor-pointer text-lg w-44 text-center hover:scale-105 duration-500	 text-[1.5vw] font-medium px-4 py-4 bg-gradient-to-l  to-[#B923E1] from-[#DA7C25]	rounded-[50px]'>My Portfolio</div></a>
        </div>
    </main>
  )
}

export default Hero
