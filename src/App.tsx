import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">
          Tailwind CSS is working!
        </h1>

        <p className="mt-4 text-slate-600">
          React, TypeScript, Vite, and Tailwind CSS are ready.
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
          Get started
        </button>
      </div>

      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img className="size-48 shadow-xl rounded-md" alt="" src="src/assets/hero.png" />
        </div>
        <div className="flex flex-col md:items-start">
          <span className="text-2xl font-medium">className Warfare</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </main>
  )
}

export default App
