import { useState } from 'react'
import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaLink
} from 'react-icons/fa';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', website: '', message: '' })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setStatus('')

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in name, email and message.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Failed to send message')
      setStatus('success')
      setForm({ name: '', email: '', website: '', message: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#232527]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15">

        <div className="text-center mb-9">
          <h2 className="font_family text-[45px] md:text-[45px] font-bold  text-white uppercase">
            Get In Touch!
          </h2>
          <p className="font_family text-white text-lg md:text-lg max-w-2xl mx-auto font-serif">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

          <div className="text-gray-400 font-serif">
            <h3 className="font_family text-3xl text-white mb-2 tracking-wide">
              Contact info
            </h3>

            <div className="font_family text-white space-y-6 mb-5 text-sm">
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat.
              </p>
              <p>
                Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum
              </p>
            </div>
            <hr className='mb-5'/>
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

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
          >

            <div className="flex flex-col gap-4">
              <div className="flex w-full bg-white h-12">
                <div className="w-14 flex-shrink-0 flex items-center justify-center border-r border-gray-100">
                  <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                    <FaUser size={10} />
                  </div>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="font_family w-full px-4 text-sm focus:outline-none font-serif text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              <div className="flex w-full bg-white h-12">
                <div className="w-14 flex-shrink-0 flex items-center justify-center border-r border-gray-100">
                  <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                    <FaEnvelope size={10} />
                  </div>
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="e-mail"
                  value={form.email}
                  onChange={handleChange}
                  className="font_family w-full px-4 text-sm focus:outline-none font-serif text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              <div className="flex w-full bg-white h-12">
                <div className="w-14 flex-shrink-0 flex items-center justify-center border-r border-gray-100">
                  <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 transform -rotate-45">
                    <FaLink size={10} />
                  </div>
                </div>
                <input
                  name="website"
                  type="url"
                  placeholder="website"
                  value={form.website}
                  onChange={handleChange}
                  className="font_family w-full px-4 text-sm focus:outline-none font-serif text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full">
              <div className="w-full bg-white flex-grow min-h-[120px]">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="font_family w-full h-full p-4 text-sm focus:outline-none font-serif text-gray-700 placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>

              {error && (
                <p className="font_family text-red-400 text-sm bg-red-900/20 px-3 py-2 rounded">{error}</p>
              )}
              {status === 'success' && (
                <p className="font_family text-[#2eb8b8] text-sm bg-[#2eb8b8]/10 px-3 py-2 rounded">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="font_family w-full h-12 bg-[#2eb8b8] text-white font-bold tracking-widest text-sm hover:bg-[#259696] transition-colors duration-300 disabled:opacity-60"
              >
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;