import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaFacebookF, 
  FaTwitter, 
  FaRss, 
  FaGooglePlusG 
} from 'react-icons/fa';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from  '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';

const Team = () => {
  return (
    <section 
      id="team" 
      className="relative py-24 bg-[#2c353f] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/bpqhStV2_rc?autoplay=1&mute=1&loop=1&playlist=bpqhStV2_rc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          title="Background Video"
        ></iframe>
        
        <div className="absolute inset-0 bg-[#2c353f]/85"></div>
      </div>

      <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1a2026] text-white p-4 z-20 hidden lg:block">
        <FaChevronLeft size={16} />
      </button>
      
      <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1a2026] text-white p-4 z-20 hidden lg:block">
        <FaChevronRight size={16} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font_family text-5xl md:text-4xl tracking-tight font-bold text-white uppercase mb-4 font-serif">
            Meet The Team
          </h2>
          <p className="font_family text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex flex-col group cursor-pointer">
            <div className="w-full aspect-square overflow-hidden bg-gray-200">
              <img 
                src={team1}
                alt="Owen Miller" 
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="bg-[#1e252c] p-5 border-b border-[#151a1e]">
              <h3 className="font_family text-white font-bold font-serif tracking-wide text-lg mb-1">
                Owen Miller
              </h3>
              <p className="font_family text-gray-400 text-xs  font-serif">
                developer
              </p>
            </div>
            <div className="bg-[#2eb8b8] py-4 px-5 flex justify-start gap-3">
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaFacebookF size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaTwitter size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaRss size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaGooglePlusG size={14} /></a>
            </div>
          </div>

          <div className="flex flex-col group cursor-pointer">
            <div className="w-full aspect-square overflow-hidden bg-gray-200">
              <img 
                src={team2}
                alt="Mike William" 
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="bg-[#1e252c] p-5 border-b border-[#151a1e]">
              <h3 className="font_family text-white font-bold font-serif tracking-wide text-lg mb-1">
                Mike William
              </h3>
              <p className="font_family text-gray-400 text-xs  font-serif">
                developer
              </p>
            </div>
            <div className="bg-[#2eb8b8] py-4 px-5 flex justify-start gap-3">
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaFacebookF size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaTwitter size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaRss size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaGooglePlusG size={14} /></a>
            </div>
          </div>

          <div className="flex flex-col group cursor-pointer">
            <div className="w-full aspect-square overflow-hidden bg-gray-200">
              <img 
                src={team4}
                alt="Besim Dauti" 
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="bg-[#1e252c] p-5 border-b border-[#151a1e]">
              <h3 className="font_family text-white font-bold font-serif tracking-wide text-lg mb-1">
                Besim Dauti
              </h3>
              <p className="text-gray-400 text-xs  font-serif">
                developer
              </p>
            </div>
            <div className="bg-[#2eb8b8] py-4 px-5 flex justify-start gap-3">
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaFacebookF size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaTwitter size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaRss size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaGooglePlusG size={14} /></a>
            </div>
          </div>

          <div className="flex flex-col group cursor-pointer">
            <div className="w-full aspect-square overflow-hidden bg-gray-200">
              <img 
                src={team3}
                alt="Faton Avdiu" 
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="bg-[#1e252c] p-5 border-b border-[#151a1e]">
              <h3 className="font_family text-white font-bold font-serif tracking-wide text-lg mb-1">
                Faton Avdiu
              </h3>
              <p className="font_family text-gray-400 text-xs  font-serif">
                developer
              </p>
            </div>
            <div className="bg-[#2eb8b8] py-4 px-5 flex justify-start gap-3">
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaFacebookF size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaTwitter size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaRss size={12} /></a>
              <a href="#" className="w-7 h-7 rounded-full border border-white flex items-center justify-center text-white"><FaGooglePlusG size={14} /></a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Team;