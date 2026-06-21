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
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm tracking-wide text-gray-800 font-serif">
            
            <a 
              href="#home" 
              onClick={() => handleLinkClick('home')}
              className="relative px-6 py-2 group"
            >

              {activeLink === 'home' && (
                <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>
              )}

              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'home' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>
                HOME
              </span>
            </a>

      
            <a 
              href="#portfolio" 
              onClick={() => handleLinkClick('portfolio')}
              className="relative px-6 py-2 group"
            >
              {activeLink === 'portfolio' && (
                <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>
              )}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'portfolio' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>
                PORTFOLIO
              </span>
            </a>
            
            <a 
              href="#services" 
              onClick={() => handleLinkClick('services')}
              className="relative px-6 py-2 group"
            >
              {activeLink === 'services' && (
                <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>
              )}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'services' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>
                SERVICES
              </span>
            </a>

            <a 
              href="#team" 
              onClick={() => handleLinkClick('team')}
              className="relative px-6 py-2 group"
            >
              {activeLink === 'team' && (
                <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>
              )}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'team' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>
                TEAM
              </span>
            </a>
            
            <a 
              href="#about" 
              onClick={() => handleLinkClick('about')}
              className="relative px-6 py-2 group"
            >
              {activeLink === 'about' && (
                <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>
              )}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'about' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>
                ABOUT
              </span>
            </a>

            <a 
              href="#blog" 
              onClick={() => handleLinkClick('blog')}
              className="relative px-6 py-2 group"
            >
              {activeLink === 'blog' && (
                <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>
              )}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'blog' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>
                BLOG
              </span>
            </a>
            
            <a 
              href="#contact" 
              onClick={() => handleLinkClick('contact')}
              className="relative px-6 py-2 group"
            >
              {activeLink === 'contact' && (
                <div className="absolute inset-0 bg-[#2eb8b8] -skew-x-[25deg] transform origin-center"></div>
              )}
              <span className={`relative z-10 block transition-colors duration-200 ${activeLink === 'contact' ? 'text-white' : 'group-hover:text-[#2eb8b8]'}`}>
                CONTACT US
              </span>
            </a>
            
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#2eb8b8] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            
            <a href="#home" onClick={() => handleLinkClick('home')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'home' ? 'bg-[#2eb8b8] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>HOME</a>
            <a href="#portfolio" onClick={() => handleLinkClick('portfolio')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'portfolio' ? 'bg-[#2eb8b8] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>PORTFOLIO</a>
            <a href="#services" onClick={() => handleLinkClick('services')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'services' ? 'bg-[#2eb8b8] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>SERVICES</a>
            <a href="#team" onClick={() => handleLinkClick('team')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'team' ? 'bg-[#2eb8b8] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>TEAM</a>
            <a href="#about" onClick={() => handleLinkClick('about')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'about' ? 'bg-[#2eb8b8] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>ABOUT</a>
            <a href="#blog" onClick={() => handleLinkClick('blog')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'blog' ? 'bg-[#2eb8b8] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>BLOG</a>
            <a href="#contact" onClick={() => handleLinkClick('contact')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === 'contact' ? 'bg-[#2eb8b8] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]'}`}>CONTACT US</a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;