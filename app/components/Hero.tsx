import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-indigo-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Hi, I’m Jeralyn</h1>
        <p className="text-lg text-gray-600 mb-6">I build accessible, responsive web apps and delightful user experiences.</p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:bg-indigo-700">See my work</a>
            <a href="mailto:jeralyn.haycock@gmail.com" className="inline-block border border-indigo-600 text-indigo-600 px-5 py-3 rounded-md hover:bg-indigo-50">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
