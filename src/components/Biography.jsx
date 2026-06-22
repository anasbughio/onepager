import { useState } from 'react';
import { FaWordpress, FaOpera } from 'react-icons/fa';

const Biography = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="biography" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          
          <div>
            <div className="mb-6 md:mb-8">
              <h2 className="font_family text-[28px] sm:text-[32px] md:text-[35px] font-bold tracking-[0em] text-black uppercase mb-2 md:mb-3 font-serif leading-tight">
                Company Biography
              </h2>
              <div className="font_family inline-block bg-[#2eb8b8] text-white text-xs sm:text-sm md:text-lg px-2 md:px-1 py-1 md:py-0 uppercase tracking-wider">
                Short Story About Us
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 text-gray-500 font-serif text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
              <p className='font_family'>
                This is <span className="text-[#2eb8b8] font-bold">Photoshop's</span> version of Lorem Ipsum. 
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              </p>
              <p className='font_family'>
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat 
                consequat auctor eu in elit. <span className="text-[#2eb8b8] font-bold">Class aptent taciti</span> sociosqu 
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <p className='font_family'>
                Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non
              </p>
            </div>
          </div>

          <div>
            <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-2">
              <div>
                <h2 className="font_family text-[28px] sm:text-[32px] md:text-[35px] font-bold text-black uppercase mb-1 leading-tight">
                  Our Clients
                </h2>
                <div className="font_family inline-block bg-[#2eb8b8] text-white text-xs sm:text-sm md:text-xl tracking-widest px-2 md:px-1 py-1 md:py-0 uppercase">
                  We Love Our Clients
                </div>
              </div>
            
              <div className="flex gap-2 mb-1 self-start sm:self-auto">
                <button 
                  onClick={() => setCurrentSlide(0)} 
                  className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 cursor-pointer ${currentSlide === 0 ? 'bg-gray-300' : 'border border-gray-300 bg-transparent hover:bg-gray-100'}`}
                  aria-label="Go to slide 1"
                ></button>
                <button 
                  onClick={() => setCurrentSlide(1)} 
                  className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 cursor-pointer ${currentSlide === 1 ? 'bg-gray-300' : 'border border-gray-300 bg-transparent hover:bg-gray-100'}`}
                  aria-label="Go to slide 2"
                ></button>
                <button 
                  onClick={() => setCurrentSlide(2)} 
                  className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 cursor-pointer ${currentSlide === 2 ? 'bg-gray-300' : 'border border-gray-300 bg-transparent hover:bg-gray-100'}`}
                  aria-label="Go to slide 3"
                ></button>
                <button 
                  onClick={() => setCurrentSlide(3)} 
                  className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 cursor-pointer ${currentSlide === 3 ? 'bg-gray-300' : 'border border-gray-300 bg-transparent hover:bg-gray-100'}`}
                  aria-label="Go to slide 4"
                ></button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
              
                <div className="w-full flex-shrink-0 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <div className="flex items-center text-white gap-1.5 sm:gap-2">
                       <FaOpera className="text-3xl sm:text-4xl" />
                       <div className="flex flex-col items-start leading-none">
                         <span className="font_family font-bold text-base sm:text-xl tracking-wider">OPERA™</span>
                         <span className="font_family text-[10px] sm:text-xs tracking-widest">software</span>
                       </div>
                    </div>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <div className="font_family w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center font-bold text-[#2eb8b8] text-2xl sm:text-3xl font-serif">
                      hp
                    </div>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <div className="flex items-center text-white gap-1.5 sm:gap-2">
                      <FaWordpress className="text-2xl sm:text-4xl" />
                      <span className="font_family font-serif text-sm sm:text-lg tracking-widest">WORDPRESS</span>
                    </div>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-xl sm:text-3xl tracking-wider">
                      Canon
                    </span>
                  </div>
                </div>

                <div className="w-full flex-shrink-0 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">SAMSUNG</span>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">SONY</span>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">GOOGLE</span>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">APPLE</span>
                  </div>
                </div>

                <div className="w-full flex-shrink-0 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">AMAZON</span>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">MICROSOFT</span>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">INTEL</span>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">IBM</span>
                  </div>
                </div>

                <div className="w-full flex-shrink-0 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">TESLA</span>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">FORD</span>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">TOYOTA</span>
                  </div>
                  <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-3 sm:p-4 hover:opacity-90 transition-opacity cursor-pointer">
                    <span className="font_family text-white font-serif font-bold text-lg sm:text-2xl tracking-wider">HONDA</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Biography;