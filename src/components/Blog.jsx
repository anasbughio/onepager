import { FaRegClock, FaRegComments } from 'react-icons/fa';
import post1 from '../assets/post1.jpg';
import post2 from '../assets/post2.jpg';
import post3 from '../assets/post3.jpg';
import post4 from '../assets/post4.jpg';

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      
        <div className="text-center mb-16">
          <h2 className="font_family text-3xl md:text-4xl font-bold tracking-[0.15em] text-black uppercase mb-4 font-serif">
            Latest Posts
          </h2>
          <p className="font_family text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-serif">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
         
          <article className="flex flex-col cursor-default">
            <div className="relative mb-8">
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img 
                  src={post1}
                  alt="Blog thumbnail" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
        
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#2eb8b8] text-white px-4 py-2 flex items-center gap-4 text-xs font-semibold tracking-wider whitespace-nowrap shadow-sm">
                <div className="flex items-center gap-1.5">
                  <FaRegClock size={12} />
                  <span>19 Oct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaRegComments size={12} />
                  <span>10</span>
                </div>
              </div>
            </div>
            
            <div className="text-center px-2">
              <h3 className="text-sm font-serif font-bold text-gray-700 leading-relaxed mb-4">
                Mobile Friendly Comments Dashboard now launched!
              </h3>
              <hr className="border-gray-200 w-full mb-4" />
              <p className="text-xs text-gray-400  font-serif leading-relaxed">
                Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu.
              </p>
            </div>
          </article>

          
          <article className="flex flex-col cursor-default">
            <div className="relative mb-8">
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img 
                  src={post2}
                  alt="Blog thumbnail" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#2eb8b8] text-white px-4 py-2 flex items-center gap-4 text-xs font-semibold tracking-wider whitespace-nowrap shadow-sm">
                <div className="flex items-center gap-1.5">
                  <FaRegClock size={12} />
                  <span>19 Oct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaRegComments size={12} />
                  <span>10</span>
                </div>
              </div>
            </div>
            <div className="text-center px-2">
              <h3 className="text-sm font-serif font-bold text-gray-700 leading-relaxed mb-4">
                Mobile Friendly Comments Dashboard now launched!
              </h3>
              <hr className="border-gray-200 w-full mb-4" />
              <p className="text-xs text-gray-400 font-serif leading-relaxed">
                Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu.
              </p>
            </div>
          </article>

          <article className="flex flex-col cursor-default">
            <div className="relative mb-8">
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img 
                  src={post3}
                  alt="Blog thumbnail" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#2eb8b8] text-white px-4 py-2 flex items-center gap-4 text-xs font-semibold tracking-wider whitespace-nowrap shadow-sm">
                <div className="flex items-center gap-1.5">
                  <FaRegClock size={12} />
                  <span>19 Oct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaRegComments size={12} />
                  <span>10</span>
                </div>
              </div>
            </div>
            <div className="text-center px-2">
              <h3 className="text-sm font-serif font-bold text-gray-700 leading-relaxed mb-4">
                Mobile Friendly Comments Dashboard now launched!
              </h3>
              <hr className="border-gray-200 w-full mb-4" />
              <p className="text-xs text-gray-400  font-serif leading-relaxed">
                Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu.
              </p>
            </div>
          </article>

          <article className="flex flex-col cursor-default">
            <div className="relative mb-8">
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img 
                  src={post4}
                  alt="Blog thumbnail" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#2eb8b8] text-white px-4 py-2 flex items-center gap-4 text-xs font-semibold tracking-wider whitespace-nowrap shadow-sm">
                <div className="flex items-center gap-1.5">
                  <FaRegClock size={12} />
                  <span>19 Oct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaRegComments size={12} />
                  <span>10</span>
                </div>
              </div>
            </div>
            <div className="text-center px-2">
              <h3 className="text-sm font-serif font-bold text-gray-700 leading-relaxed mb-4">
                Mobile Friendly Comments Dashboard now launched!
              </h3>
              <hr className="border-gray-200 w-full mb-4" />
              <p className="text-xs text-gray-400 font-serif leading-relaxed">
                Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Blog;