"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-caramel text-background">
              Mau Mau Stories
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-background hover:bg-secondary px-3 py-2 rounded-md text-sm font-prata">
                Home
              </Link>
              <Link
                to="/stories"
                className="text-background hover:bg-secondary px-3 py-2 rounded-md text-sm font-prata"
              >
                Stories
              </Link>
              <Link to="/about" className="text-background hover:bg-secondary px-3 py-2 rounded-md text-sm font-prata">
                About
              </Link>
              <Link
                to="/contact"
                className="text-background hover:bg-secondary px-3 py-2 rounded-md text-sm font-prata"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search stories"
              className="px-3 py-1 rounded-md text-sm bg-background text-tertiary"
            />
            <button onClick={toggleDarkMode} className="ml-4 text-background">
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

