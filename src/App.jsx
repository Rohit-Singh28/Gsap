import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Margue from './components/margue'
import About from './components/About'
import Eye from './components/Eye'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'
// import LocomotiveScroll from 'locomotive-scroll';
// import OverlappingScroll from './components/Gpt'

const App = () => {
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full min-h-screen bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Margue/>
      <About/>
      <Eye/>
      <Features/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
