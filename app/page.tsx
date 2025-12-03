'use client'

import Image from 'next/image'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'

export default function Module5Portfolio() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-white text-gray-800">
        <Header />
        <main className="">
          <Hero />
          <ProjectsGrid />
            <section id="about" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Image
                src="/img5.jpg"
                alt="Profile photo"
                className="w-40 h-40 rounded-full object-cover shadow-md mx-auto md:mx-0"
                loading="lazy"
                width={160}
                height={160}
              />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-600">
                I’m a focused frontend developer who loves building fast, accessible user experiences
                using modern web technologies.
                </p>
              </div>
              </div>
            </div>
            </section>
          <section id="contact" className="py-12 bg-indigo-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-xl font-semibold mb-2">Get in touch</h2>
              <p className="text-gray-600 mb-4">
                Looking for a brilliant new team member? I’d love to hear from you!
              </p>
              <a
                href="mailto:jeralyn.haycock@gmail.com"
                className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md"
              >
                Email me
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}