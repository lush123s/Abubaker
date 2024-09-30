import React, { useRef, useState } from 'react'
import logo from '../assets/AbubakerBlack.png'
import logo2 from '../assets/Abubaker.png'

import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import menuopen from '../assets/menu_open.svg'
import menuopen2 from '../assets/menu2_open.svg'

import menuclose from '../assets/menu_close.svg'



const Navbar = ({changeColorfun,changeColor}) => {
  const [menu, setmenu] = useState('home');

  const nav = useRef();
  function openmenu(){
  nav.current.style.right = '0';
  }
  function closemenu(){
    nav.current.style.right = '-300px';
    }
  
  return (
    <header className={`${changeColor==true?'':'change'} px-12 py-7 text-white font-Outfit`}>
        <nav className=' flex justify-between items-center'>
           {changeColor===true? <img className='logo w-36' src={logo} alt="Sorry Network Issue" />:<img className='logo w-36' src={logo2} alt="Sorry Network Issue" />}
           {changeColor==true?<img onClick={openmenu} className='nav-open' src={menuopen} alt="Sorry Network Issue" />:<img onClick={openmenu} className='nav-open' src={menuopen2} alt="Sorry Network Issue" />}
            
            <ul ref={nav} className='main flex gap-10  text-[1.7vw]'>
            <img onClick={closemenu} className='nav-close' src={menuclose} alt="Sorry Network Issue" />

              <li onClick={() => setmenu('home')} className='cursor-pointer'><a href="#home"><p className={`${menu==='home' ? 'text-pink-600' : ''}`}>Home</p></a></li>
              <li onClick={() => setmenu('about')} className='cursor-pointer'><a href="#about"><p className={`${menu==='about' ? 'text-pink-600' : ''}`}>About Me</p></a></li>
              <li onClick={function(){setmenu('services')}} className='cursor-pointer'><a href="#services"><p className={`${menu==='services'?'text-pink-600':''}`}>Services</p></a></li>
              <li onClick={function(){setmenu('portfolio')}} className='cursor-pointer'><a href="#portfolio"><p className={`${menu==='portfolio'?'text-pink-600':''}`}>Portfolio</p></a></li>
              <li onClick={function(){setmenu('contact')}} className='cursor-pointer'><a href="#contact"><p className={`${menu==='contact'?'text-pink-600':''}`}>Contact</p></a></li>
            </ul>
            {changeColor===true?<img onClick={changeColorfun} className='w-10 mr-8 moon cursor-pointer hover:scale-105 duration-300' src={moon} alt="Sorry Network Issue" />:<img onClick={changeColorfun} className='w-8 mr-8 moon cursor-pointer hover:scale-105 duration-300' src={sun} alt="Sorry Network Issue" />}
            <a className='btn' href="#contact"><div className='cursor-pointer hover:scale-105 duration-500	 text-[1.5vw] font-medium px-4 py-4 bg-gradient-to-l  to-[#B923E1] from-[#da7c25]	rounded-[50px]'>Connect With Me</div></a>
        </nav>
    </header>
  )
}

export default Navbar
