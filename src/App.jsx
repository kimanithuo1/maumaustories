"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Stories from "./pages/Stories"
import About from "./pages/About"
import Contact from "./pages/Contact"
import StoryDetail from "./pages/StoryDetail"
import InteractiveMap from "./components/InteractiveMap"
import Folklore from "./pages/Folklore"
import Premium from "./pages/Premium"
import Subscribe from "./pages/Subscribe"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <Router>
      <div className={`flex flex-col min-h-screen font-teresa ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:id" element={<StoryDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/folklore" element={<Folklore />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

