import { FaWordpress, FaOpera } from 'react-icons/fa';

const Biography = () => {
  return (
    <section id="biography" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Company Biography */}
          <div>
            {/* Header Block */}
            <div className="mb-8">
              <h2 className="font_family text-2xl md:text-3xl font-bold tracking-[0.1em] text-black uppercase mb-3 font-serif">
                Company Biography
              </h2>
              <div className="font_family inline-block bg-[#2eb8b8] text-white text-xs md:text-sm tracking-widest px-3 py-1 uppercase">
                Short Story About Us
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-gray-500 font-serif text-sm md:text-base leading-relaxed">
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

          {/* Right Column: Our Clients */}
          <div>
            {/* Header Block with Pagination Dots */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font_family text-2xl md:text-3xl font-bold tracking-[0.1em] text-black uppercase mb-3 font-serif">
                  Our Clients
                </h2>
                <div className="ifont_family nline-block bg-[#2eb8b8] text-white text-xs md:text-sm tracking-widest px-3 py-1 uppercase">
                  We Love Our Clients
                </div>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex gap-2 pb-1">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full border border-gray-300"></div>
                <div className="w-3 h-3 rounded-full border border-gray-300"></div>
              </div>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Opera Logo Box */}
              <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-4 hover:opacity-90 transition-opacity cursor-pointer">
                <div className="flex items-center text-white gap-2">
                   <FaOpera size={40} />
                   <div className="flex flex-col items-start leading-none">
                     <span className="font_family font-bold text-xl tracking-wider">OPERA™</span>
                     <span className="font_family text-xs tracking-widest">software</span>
                   </div>
                </div>
              </div>

              {/* HP Logo Box */}
              <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-4 hover:opacity-90 transition-opacity cursor-pointer">
                <div className="font_family w-14 h-14 bg-white rounded-full flex items-center justify-center font-bold text-[#2eb8b8] text-3xl font-serif">
                  hp
                </div>
              </div>

              {/* WordPress Logo Box */}
              <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-4 hover:opacity-90 transition-opacity cursor-pointer">
                <div className="flex items-center text-white gap-2">
                  <FaWordpress size={36} />
                  <span className="font_family font-serif text-lg tracking-widest">WORDPRESS</span>
                </div>
              </div>

              {/* Canon Logo Box */}
              <div className="bg-[#2eb8b8] aspect-[4/3] flex items-center justify-center p-4 hover:opacity-90 transition-opacity cursor-pointer">
                <span className="font_family text-white font-serif font-bold text-3xl tracking-wider">
                  Canon
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Biography;