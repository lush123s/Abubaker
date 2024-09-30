import React from 'react'
import fiverLogo from '../assets/fiverlogo.png'
import instagramLogo from '../assets/instagram.png'
import XLogo from '../assets/twitter2.png'

const Footer = ({changeColor}) => {
  return (
    <footer className={`${changeColor===true?"":'change'} footer p-14 font-Outfit text-white `}>
        <hr />
        <div className="btm mt-8 flex items-center justify-evenly">
        <div className="footer-left">
            <p>© 2024 Abubaker.All rights reserved.</p>
        </div>
        <div className="right flex gap-6">
            <a target='_blank' href="https://www.fiverr.com/abubaker123412/custom-front-end-web-development-using-react-portfolio-web"><img className='w-8 hover:scale-110 duration-200 cursor-pointer' src={fiverLogo} alt="Sorry Network Issue!" /></a>
            <a target='_blank' href="https://www.instagram.com/abubaker_1219/"><img className='w-8 hover:scale-110 duration-200 cursor-pointer' src={instagramLogo} alt="Sorry Network Issue!" /></a>
            <a target='_blank' href="https://x.com/lushlus16726601"><img className='w-8 hover:scale-110 duration-200 cursor-pointer rounded-xl bg-white' src={XLogo} alt="Sorry Network Issue!" /></a>
        </div>
        </div>
    </footer>
  )
}

export default Footer
