import React from 'react'
import theme from '../assets/theme_pattern.svg'
import profile from '../assets/Abubakerarshad.jpg'
const About = ({changeColor}) => {
  return (
    <main id='about' className={`${changeColor===true?"":'change'} bg-black py-10 px-16 mt-24 flex flex-col gap-14 items-center font-Outfit text-white`}>
        <div className="title relative z-10">
        <h1 className='h1 font-semibold text-6xl'>About Me</h1>
        <img className='img absolute bottom-0 top-3 right-0 -z-[1] w-44' src={theme} alt="Sorry Network Issue" />
        </div>
        <div className="section flex gap-20 items-center ">
            <div className="left">
                <img className='w-[180vw] rounded-md' src={profile} alt="Sorry Network Issue" />
            </div>
            <div className="right flex flex-col gap-16">
                <div className="first flex flex-col gap-3 leading-7 ">
                    <p className='font-medium text-lg'>Are you a small business or individual looking to enhance your online presence?</p>          
                    <p className='about-p text-[17px]'>I am an experienced Front End Web Developer with a lot of experience in designing and building responsive, user-friendly websites.My expertise lies in HTML, CSS, JavaScript, and React to build visually appealing and interactive websites that attract and retain customers.I have a strong understanding of modern web development practices.With a keen eye for detail and a commitment to clean, efficient code, I convert your creative ideas to reality. </p>
                    <p className='font-medium'>Let's work together to bring your vision to life. Contact me today to get started on your project!</p>
                </div>
                <div className="bottom">
                    <div className='flex items-center gap-7 mb-4 hover:scale-105 duration-300'><p className='font-semibold text-xl '>HTML & CSS </p><hr className='h-2 border-0 rounded-2xl outline-0 bg-gradient-to-l  to-[#B923E1] from-[#DA7C25]' style={{width:"50%"}}/></div>
                    <div className='flex items-center gap-7 mb-4 hover:scale-105 duration-300'><p className='font-semibold text-xl'>React JS</p> <hr className='h-2 border-0 rounded-2xl outline-0 bg-gradient-to-l  to-[#B923E1] from-[#DA7C25]' style={{width:"70%"}}/></div>
                    <div className='flex items-center gap-7 hover:scale-105 duration-300'><p className='font-semibold text-xl'>JavaScript </p><hr className='h-2 border-0 rounded-2xl outline-0 bg-gradient-to-l  to-[#B923E1] from-[#DA7C25]' style={{width:"60%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="achievements mt-10 w-[100%] flex items-center justify-evenly ">
                <div className="achievemnt1 flex items-center flex-col gap-2 hover:scale-110 duration-500">
                    <h1 className='font-semibold text-5xl special'>3+</h1>

                    <p className=' text-lg'>YEARS OF EXPERIENCE</p>
                    
                </div>
                <hr className={`${changeColor===true?'':'change3'} w-[1px] h-[80px] bg-white `}/>
                <div className="achievemnt1 flex items-center flex-col gap-2 hover:scale-110 duration-500">
                    <h1 className='font-semibold text-5xl special'>20+</h1>
                
                    <p className='text-lg'>PROJECTS</p>
                </div>
        </div>
    </main>
  )
}

export default About
