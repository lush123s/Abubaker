import React from 'react'
import theme from '../assets/theme_pattern.svg'
import Services_Data from "../assets/services_data"
const Services = ({changeColor}) => {
  return (
  <main id='services' className={`${changeColor==true?'change1':'change'} services mt-20 gap-10 text-white font-Outfit flex items-center justify-center flex-col `}>
    <div className="title relative z-10 flex">
        <h1 className='h1 font-semibold text-6xl'>My Services</h1>
        <img className='img absolute bottom-0 top-3 right-0 -z-[1] w-44' src={theme} alt="Sorry Network Issue" />
    </div>
    <div className="services-container mt-8 grid grid-cols-3 gap-6">
       {Services_Data.map(function(item){
        return <div className={`${changeColor==true?'':'border'} service w-64 gap-9 cursor-pointer p-7 flex flex-col justify-center border-white border-2 rounded-lg border-solid m-2  hover:scale-105 duration-500 `}>
            <h1 className='service-h1 special2 font-semibold text-3xl'>{item.s_name}</h1>
            <p className='service-p  text-lg'>{item.s_desc}</p>
        </div>
       })}
    </div>
  </main>
  )
}

export default Services
