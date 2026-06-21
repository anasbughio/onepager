import { 
  FaFacebookF, 
  FaTwitter, 
  FaRss, 
  FaGooglePlusG, 
  FaLinkedinIn, 
  FaPinterestP 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2eb8b8] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">        
          <div className="font_family text-white text-sm font-serif tracking-wide text-center md:text-left">
            &copy; 2014 OnePager, All Rights Reserved
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white"
              aria-label="Twitter"
            >
              <FaTwitter size={16} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white"
              aria-label="RSS"
            >
              <FaRss size={16} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white"
              aria-label="Google Plus"
            >
              <FaGooglePlusG size={16} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white"
              aria-label="Pinterest"
            >
              <FaPinterestP size={16} />
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;