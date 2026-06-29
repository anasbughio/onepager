import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
})

const emptyForm = { title: '', description: '', image: '', order: 0 }

export default function AdminPanel() {
  const [sections, setSections] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  useEffect(() => { loadSections() }, [])

  const loadSections = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/sections`)
      const data = await res.json()
      setSections(data)
    } catch {
      setError('Failed to load sections')
    }
  }

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!form.title || !form.description) {
      setError('Title and description are required')
      return
    }
    setLoading(true)
    try {
      const url = editingId
        ? `${BASE_URL}/api/sections/${editingId}`
        : `${BASE_URL}/api/sections`
      const method = editingId ? 'PUT' : 'POST'
      const res = await fetch(url, {
        method,
        headers: getAuthHeaders(),
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setSuccess(editingId ? 'Section updated!' : 'Section created!')
      setForm(emptyForm)
      setEditingId(null)
      loadSections()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (section) => {
    setForm({
      title: section.title,
      description: section.description,
      image: section.image || '',
      order: section.order || 0,
    })
    setEditingId(section._id)
    setError('')
    setSuccess('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this section?')) return
    try {
      const res = await fetch(`${BASE_URL}/api/sections/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      })
      if (!res.ok) throw new Error('Delete failed')
      setSuccess('Section deleted')
      loadSections()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleCancel = () => {
    setForm(emptyForm)
    setEditingId(null)
    setError('')
    setSuccess('')
  }

const handleLogout = () => {
  if (window.confirm('Are you sure you want to log out?')) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsOpen(false);
    navigate('/');
  }
};

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-serif text-3xl font-bold text-gray-800">Admin Panel</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your one-pager content</p>
          </div>
          <div className="flex gap-3">
            <Link to="/" className="text-sm text-[#2eb8b8] hover:underline">← View site</Link>
            <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-red-500 transition-colors">Logout</button>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="font-serif text-lg font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-100">
            {editingId ? 'Edit Section' : 'Add New Section'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input name="title" type="text" placeholder="Section title"
                value={form.title} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2eb8b8]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea name="description" rows="4" placeholder="Section description"
                value={form.description} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2eb8b8] resize-y" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input name="image" type="text" placeholder="https://example.com/image.jpg"
                value={form.image} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2eb8b8]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
              <input name="order" type="number" placeholder="0"
                value={form.order} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2eb8b8]" />
            </div>

            {error && <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
            {success && <p className="text-green-600 text-sm bg-green-50 px-3 py-2 rounded-lg">{success}</p>}

            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={loading}
                className="bg-[#2eb8b8] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#25a0a0] transition-colors disabled:opacity-60">
                {loading ? 'Saving...' : editingId ? 'Update Section' : 'Add Section'}
              </button>
              {editingId && (
                <button type="button" onClick={handleCancel}
                  className="border border-gray-200 text-gray-600 px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Sections List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-serif text-lg font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-100">
            All Sections ({sections.length})
          </h2>

          {sections.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-8 italic">No sections yet. Add one above.</p>
          ) : (
            <div className="space-y-3">
       {sections.map(section => (
  <div key={section._id}
    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-[#2eb8b8] transition-colors">
    
    {/* Image and Text Container */}
    <div className="flex gap-3 flex-1 min-w-0 w-full">
      {section.image && (
        <img src={section.image} alt={section.title}
          className="w-16 h-16 object-cover rounded-lg flex-shrink-0 border border-gray-100" />
      )}
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-gray-800 text-sm mb-1 truncate">{section.title}</h3>
        <p className="text-gray-500 text-xs line-clamp-2">{section.description}</p>
      </div>
    </div>

    {/* Buttons Container */}
    <div className="flex gap-2 w-full md:w-auto justify-end">
      <button onClick={() => handleEdit(section)}
        className="text-xs border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg hover:border-[#2eb8b8] hover:text-[#2eb8b8] transition-colors">
        Edit
      </button>
      <button onClick={() => handleDelete(section._id)}
        className="text-xs border border-red-100 text-red-400 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">
        Delete
      </button>
    </div>
  </div>
))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}