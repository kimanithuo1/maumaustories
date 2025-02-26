import { Mail, Send } from "lucide-react"

function Newsletter() {
  return (
    <section className="bg-[#2C1810] py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/vintage-texture.png')] opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[url('/vintage-border.png')] bg-repeat-x opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('/vintage-border.png')] bg-repeat-x opacity-30 transform rotate-180"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#F5F1E9] p-8 sm:p-12 shadow-xl relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#8B4513]"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#8B4513]"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#8B4513]"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#8B4513]"></div>

          <div className="text-center max-w-2xl mx-auto">
            <Mail className="w-12 h-12 mx-auto mb-6 text-[#8B4513]" />

            <h2 className="text-3xl font-caramel tracking-tight text-[#2C1810] sm:text-4xl mb-2">Want more stories?</h2>
            <h3 className="text-2xl font-prata text-[#8B4513] mb-4">Sign up for our newsletter.</h3>

            <p className="text-[#5C3D2E] font-teresa mb-8">
              Get the latest stories, updates, and exclusive content delivered straight to your inbox. Journey with us
              through Kenya's rich history.
            </p>

            <form className="mt-8 sm:flex justify-center">
              <div className="min-w-0 flex-1">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  required
                  className="block w-full px-5 py-3 text-base text-[#2C1810] placeholder-[#5C3D2E] bg-white border border-[#8B4513] shadow-sm focus:ring-2 focus:ring-[#8B4513] focus:border-[#8B4513]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full px-5 py-3 text-base font-prata text-[#F5F1E9] bg-[#8B4513] border border-transparent shadow hover:bg-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-offset-2 sm:px-10 transition-colors duration-300"
                >
                  <span className="flex items-center justify-center">
                    Subscribe
                    <Send className="ml-2 h-5 w-5" />
                  </span>
                </button>
              </div>
            </form>

            <p className="mt-4 text-sm text-[#5C3D2E]">
              We care about your privacy. Read our{" "}
              <a href="#" className="underline hover:text-[#8B4513]">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

