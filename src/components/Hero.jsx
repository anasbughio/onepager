import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../css/hero.css";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  const goToPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % totalSlides);
  };

  return (
    <section 
      id="home" 
      className="hero relative w-full h-[100vh] lg:h-[100vh] flex items-center justify-center bg-[#2c353f] overflow-hidden"
    >
    
      <div className="absolute inset-0 opacity-10"></div>
      <button
        type="button"
        onClick={goToPreviousSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-10 hidden sm:block"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={32} />
      </button>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {activeSlide === 0 && (
          <>
            <h1 className="mb-0 text-center uppercase text-white hero-title">
              WELCOME TO <span className="text-[rgb(43,182,182)] font-bold">ONE<span className="font-bold text-white">PAGER</span></span>
            </h1>
            <p className="mx-auto mt-6 mb-10 max-w-[640px] text-center text-white hero-subtitle">
              We design and develop awesome websites and smart applications, impactful identities using the latest
            </p>
             <button
          type="button"
          className="relative mt-10 inline-block bg-[#2bb6b6] px-8 py-4 uppercase hero-btn-text">Learn More</button>
          </>
        )} 
        {activeSlide === 1 && (
          <>
            <h1 className="mb-0 text-center uppercase text-white hero-title">
              WE ARE GREAT <span className="font-bold text-white">COMPANY</span>
            </h1>
            <p className="mx-auto mt-6 mb-10 max-w-[640px] text-center text-white hero-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </p>
             <button
          type="button"
          className="relative mt-10 inline-block bg-[#2bb6b6] px-8 py-4 uppercase hero-btn-text"
        >Learn More</button>
          </>
        )}

        
        {activeSlide === 2 && (
          <>
           <h1 className="mb-0 text-center uppercase text-white hero-title">
               <span className="text-[rgb(43,182,182)] font-bold">ONE<span className="font-bold text-white">PAGER </span></span>
               IS VERY SUITABLE
            </h1>
            <p className="mx-auto mt-6 mb-10 max-w-[640px] text-center text-white hero-subtitle">
              Building modern products and experiences for growing brands and teams
            </p>
          </>
        )}
      </div>
      <button
        type="button"
        onClick={goToNextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-10 hidden sm:block"
        aria-label="Next slide"
      >
        <FaChevronRight size={32} />
      </button>

    </section>
  );
};

export default Hero;