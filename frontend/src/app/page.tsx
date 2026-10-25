"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all credential fields.")
      return
    }

    // Demo auto-routing based on email content
    const lowerEmail = email.toLowerCase()
    const isTeamLead = 
      lowerEmail.includes("lead") || 
      lowerEmail.includes("manager") || 
      lowerEmail.includes("admin") || 
      lowerEmail.includes("sarah")

    if (isTeamLead) {
      router.push("/dashboard")
    } else {
      router.push("/engineer/dashboard")
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 px-4 py-8">
      <div className="w-full max-w-md space-y-6 rounded-3xl bg-white p-8 shadow-2xl border border-slate-800">
        
        {/* Company Logo Container */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center rounded-2xl bg-white p-2 mx-auto w-fit ">
            <Image
              src="/images/log.png" 
              alt="Cloudalign Logo"
              width={160}
              height={70}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
          <div>
            
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Sign In
            </h1>
           {/* <p className="text-xs text-slate-500 mt-1">
              Enter your credentials to access your workspace
            </p> */}
          </div>
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g.thabo@cloudalign.co.ls"
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
              required
            />
           {/*<p className="text-[11px] text-slate-400 mt-1">
              *Tip: Use <span className="font-semibold text-slate-600">"sarah@cloudalign.co.za"</span> to test the Team Lead dashboard.
            </p> */}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

       {/* <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-xs text-slate-400">
            Secured via Cloudalign Enterprise Directory
          </p>
        </div> */}

      </div>
    </main>
  )
}