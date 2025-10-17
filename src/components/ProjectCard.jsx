import React from 'react'

export default function ProjectCard({ title, description, tags = [], image, href }) {
  return (
    <a href={href} className="group block rounded-lg border hover:shadow-md transition-shadow overflow-hidden">
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      ) : null}
      <div className="p-4">
        <h3 className="font-semibold text-lg group-hover:text-blue-600">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs rounded bg-gray-100 px-2 py-1">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  )
}


