import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Stats from '../components/Stats';

// Point to your backend URL
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Home() {
  const [sections, setSections] = useState([]);

  // Fetch the data exactly once when the Home page loads
  useEffect(() => {
    fetch(`${BASE_URL}/api/sections`)
      .then(res => res.json())
      .then(data => setSections(data))
      .catch(err => console.error("Failed to fetch sections:", err));
  }, []);

  return (
    <main>
      {/* Keep existing Hero at the top */}
      <Hero />

      {/* --- DYNAMIC SECTIONS RENDERED HERE --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {sections.map((section, index) => (
          <section 
            key={section._id} 
            // Flex-col for mobile (stacked), Flex-row for desktop (side-by-side).
            // index % 2 alternates the layout direction for a professional look!
            className={`flex flex-col gap-8 md:gap-12 items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Image side (only renders if an image URL was provided) */}
            {section.image && (
              <div className="w-full md:w-1/2">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                />
              </div>
            )}
            
            {/* Text side */}
            <div className={`w-full ${section.image ? 'md:w-1/2' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
                {section.title}
              </h2>
              {/* whitespace-pre-wrap ensures any line breaks from your text area are preserved */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                {section.description}
              </p>
            </div>
          </section>
        ))}
      </div>
      {/* -------------------------------------- */}

      {/* Keep existing Biography and Stats at the bottom */}
      <Biography />
      <Stats />
    </main>
  );
}