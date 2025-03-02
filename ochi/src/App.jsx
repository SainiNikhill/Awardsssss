import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage';
import Marque from './components/Marque';
import About from './components/About';
import Play from './components/Play';
import Featured from './components/Featured';
import Bottomcard from './components/Bottomcard';
import Footer from './components/Footer';
import LocomotiveScroll from "locomotive-scroll";
import Featured2 from './components/Featured2';
import Hello from './components/Hello';



const App = () => {
  

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-full bg-white text-white">
      <Navbar />
      <Landingpage/>
      <Marque/>
      <About/>
      <Play/>
      <Featured2/>
      <Bottomcard/>
      <Hello/>
      <Footer/>
     

    </div>
  );
}

export default App