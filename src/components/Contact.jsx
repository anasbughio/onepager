import { 
  FaHome, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaUser, 
  FaLink 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#232527]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font_family text-5xl md:text-5xl font-bold tracking-[-0.01em] text-white uppercase mb-4 font-serif">
            Get In Touch!
          </h2>
          <p className="font_family text-white text-sm md:text-base max-w-2xl mx-auto font-serif">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Left Column: Contact Info */}
          <div className="text-gray-400 font-serif">
            <h3 className="font_family text-3xl text-white mb-2 tracking-wide">
              Contact info
            </h3>
            
            <div className="font_family  text-white space-y-6 mb-5 text-sm ">
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non 
                mauris vitae erat consequat.
              </p>
              <p>
                Nullam ac urna eu felis dapibus condimentum sit amet a augue. 
                Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum
              </p>
            </div>
<hr  className='mb-5'/>
            {/* Contact Details Grid */}
            <div className="font_family grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4 text-sm text-white">
              <div className="flex items-center gap-3">
                <FaHome className="text-gray-300" />
                <span>lorem ipsum street</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-300" size={12} />
                <span>+399 (500) 321 9548</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-300" size={12} />
                <a href="mailto:info@domain.com" className="hover:text-[#2eb8b8] transition-colors">
                  info@domain.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            
            {/* Form Left Side: Inputs */}
            <div className="flex flex-col gap-4">
              {/* Name Input */}
              <div className="flex w-full bg-white h-12">
                <div className="w-14 flex-shrink-0 flex items-center justify-center border-r border-gray-100">
                  <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                    <FaUser size={10} />
                  </div>
                </div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 text-sm focus:outline-none font-serif text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex w-full bg-white h-12">
                <div className="w-14 flex-shrink-0 flex items-center justify-center border-r border-gray-100">
                  <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                    <FaEnvelope size={10} />
                  </div>
                </div>
                <input 
                  type="email" 
                  placeholder="e-mail" 
                  className="w-full px-4 text-sm focus:outline-none font-serif text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              {/* Website Input */}
              <div className="flex w-full bg-white h-12">
                <div className="w-14 flex-shrink-0 flex items-center justify-center border-r border-gray-100">
                  <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 transform -rotate-45">
                    <FaLink size={10} />
                  </div>
                </div>
                <input 
                  type="url" 
                  placeholder="website" 
                  className="w-full px-4 text-sm focus:outline-none font-serif text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Form Right Side: Textarea & Button */}
            <div className="flex flex-col gap-4 h-full">
              {/* Message Textarea */}
              <div className="w-full bg-white flex-grow min-h-[120px]">
                <textarea 
                  placeholder="Message" 
                  className="w-full h-full p-4 text-sm focus:outline-none font-serif text-gray-700 placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="font_family w-full h-12 bg-[#2eb8b8] text-white font-bold tracking-widest text-sm hover:bg-[#259696] transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;