import { 
  FaBullhorn, 
  FaPlane, 
  FaRegCopy, 
  FaThumbsUp, 
  FaRegImage, 
  FaHtml5 
} from 'react-icons/fa';

import servicesMockup from '../assets/ourservices.png'; 

const Services = () => {
  return (
    <section id="services" className="pt-25 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18.5">
        
        <div className="text-center mb-10">
          <h2 className="font_family text-[rgb(0,0,0)] text-[45px] font-[700] leading-[49.5px] uppercase mb-0 font-serif">
            Our Services
          </h2>
          <p className="font_family text-[rgb(131,131,131)] text-[18px] leading-[24px]  max-w-2xl mx-auto">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mb-24">
          
          <div className="flex items-start gap-2 cursor-pointer group">
            <div className="flex-shrink-0 w-14 h-22 bg-[#2eb8b8] -skew-x-[15deg] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
              <div className="skew-x-[15deg] text-white text-xl">
                <FaBullhorn />
              </div>
            </div>
            <div>
              <h3 className="font_family text-center text-[20px] text-lg font-[400] tracking-none  uppercase mb-1 transition-colors duration-300 group-hover:text-[#2eb8b8]">
                Web Design
              </h3>
              <p className="font_family text-center text-gray-400 text-[15px] leading-5">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-0 cursor-pointer group">
            <div className="flex-shrink-0 w-14 h-22 bg-[#2eb8b8] -skew-x-[15deg] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
              <div className="skew-x-[18deg] text-white text-xl">
                <FaPlane />
              </div>
            </div>
            <div>
              <h3 className="font_family text-[20px] text-center text-lg font-[400] tracking-none  uppercase mb-1 transition-colors duration-300 group-hover:text-[#2eb8b8]">
                Photography
              </h3>
              <p className="font_family text-center text-gray-400 text-[15px] leading-5">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 cursor-pointer group">
            <div className="flex-shrink-0 w-14 h-22 bg-[#2eb8b8] -skew-x-[15deg] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
              <div className="skew-x-[15deg] text-white text-xl">
                <FaRegCopy />
              </div>
            </div>
            <div>
              <h3 className="font_family text-[20px] text-center text-lg font-[400] tracking-none  uppercase mb-1 transition-colors duration-300 group-hover:text-[#2eb8b8]">
                HTML5
              </h3>
              <p className="font_family text-center text-gray-400 text-[15px] leading-5">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 cursor-pointer group">
            <div className="flex-shrink-0 w-14 h-22 bg-[#2eb8b8] -skew-x-[15deg] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
              <div className="skew-x-[15deg] text-white text-xl">
                <FaThumbsUp />
              </div>
            </div>
            <div>
              <h3 className="font_family text-[20px] tracking-tighter text-center text-lg font-[400] tracking-none  uppercase mb-1 transition-colors duration-300 group-hover:text-[#2eb8b8]">
                JQuery
              </h3>
              <p className="font_family text-center text-gray-400 text-[15px] leading-5">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 cursor-pointer group">
            <div className="flex-shrink-0 w-14 h-22 bg-[#2eb8b8] -skew-x-[15deg] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
              <div className="skew-x-[15deg] text-white text-xl">
                <FaRegImage />
              </div>
            </div>
            <div>
              <h3 className="font_family text-[20px] text-center text-lg font-[400] tracking-none uppercase mb-1 transition-colors duration-300 group-hover:text-[#2eb8b8]">
                SEO
              </h3>
              <p className="font_family text-center text-gray-400 text-[15px] leading-5">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 cursor-pointer group">
            <div className="flex-shrink-0 w-14 h-22 bg-[#2eb8b8] -skew-x-[15deg] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
              <div className="skew-x-[15deg] text-white text-xl">
                <FaHtml5 />
              </div>
            </div>
            <div>
              <h3 className="font_family text-[20px] text-[rgb(24, 24, 24)] text-center text-lg font-[400] tracking-none  uppercase mb-1  duration-300">
                CSS3
              </h3>
              <p className="font_family text-center text-gray-400 text-[15px] leading-5">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full flex justify-center relative mt-10">
        <div className="max-w-4xl w-full px-4 relative -bottom-1 drop-shadow-2xl opacity-90">
          <img 
            src={servicesMockup}
            alt="Multi-device mockup" 
            className="w-full h-auto object-cover max-h-[300px] object-top rounded-t-xl"
          />
        </div>
      </div>
      
      <div className="h-2 bg-[#2c353f] w-full"></div>
    </section>
  );
};

export default Services;