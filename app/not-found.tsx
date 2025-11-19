import Link from 'next/link'
import { Terminal, Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center p-4 bg-purple-500/20 rounded-full mb-6">
          <Terminal className="w-16 h-16 text-purple-400" />
        </div>
        
        <h1 className="text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Command Not Found
        </h2>
        
        <p className="text-xl text-purple-200 mb-8 max-w-lg mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <Link
            href="/commands"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <Search className="w-5 h-5" />
            <span>Browse Commands</span>
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-purple-500/20">
          <p className="text-purple-300 font-mono text-sm">
            $ cd /linovia<br />
            $ ls -la<br />
            <span className="text-red-400">Error: No such file or directory</span>
          </p>
        </div>
      </div>
    </div>
  )
}
