import { useNavigate } from 'react-router-dom'

export default function AuthLayout({ children }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative">
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm text-gray-500 hover:text-[#2eb8b8] transition-colors"
      >
        <span>←</span> Back to site
      </button>

      {children}
    </div>
  )
}