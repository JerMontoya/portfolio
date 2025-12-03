import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-indigo-500 rounded-md flex items-center justify-center text-white font-bold">J</div>
          <a href="#home" className="text-xl font-semibold text-gray-800">Jeralyn Montoya</a>
        </div>
        <nav>
          <ul className="flex space-x-4 text-sm text-gray-600">
            <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
