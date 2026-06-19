import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
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
        
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* UPDATED TITLE STYLES */}
          <h2 className="font_family text-[rgb(0,0,0)] text-[45px] font-[700] leading-[49.5px] uppercase mb-4 font-serif">
            Our Portfolio
          </h2>
          {/* UPDATED SUBTITLE STYLES */}
          <p className="font_family text-[rgb(131,131,131)] text-[18px] leading-[24px]  max-w-2xl mx-auto">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        {/* Filters (Hardcoded) */}
        <div className="border-y border-gray-300/60 py-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 font-semibold uppercase font-mono">
            
            {/* UPDATED LINK STYLES (text-[18px] leading-[25.7143px] text-[rgb(0,0,0)]) */}
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

        {/* Masonry/Grid Gallery (Hardcoded Elements) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {/* ITEM 1: Web Design */}
          {(activeFilter === 'All' || activeFilter === 'Web Design') && (
            <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md break-inside-avoid">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={port6}
                  alt="Yellow Flyer Design"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#2eb8b8]/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-white text-[#2eb8b8] p-3 rounded-full">
                  <FaPlus size={20} />
                </div>
                <h3 className="text-white mt-4 font-semibold tracking-wider uppercase text-sm">
                  Yellow Flyer Design
                </h3>
                <p className="text-white/80 text-xs mt-1 italic">
                  Web Design
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2eb8b8] pointer-events-none"></div>
            </div>
          )}

          {/* ITEM 2: Branding */}
          {(activeFilter === 'All' || activeFilter === 'Branding') && (
            <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md break-inside-avoid">
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-200">
                <img
                  src={port7}
                  alt="Desk Calendar"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#2eb8b8]/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-white text-[#2eb8b8] p-3 rounded-full">
                  <FaPlus size={20} />
                </div>
                <h3 className="text-white mt-4 font-semibold tracking-wider uppercase text-sm">
                  Desk Calendar
                </h3>
                <p className="text-white/80 text-xs mt-1 italic">
                  Branding
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2eb8b8] pointer-events-none"></div>
            </div>
          )}

          {/* ITEM 3: Photography */}
          {(activeFilter === 'All' || activeFilter === 'Photography') && (
            <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md break-inside-avoid">
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img
                  src={port10}
                  alt="Mug Mockup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#2eb8b8]/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-white text-[#2eb8b8] p-3 rounded-full">
                  <FaPlus size={20} />
                </div>
                <h3 className="text-white mt-4 font-semibold tracking-wider uppercase text-sm">
                  Mug Mockup
                </h3>
                <p className="text-white/80 text-xs mt-1 italic">
                  Photography
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2eb8b8] pointer-events-none"></div>
            </div>
          )}

          {/* ITEM 4: Illustration */}
          {(activeFilter === 'All' || activeFilter === 'Illustration') && (
            <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md break-inside-avoid">
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-200">
                <img
                  src={port8}
                  alt="Blue Lettering Notebook"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#2eb8b8]/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-white text-[#2eb8b8] p-3 rounded-full">
                  <FaPlus size={20} />
                </div>
                <h3 className="text-white mt-4 font-semibold tracking-wider uppercase text-sm">
                  Blue Lettering Notebook
                </h3>
                <p className="text-white/80 text-xs mt-1 italic">
                  Illustration
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2eb8b8] pointer-events-none"></div>
            </div>
          )}

          {/* ITEM 5: Branding */}
          {(activeFilter === 'All' || activeFilter === 'Branding') && (
            <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md break-inside-avoid">
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img
                  src={port9}
                  alt="Logo Mockup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#2eb8b8]/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-white text-[#2eb8b8] p-3 rounded-full">
                  <FaPlus size={20} />
                </div>
                <h3 className="text-white mt-4 font-semibold tracking-wider uppercase text-sm">
                  Logo Mockup
                </h3>
                <p className="text-white/80 text-xs mt-1 italic">
                  Branding
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2eb8b8] pointer-events-none"></div>
            </div>
          )}

          {/* ITEM 6: Web Design */}
          {(activeFilter === 'All' || activeFilter === 'Web Design') && (
            <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md break-inside-avoid">
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img
                  src={port2}
                  alt="T-Shirt Design"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#2eb8b8]/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-white text-[#2eb8b8] p-3 rounded-full">
                  <FaPlus size={20} />
                </div>
                <h3 className="text-white mt-4 font-semibold tracking-wider uppercase text-sm">
                  T-Shirt Design
                </h3>
                <p className="text-white/80 text-xs mt-1 italic">
                  Web Design
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2eb8b8] pointer-events-none"></div>
            </div>
          )}

          {/* ITEM 7: Illustration */}
          {(activeFilter === 'All' || activeFilter === 'Illustration') && (
            <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md break-inside-avoid">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={port3}
                  alt="Crispy Logo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#2eb8b8]/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-white text-[#2eb8b8] p-3 rounded-full">
                  <FaPlus size={20} />
                </div>
                <h3 className="text-white mt-4 font-semibold tracking-wider uppercase text-sm">
                  Crispy Logo
                </h3>
                <p className="text-white/80 text-xs mt-1 italic">
                  Illustration
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2eb8b8] pointer-events-none"></div>
            </div>
          )}

          {/* ITEM 8: Branding */}
          {(activeFilter === 'All' || activeFilter === 'Branding') && (
            <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md break-inside-avoid">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={port4}
                  alt="Dark Business Card"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#2eb8b8]/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-white text-[#2eb8b8] p-3 rounded-full">
                  <FaPlus size={20} />
                </div>
                <h3 className="text-white mt-4 font-semibold tracking-wider uppercase text-sm">
                  Dark Business Card
                </h3>
                <p className="text-white/80 text-xs mt-1 italic">
                  Branding
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2eb8b8] pointer-events-none"></div>
            </div>
          )}

          {/* ITEM 9: Photography */}
          {(activeFilter === 'All' || activeFilter === 'Photography') && (
            <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md break-inside-avoid">
              <div className="w-full aspect-square overflow-hidden bg-gray-200">
                <img
                  src={port5}
                  alt="Sands Print"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#2eb8b8]/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-white text-[#2eb8b8] p-3 rounded-full">
                  <FaPlus size={20} />
                </div>
                <h3 className="text-white mt-4 font-semibold tracking-wider uppercase text-sm">
                  Sands Print
                </h3>
                <p className="text-white/80 text-xs mt-1 italic">
                  Photography
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2eb8b8] pointer-events-none"></div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;