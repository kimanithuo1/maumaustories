import { Link } from "react-router-dom"

function Premium() {
  return (
    <div className="bg-[#F3E5D6] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-caramel text-[#79483F] mb-8 text-center">Premium Content</h1>
        <p className="text-lg font-teresa text-black mb-12 max-w-3xl mx-auto text-center">
          Unlock exclusive access to in-depth stories, interactive experiences, and expert insights into African history
          and culture.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#D7E2B6] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-prata text-[#79483F] mb-4">Extended Stories</h2>
            <p className="text-black font-teresa mb-4">
              Dive deeper into our most popular tales with extended versions, including additional historical context
              and character development.
            </p>
            <Link
              to="/premium/stories"
              className="inline-block bg-[#79483F] text-[#F3E5D6] px-4 py-2 rounded font-prata hover:bg-[#E0B1A8] transition-colors duration-200"
            >
              Explore Extended Stories
            </Link>
          </div>

          <div className="bg-[#E0B1A8] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-prata text-[#79483F] mb-4">Interactive Timelines</h2>
            <p className="text-black font-teresa mb-4">
              Experience African history through interactive timelines that bring key events and figures to life.
            </p>
            <Link
              to="/premium/timelines"
              className="inline-block bg-[#79483F] text-[#F3E5D6] px-4 py-2 rounded font-prata hover:bg-[#D7E2B6] transition-colors duration-200"
            >
              Explore Timelines
            </Link>
          </div>

          <div className="bg-[#D7E2B6] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-prata text-[#79483F] mb-4">Expert Interviews</h2>
            <p className="text-black font-teresa mb-4">
              Gain insights from historians, cultural experts, and modern African leaders through exclusive interviews
              and discussions.
            </p>
            <Link
              to="/premium/interviews"
              className="inline-block bg-[#79483F] text-[#F3E5D6] px-4 py-2 rounded font-prata hover:bg-[#E0B1A8] transition-colors duration-200"
            >
              Watch Interviews
            </Link>
          </div>

          <div className="bg-[#E0B1A8] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-prata text-[#79483F] mb-4">Virtual Tours</h2>
            <p className="text-black font-teresa mb-4">
              Take virtual tours of historical sites and museums across Africa, bringing ancient civilizations and
              cultures to life from the comfort of your home.
            </p>
            <Link
              to="/premium/tours"
              className="inline-block bg-[#79483F] text-[#F3E5D6] px-4 py-2 rounded font-prata hover:bg-[#D7E2B6] transition-colors duration-200"
            >
              Start Virtual Tours
            </Link>
          </div>

          <div className="bg-[#D7E2B6] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-prata text-[#79483F] mb-4">Educational Resources</h2>
            <p className="text-black font-teresa mb-4">
              Access a wealth of educational materials, including lesson plans, worksheets, and interactive quizzes
              perfect for students and educators.
            </p>
            <Link
              to="/premium/education"
              className="inline-block bg-[#79483F] text-[#F3E5D6] px-4 py-2 rounded font-prata hover:bg-[#E0B1A8] transition-colors duration-200"
            >
              Explore Resources
            </Link>
          </div>

          <div className="bg-[#E0B1A8] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-prata text-[#79483F] mb-4">Exclusive Podcasts</h2>
            <p className="text-black font-teresa mb-4">
              Listen to our exclusive podcast series featuring in-depth discussions on African history, culture, and
              contemporary issues.
            </p>
            <Link
              to="/premium/podcasts"
              className="inline-block bg-[#79483F] text-[#F3E5D6] px-4 py-2 rounded font-prata hover:bg-[#D7E2B6] transition-colors duration-200"
            >
              Listen to Podcasts
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/subscribe"
            className="inline-block bg-[#79483F] text-[#F3E5D6] px-8 py-4 rounded-lg font-prata text-xl hover:bg-[#E0B1A8] transition-colors duration-200 shadow-lg"
          >
            Subscribe to Premium
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Premium

