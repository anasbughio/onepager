import { useState } from 'react';
import port2 from "../assets/port2.jpg";
import port3 from "../assets/port3.jpg";
import port4 from "../assets/port4.jpg";
import port5 from "../assets/port5.jpg";
import port6 from "../assets/port6.jpg";
import port7 from "../assets/port11.jpg";
import port8 from "../assets/Port8.jpg";
import port9 from "../assets/port9.jpg";
import port10 from "../assets/port10.jpg";
import "../css/hero.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section 
      id="portfolio" 
      className="py-24 bg-[#f8f9fa] relative bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font_family text-[rgb(0,0,0)] text-[45px] font-[700] leading-[49.5px] uppercase mb-4 font-serif">
            Our Portfolio
          </h2>
          <p className="font_family text-[rgb(131,131,131)] text-[18px] leading-[24px]  max-w-2xl mx-auto">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="border-y border-gray-300/60 py-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 font-semibold uppercase font-mono">
            
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-6 py-2 text-[18px] leading-[25.7143px] ${
                activeFilter === 'All' ? 'bg-[#2eb8b8] text-white -skew-x-[20deg]' : 'text-[rgb(0,0,0)] hover:text-[#2eb8b8] hover:bg-gray-100'
              }`}
            >
              <span className={activeFilter === 'All' ? 'skew-x-[20deg] inline-block' : ''}>All</span>
            </button>

            <button
              onClick={() => setActiveFilter('Web Design')}
              className={`px-6 py-2 text-[18px] leading-[25.7143px] ${
                activeFilter === 'Web Design' ? 'bg-[#2eb8b8] text-white -skew-x-[20deg]' : 'text-[rgb(0,0,0)] hover:text-[#2eb8b8] hover:bg-gray-100'
              }`}
            >
              <span className={`font_family ${activeFilter === 'Web Design' ? 'skew-x-[20deg] inline-block' : ''}`}>Web Design</span>
            </button>

            <button
              onClick={() => setActiveFilter('Photography')}
              className={`px-6 py-2 text-[18px] leading-[25.7143px] ${
                activeFilter === 'Photography' ? 'bg-[#2eb8b8] text-white -skew-x-[20deg]' : 'text-[rgb(0,0,0)] hover:text-[#2eb8b8] hover:bg-gray-100'
              }`}
            >
              <span className={`font_family ${activeFilter === 'Photography' ? 'skew-x-[20deg] inline-block' : ''}`}>Photography</span>
            </button>

            <button
              onClick={() => setActiveFilter('Illustration')}
              className={`px-6 py-2 text-[18px] leading-[25.7143px] ${
                activeFilter === 'Illustration' ? 'bg-[#2eb8b8] text-white -skew-x-[20deg]' : 'text-[rgb(0,0,0)] hover:text-[#2eb8b8] hover:bg-gray-100'
              }`}
            >
              <span className={`font_family ${activeFilter === 'Illustration' ? 'skew-x-[20deg] inline-block' : ''}`}>Illustration</span>
            </button>

            <button
              onClick={() => setActiveFilter('Branding')}
              className={`px-6 py-2 text-[18px] leading-[25.7143px] ${
                activeFilter === 'Branding' ? 'bg-[#2eb8b8] text-white -skew-x-[20deg]' : 'text-[rgb(0,0,0)] hover:text-[#2eb8b8] hover:bg-gray-100'
              }`}
            >
              <span className={`font_family ${activeFilter === 'Branding' ? 'skew-x-[20deg] inline-block' : ''}`}>Branding</span>
            </button>

          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {(activeFilter === 'All' || activeFilter === 'Web Design') && (
            <div className="relative overflow-hidden bg-white shadow-sm break-inside-avoid">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img src={port6} alt="Yellow Flyer Design" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )}

          {(activeFilter === 'All' || activeFilter === 'Branding') && (
            <div className="relative overflow-hidden bg-white shadow-sm break-inside-avoid">
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-200">
                <img src={port7} alt="Desk Calendar" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )}

          {(activeFilter === 'All' || activeFilter === 'Photography') && (
            <div className="relative overflow-hidden bg-white shadow-sm break-inside-avoid">
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img src={port10} alt="Mug Mockup" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )}

          {(activeFilter === 'All' || activeFilter === 'Illustration') && (
            <div className="relative overflow-hidden bg-white shadow-sm break-inside-avoid">
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-200">
                <img src={port8} alt="Blue Lettering Notebook" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )}

          {(activeFilter === 'All' || activeFilter === 'Branding') && (
            <div className="relative overflow-hidden bg-white shadow-sm break-inside-avoid">
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img src={port9} alt="Logo Mockup" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )}

          {(activeFilter === 'All' || activeFilter === 'Web Design') && (
            <div className="relative overflow-hidden bg-white shadow-sm break-inside-avoid">
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img src={port2} alt="T-Shirt Design" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )}

          {(activeFilter === 'All' || activeFilter === 'Illustration') && (
            <div className="relative overflow-hidden bg-white shadow-sm break-inside-avoid">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img src={port3} alt="Crispy Logo" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )}

          {(activeFilter === 'All' || activeFilter === 'Branding') && (
            <div className="relative overflow-hidden bg-white shadow-sm break-inside-avoid">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img src={port4} alt="Dark Business Card" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )}

          {(activeFilter === 'All' || activeFilter === 'Photography') && (
            <div className="relative overflow-hidden bg-white shadow-sm break-inside-avoid">
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img src={port5} alt="Sands Print" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;