import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

export default function Home() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}


