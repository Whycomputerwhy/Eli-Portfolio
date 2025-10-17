import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Eli. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:eli@example.com" className="hover:text-blue-600">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}


