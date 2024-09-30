import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  const [changeColor, setchangeColor] = useState(true);
  function changeColorfun(){
    if(changeColor === true){
      setchangeColor(false)
    }
    else{
      setchangeColor(true)
    }
}
  return (
    <div className={`${changeColor==true?'change1':'change'} min-h-[100vh] app bg-black`}>
      <Navbar changeColor={changeColor} changeColorfun={changeColorfun}/>
      <Hero changeColor={changeColor}  />
      <About changeColor={changeColor} />
      <Services changeColor={changeColor}/>
      <Projects changeColor={changeColor}/>
      <Contact changeColor={changeColor}/>
      <Footer changeColor={changeColor}/>
    </div>
  )
}

export default App
