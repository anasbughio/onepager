import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 py-2 md:py-3 min-[1170px]:py-5 z-50 w-full bg-white shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 min-[1170px]:h-20">
          
          <div className="flex-shrink-0 flex items-center cursor-pointer w-32 sm:w-36 md:w-40 min-[1170px]:w-auto min-[1170px]:h-full">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-full h-auto object-contain max-h-10 min-[1170px]:max-h-16" 
            />
          </div>

          <nav className="hidden min-[1170px]:flex items-center space-x-1 lg:space-x-2 text-sm tracking-wide text-gray-800 font-serif">
            
            <a href="#home" onClick={() => handleLinkClick('home')} className="font_family relative px-6 py-2 group text-[18px]">
              {activeLink === 'home' && <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'home' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>HOME</span>
            </a>

            <a href="#portfolio" onClick={() => handleLinkClick('portfolio')} className="font_family relative px-6 py-2 group text-[18px]">
              {activeLink === 'portfolio' && <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'portfolio' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>PORTFOLIO</span>
            </a>
            
            <a href="#services" onClick={() => handleLinkClick('services')} className="font_family relative px-6 py-2 group text-[18px]">
              {activeLink === 'services' && <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'services' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>SERVICES</span>
            </a>

            <a href="#team" onClick={() => handleLinkClick('team')} className="font_family relative px-6 py-2 group text-[18px]">
              {activeLink === 'team' && <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'team' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>TEAM</span>
            </a>
            
            <a href="#about" onClick={() => handleLinkClick('about')} className="font_family relative px-6 py-2 group text-[18px]">
              {activeLink === 'about' && <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'about' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>ABOUT</span>
            </a>

            <a href="#blog" onClick={() => handleLinkClick('blog')} className="font_family relative px-6 py-2 group text-[18px]">
              {activeLink === 'blog' && <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'blog' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>BLOG</span>
            </a>
            
            <a href="#contact" onClick={() => handleLinkClick('contact')} className="font_family relative px-6 py-2 group text-[18px]">
              {activeLink === 'contact' && <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'contact' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>CONTACT US</span>
            </a>
            
          </nav>

          <div className="min-[1170px]:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#2eb8b8] focus:outline-none cursor-pointer p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="min-[1170px]:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-serif">
            
            <a href="#home" onClick={() => handleLinkClick('home')} className={`font_family block px-3 py-2 rounded-md text-base ${activeLink === 'home' ? 'text-[#2eb8b8] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>HOME</a>
            <a href="#portfolio" onClick={() => handleLinkClick('portfolio')} className={`font_family block px-3 py-2 rounded-md text-base ${activeLink === 'portfolio' ? 'text-[#2eb8b8] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>PORTFOLIO</a>
            <a href="#services" onClick={() => handleLinkClick('services')} className={`font_family block px-3 py-2 rounded-md text-base ${activeLink === 'services' ? 'text-[#2eb8b8] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>SERVICES</a>
            <a href="#team" onClick={() => handleLinkClick('team')} className={`font_family block px-3 py-2 rounded-md text-base ${activeLink === 'team' ? 'text-[#2eb8b8] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>TEAM</a>
            <a href="#about" onClick={() => handleLinkClick('about')} className={`font_family block px-3 py-2 rounded-md text-base ${activeLink === 'about' ? 'text-[#2eb8b8] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>ABOUT</a>
            <a href="#blog" onClick={() => handleLinkClick('blog')} className={`font_family block px-3 py-2 rounded-md text-base ${activeLink === 'blog' ? 'text-[#2eb8b8] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>BLOG</a>
            <a href="#contact" onClick={() => handleLinkClick('contact')} className={`font_family block px-3 py-2 rounded-md text-base ${activeLink === 'contact' ? 'text-[#2eb8b8] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>CONTACT US</a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;