import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <img src="/images/test.png" alt="Hero background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow">Hi, I'm Eli</h1>
          <p className="mt-4 text-gray-100 max-w-xl drop-shadow">Frontend developer crafting delightful web experiences with React, Vite, Tailwind, and GSAP.</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-white/70 text-white px-4 py-2 hover:bg-white/10">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}


