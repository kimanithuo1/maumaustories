"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-[#79483F] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-caramel text-[#F3E5D6]">
              Echoes of Africa
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/stories">Stories</NavLink>
              <NavLink to="/map">Interactive Map</NavLink>
              <NavLink to="/folklore">Folklore</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/premium">Premium</NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-[#F3E5D6] hover:text-[#E0B1A8] transition-colors duration-200"
            >
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#F3E5D6] hover:text-[#E0B1A8] transition-colors duration-200">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" mobile>
              Home
            </NavLink>
            <NavLink to="/stories" mobile>
              Stories
            </NavLink>
            <NavLink to="/map" mobile>
              Interactive Map
            </NavLink>
            <NavLink to="/folklore" mobile>
              Folklore
            </NavLink>
            <NavLink to="/about" mobile>
              About
            </NavLink>
            <NavLink to="/contact" mobile>
              Contact
            </NavLink>
            <NavLink to="/premium" mobile>
              Premium
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ to, children, mobile }) {
  const baseClasses =
    "text-[#F3E5D6] hover:bg-[#E0B1A8] hover:text-[#79483F] px-3 py-2 rounded-md text-sm font-prata transition-colors duration-200"
  const mobileClasses = "block text-base"
  const desktopClasses = "text-sm"

  return (
    <Link to={to} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {children}
    </Link>
  )
}

export default Navbar

