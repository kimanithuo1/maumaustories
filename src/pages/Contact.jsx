"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isWriter: false,
    writingExperience: "",
    portfolio: "",
  })

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your server
    setFormData({
      name: "",
      email: "",
      message: "",
      isWriter: false,
      writingExperience: "",
      portfolio: "",
    })
  }

  return (
    <div className="min-h-screen bg-[#F3E5D6] text-[#79483F] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-caramel text-[#79483F] mb-4">Contact Echoes of Africa</h1>
          <p className="max-w-3xl mx-auto text-xl text-black font-teresa">
            We'd love to hear from you. Share your stories, ask questions, or just say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#D7E2B6] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-prata text-[#79483F] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-black">
                <Mail className="h-6 w-6 text-[#E0B1A8]" />
                <span className="font-teresa">contact@echoesofafrica.com</span>
              </div>
              <div className="flex items-center space-x-4 text-black">
                <Phone className="h-6 w-6 text-[#E0B1A8]" />
                <span className="font-teresa">+254 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-4 text-black">
                <MapPin className="h-6 w-6 text-[#E0B1A8]" />
                <span className="font-teresa">Nairobi, Kenya</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-prata text-[#79483F] mb-4">Join Our Community</h3>
              <p className="text-black font-teresa">
                Have a story to share? Want to contribute to our project? We're always looking for new voices and
                perspectives to add to the Echoes of Africa.
              </p>
            </div>
          </div>

          <div className="bg-[#E0B1A8] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-prata text-[#79483F] mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-prata text-[#79483F] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-[#79483F] focus:ring-2 focus:ring-[#79483F] focus:border-transparent bg-[#F3E5D6] text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-prata text-[#79483F] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-[#79483F] focus:ring-2 focus:ring-[#79483F] focus:border-transparent bg-[#F3E5D6] text-black"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="isWriter"
                  id="isWriter"
                  checked={formData.isWriter}
                  onChange={handleChange}
                  className="rounded border-[#79483F] text-[#79483F] focus:ring-[#79483F]"
                />
                <label htmlFor="isWriter" className="text-sm font-teresa text-black">
                  I want to be featured as a writer
                </label>
              </div>

              {formData.isWriter && (
                <>
                  <div>
                    <label htmlFor="writingExperience" className="block text-sm font-prata text-[#79483F] mb-2">
                      Writing Experience
                    </label>
                    <textarea
                      name="writingExperience"
                      id="writingExperience"
                      value={formData.writingExperience}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 rounded-md border border-[#79483F] focus:ring-2 focus:ring-[#79483F] focus:border-transparent bg-[#F3E5D6] text-black"
                      placeholder="Tell us about your writing experience..."
                    />
                  </div>
                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-prata text-[#79483F] mb-2">
                      Portfolio Link (Optional)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-[#79483F] focus:ring-2 focus:ring-[#79483F] focus:border-transparent bg-[#F3E5D6] text-black"
                      placeholder="https://your-portfolio.com"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-prata text-[#79483F] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-[#79483F] focus:ring-2 focus:ring-[#79483F] focus:border-transparent bg-[#F3E5D6] text-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#79483F] text-[#F3E5D6] px-6 py-3 rounded-md font-prata hover:bg-[#E0B1A8] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

