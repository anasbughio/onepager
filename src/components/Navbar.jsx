import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 text-sm font-semibold tracking-wide text-gray-600">      
            <a 
              href="#home" 
              className="px-4 py-2 transition-colors duration-200 bg-[#2eb8b8] text-white skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg] inline-block text-[#2eb8b8]">HOME</span>
            </a>

            <a href="#portfolio" className="px-4 py-2 transition-colors duration-200 hover:text-[#2eb8b8]">
              <span>PORTFOLIO</span>
            </a>
            
            <a href="#services" className="px-4 py-2 transition-colors duration-200 hover:text-[#2eb8b8]">
              <span>SERVICES</span>
            </a>
            
            <a href="#team" className="px-4 py-2 transition-colors duration-200 hover:text-[#2eb8b8]">
              <span>TEAM</span>
            </a>
            
            <a href="#blog" className="px-4 py-2 transition-colors duration-200 hover:text-[#2eb8b8]">
              <span>BLOG</span>
            </a>
            
            <a href="#contact" className="px-4 py-2 transition-colors duration-200 hover:text-[#2eb8b8]">
              <span>CONTACT</span>
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
            
            <a 
              href="#home" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#2eb8b8] text-white"
            >
              HOME
            </a>

            <a 
              href="#portfolio" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]"
            >
              PORTFOLIO
            </a>
            
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]"
            >
              SERVICES
            </a>
            
            <a 
              href="#team" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]"
            >
              TEAM
            </a>
            
            <a 
              href="#blog" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]"
            >
              BLOG
            </a>
            
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#2eb8b8]"
            >
              CONTACT
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;