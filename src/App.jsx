import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Hero1 from './components/Hero1'
import Mission from './components/Mission'
import Values from './components/Values'
import TeamMembers from './components/TeamMembers'
import Expertise from './components/Expertise'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Services/>
    <Hero1/>
    <Mission/>
    <Values/>
    <TeamMembers/>
    <Expertise/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default App
