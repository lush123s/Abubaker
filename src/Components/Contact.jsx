import React from 'react'
import theme from '../assets/theme_pattern.svg'
import mail from '../assets/mail_icon.svg'
import call from '../assets/call_icon.svg'


const Contact = ({changeColor}) => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "98fbecce-80d8-4088-8962-91da4aed2df4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message)
        }
      };
  return (
    <main id='contact' className={`${changeColor==true?'change1':'change'} text-white font-Outfit items-center mt-20 flex p-14 flex-col gap-6 `}>
        <div className="title relative z-10 flex">
        <h1 className='h1 font-semibold text-6xl'>Contact Me</h1>
        <img className='img absolute bottom-0 top-3 right-0 -z-[1] w-44' src={theme} alt="Sorry Network Issue" />
        
        </div>
        <div className="cont flex gap-10 mt-14">
            <div className={`${changeColor===true?'':'subchange'} contact-left w-[420px] text-[#d4d4d4]`}>
                <h1 className='contact-h1 text-5xl font-semibold special2 mb-8'>Let's Work!</h1>
                <p className='cont-p  mb-8 text-lg'>Hi! I am avaliable  for new projects, so feel free to message me about anything you want me to work on.You can contact me anytime. </p>
                <div className="details">
                    <div className="det1 flex gap-3">
                    <img className='cont-img' src={mail} alt="Sorry Network Issue!" />
                    <p className=''>llush928@gmail.com</p>
                    </div>
                    <div className="det2 flex gap-3 mt-8">
                    <img className='cont-img' src={call} alt="Sorry Network Issue!" />
                    <p className=''>+92 334 5506219</p>
                    </div>
                </div>
            </div>
            <div className={`${changeColor===true?'':'subchange'} form-right `}>
                <form onSubmit={onSubmit} className='flex flex-col items-start' action="">
                    <label className=' text-xl mb-3 ' htmlFor="">Your Name</label>
                    <input className='mb-3 border-none outline-none w-96 text-lg h-14 p-6 rounded-md text-[#A0A0A0] bg-[#32323c]' type="text" placeholder='Enter Your Name'  name='name'/>
                    <label className=' text-xl mb-3 ' htmlFor="">Your Email</label>
                    <input className='mb-3 border-none outline-none w-96 text-lg h-14 p-6 rounded-md text-[#A0A0A0] bg-[#32323c]'  type="email" placeholder='Enter Your Email'  name='email'/>
                    <label className=' text-xl mb-3 ' htmlFor="">Write Your Message Here</label>
                    <textarea className='mb-3 border-none outline-none w-96 text-lg p-6 rounded-md text-[#A0A0A0] bg-[#32323c]'  name="message" rows={8} placeholder='Enter Your Message here'></textarea>
                    <button className='form-btn cursor-pointer hover:scale-105 duration-500	 text-[1.5vw] font-medium px-10 mt-2 py-4 bg-gradient-to-l  to-[#B923E1] from-[#DA7C25]	rounded-[50px]' type='submit'>Submit Now</button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Contact
