import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="relative text-white overflow-x-hidden">
      {/* Background Video (Global) */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/background.mp4" className="z-2" type="video/mp4" />
          {/* <source src="https://cdn.pixabay.com/video/2020/04/18/36503-427607440_large.mp4" type="video/mp4"/> */}
        </video>
        <div className="absolute inset-0 bg-gray-900/40 "></div>
      </div>

      {/* Main Content Above Video */}
      <div className="relative z-10 ">
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
