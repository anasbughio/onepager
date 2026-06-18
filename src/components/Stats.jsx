import { FaFlask, FaCoffee, FaUsers, FaBriefcase } from 'react-icons/fa';

const Stats = () => {
  return (
    <section id="stats" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font_family text-3xl md:text-4xl font-bold tracking-[0.15em] text-black uppercase mb-4 font-serif">
            Company Stats
          </h2>
          <p className="font_family text-gray-400  text-sm md:text-base max-w-2xl mx-auto font-serif">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        {/* Stats Grid (Hardcoded) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Stat Card 1: Lines of code written */}
          <div className="border border-gray-200 rounded-sm py-12 px-6 flex flex-col items-center justify-center bg-white hover:shadow-xl transition-shadow duration-300 group cursor-default">
            {/* Icon */}
            <div className="text-[#2eb8b8] mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaFlask size={48} />
            </div>
            {/* Number */}
            <h3 className="font_family text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wider">
              956779
            </h3>
            {/* Label */}
            <p className="font-family text-gray-400 text-xs md:text-sm font-mono tracking-wide text-center">
              Lines of code written
            </p>
          </div>

          {/* Stat Card 2: Coffe Drinked */}
          <div className="border border-gray-200 rounded-sm py-12 px-6 flex flex-col items-center justify-center bg-white hover:shadow-xl transition-shadow duration-300 group cursor-default">
            <div className="text-[#2eb8b8] mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaCoffee size={48} />
            </div>
            <h3 className="font_family text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wider">
              1479
            </h3>
            <p className="font_family text-gray-400 text-xs md:text-sm font-mono tracking-wide text-center">
              Coffe Drinked
            </p>
          </div>

          {/* Stat Card 3: Happy Clients */}
          <div className="border border-gray-200 rounded-sm py-12 px-6 flex flex-col items-center justify-center bg-white hover:shadow-xl transition-shadow duration-300 group cursor-default">
            <div className="text-[#2eb8b8] mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaUsers size={48} />
            </div>
            <h3 className="font_family text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wider">
              578
            </h3>
            <p className="font_family text-gray-400 text-xs md:text-sm font-mono tracking-wide text-center">
              Happy Clients
            </p>
          </div>

          {/* Stat Card 4: Projects Done */}
          <div className="border border-gray-200 rounded-sm py-12 px-6 flex flex-col items-center justify-center bg-white hover:shadow-xl transition-shadow duration-300 group cursor-default">
            <div className="text-[#2eb8b8] mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaBriefcase size={48} />
            </div>
            <h3 className="font_family text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wider">
              2178
            </h3>
            <p className="font_family text-gray-400 text-xs md:text-sm font-mono tracking-wide text-center">
              Projects Done
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;