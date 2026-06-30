import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Stats from '../components/Stats';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Home() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/sections`)
      .then(res => res.json())
      .then(data => setSections(Array.isArray(data) ? data : []))
      .catch(err => console.error("Failed to fetch sections:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {loading && (
          <p className="text-center text-gray-400 text-sm">Loading content...</p>
        )}

        {!loading && sections.length === 0 && (
          <p className="text-center text-gray-400 text-sm italic">No sections added yet.</p>
        )}

        {sections.map((section, index) => (
          <section
            key={section._id}
            className={`flex flex-col gap-8 md:gap-12 items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {section.image && (
              <div className="w-full md:w-1/2">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-100"
                />
              </div>
            )}

            <div className={`w-full ${section.image ? 'md:w-1/2' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                {section.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      <Biography />
      <Stats />
    </main>
  );
}