import { useState, useCallback } from 'react'
import './App.css'

export default function App() {
  const [length, setLength] = useState(12)
  const [useNumbers, setUseNumbers] = useState(false)
  const [useSymbols, setUseSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const generate = useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (useNumbers) chars += '0123456789'
    if (useSymbols) chars += '!@#$%^&*()-_=+[]{};:,.<>?/'

    let out = ''
    const L = Number(length) || 0
    for (let i = 0; i < L; i++) {
      const idx = Math.floor(Math.random() * chars.length)
      out += chars.charAt(idx)
    }
    setPassword(out)
  }, [length, useNumbers, useSymbols])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500">
      <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6">
        <h1 className="text-white text-2xl font-extrabold text-center mb-5">Password Generator</h1>

        {/* Password placeholder (read-only) */}
        <input
          type="text"
          readOnly
          value={password}
          placeholder="Your generated password appears here"
          className="w-full rounded-xl bg-white/90 text-gray-900 px-4 py-3 mb-5 outline-none ring-2 ring-transparent focus:ring-white/60 "
        />

        {/* Toggle buttons */}
        <div className="flex items-center gap-3 mb-5">
          <button
            type="button"
            onClick={() => setUseNumbers(v => !v)}
            className={`flex-1 rounded-xl py-2.5 font-medium transition border
              ${useNumbers
                ? 'text-white bg-gradient-to-r from-sky-500 to-cyan-400 border-transparent'
                : 'text-white/90 border-white/30 hover:bg-white/10'}`}
          >
            Numbers {useNumbers ? '✓' : ''}
          </button>

          <button
            type="button"
            onClick={() => setUseSymbols(v => !v)}
            className={`flex-1 rounded-xl py-2.5 font-medium transition border
              ${useSymbols
                ? 'text-white bg-gradient-to-r from-emerald-500 to-teal-400 border-transparent'
                : 'text-white/90 border-white/30 hover:bg-white/10'}`}
          >
            Symbols {useSymbols ? '✓' : ''}
          </button>
        </div>

        {/* Length slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-white mb-2">
            <span className="font-medium">Length</span>
            <span className="px-2 py-0.5 rounded-lg bg-white/15">{length}</span>
          </div>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-fuchsia-400 cursor-pointer"
          />
          <div className="flex justify-between text-white/70 text-xs mt-1">
            <span>6</span><span>32</span>
          </div>
        </div>

        {/* Generate */}
        <button
          type="button"
          onClick={generate}
          className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 shadow-lg"
        >
          Generate
        </button>
      </div>
    </div>
  )
}
