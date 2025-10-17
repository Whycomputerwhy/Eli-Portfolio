import React from 'react'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hi, I'm Eli</h1>
          <p className="mt-4 text-gray-600">Frontend developer crafting delightful web experiences with React, Vite, Tailwind, and GSAP.</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50">Contact</a>
          </div>
        </div>
        <div className="justify-self-center">
          <img src="/images/Group 16.png" alt="Decorative" className="w-64 h-64 object-contain" />
        </div>
      </div>
    </section>
  )
}


