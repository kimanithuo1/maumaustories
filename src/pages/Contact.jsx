"use client"

import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="bg-[#DFE6EB]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-caramel text-[#385471] sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-[#385471] font-teresa">
            We'd love to hear from you. Share your stories, ask questions, or just say hello!
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-prata text-[#385471]">Get in Touch</h3>
            <p className="mt-2 text-base text-[#385471] font-teresa">
              Have a story to share? Want to contribute to our project? We're always looking for new voices and
              perspectives.
            </p>
            <dl className="mt-8 text-base text-[#385471] font-teresa">
              <div className="mt-6">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-[#6A4BB7]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3">contact@maumaustories.com</span>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="text-lg font-prata text-[#385471]">Send us a message</h3>
            <form onSubmit={handleSubmit} className="mt-6">
              <div>
                <label htmlFor="name" className="block text-sm font-prata text-[#385471]">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#6A4BB7] focus:border-[#6A4BB7] border-[#385471] rounded-md bg-[#DFE6EB] text-[#385471]"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-prata text-[#385471]">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#6A4BB7] focus:border-[#6A4BB7] border-[#385471] rounded-md bg-[#DFE6EB] text-[#385471]"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-prata text-[#385471]">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-[#6A4BB7] focus:border-[#6A4BB7] border-[#385471] rounded-md bg-[#DFE6EB] text-[#385471]"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-prata text-[#DFE6EB] bg-[#6A4BB7] hover:bg-[#37ADD5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6A4BB7]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

