import { FaFlask, FaCoffee, FaUsers, FaBriefcase } from 'react-icons/fa';

const Stats = () => {
  return (
    <section id="stats" className="py-0 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font_family text-[45px] md:text-[45px] font-bold text-black uppercase mb-0 font-serif">
            Company Stats
          </h2>
          <p className="font_family text-gray-400 text-lg md:text-lg max-w-2xl mx-auto font-serif">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="border border-gray-200 rounded-sm py-12 px-2.5 flex flex-col items-center justify-center bg-white cursor-default">
            <div className="text-[#2eb8b8] mb-6">
              <FaFlask size={48} />
            </div>
            <h3 className="font_family text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wider">
              956779
            </h3>
            <p className="font_family text-gray-400 text-lg md:text-lg font-mono t text-center">
              Lines of code written
            </p>
          </div>

          <div className="border border-gray-200 rounded-sm py-12 px-2.5 flex flex-col items-center justify-center bg-white cursor-default">
            <div className="text-[#2eb8b8] mb-6">
              <FaCoffee size={48} />
            </div>
            <h3 className="font_family text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wider">
              1479
            </h3>
            <p className="font_family text-gray-400 text-lg md:text-lg font-mono  text-center">
              Coffe Drinked
            </p>
          </div>

          <div className="border border-gray-200 rounded-sm py-12 px-2.5 flex flex-col items-center justify-center bg-white cursor-default">
            <div className="text-[#2eb8b8] mb-6">
              <FaUsers size={48} />
            </div>
            <h3 className="font_family text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wider">
              578
            </h3>
            <p className="font_family text-gray-400 text-lg md:text-lg font-mono text-center">
              Happy Clients
            </p>
          </div>

          <div className="border border-gray-200 rounded-sm py-12 px-2.5 flex flex-col items-center justify-center bg-white cursor-default">
            <div className="text-[#2eb8b8] mb-6">
              <FaBriefcase size={48} />
            </div>
            <h3 className="font_family text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wider">
              2178
            </h3>
            <p className="font_family text-gray-400 text-lg md:text-lg font-mono text-center">
              Projects Done
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;