import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function ResetPassword() {
  const { token } = useParams()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!password || !confirm) {
      setError('Please fill in both fields.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setSuccess('Password reset successful! Redirecting to login...')
      setTimeout(() => navigate('/login'), 2000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="font-serif text-2xl font-bold text-gray-800 mb-1">Reset Password</h2>
        <p className="text-gray-500 text-sm mb-6">Enter your new password</p>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2eb8b8] transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2eb8b8] transition-colors"
            />
          </div>

          {error && <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
          {success && <p className="text-green-600 text-sm bg-green-50 px-3 py-2 rounded-lg">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2eb8b8] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-[#25a0a0] transition-colors disabled:opacity-60"
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          <Link to="/login" className="text-[#2eb8b8] hover:underline">← Back to login</Link>
        </p>
      </div>
    </div>
  )
}