import "../css/hero.css";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero relative w-full h-[100vh] lg:h-[100vh] flex items-center justify-center bg-[#2c353f] overflow-hidden"
    >
    
      <div className="absolute inset-0 opacity-10"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="mb-0 text-center uppercase text-white hero-title">
          WELCOME TO <span className="text-[rgb(43,182,182)] font-bold">ONE<span className="font-bold text-white">PAGER</span></span>
        </h1>
        <p className="mx-auto mt-6 mb-10 max-w-[640px] text-center text-white hero-subtitle">
          We design and develop awesome websites and smart applications, impactful identities using the latest
        </p>
        <button
          type="button"
          className="relative mt-10 inline-block bg-[#2bb6b6] px-8 py-4 uppercase hero-btn-text"
        >
          Learn More
        </button>

    
      </div>
    </section>
  );
};

export default Hero;