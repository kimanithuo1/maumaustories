import { Link } from "react-router-dom"
import { BookOpen, Users, Target, Globe } from "lucide-react"

function About() {
  return (
    <div className="min-h-screen bg-[#F3E5D6] text-[#79483F] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-caramel text-[#79483F] mb-4">About Echoes of Africa</h1>
          <p className="max-w-3xl mx-auto text-xl text-black font-teresa">
            Amplifying the voices of Africa's past and present, one story at a time.
          </p>
        </div>

        <div className="bg-[#D7E2B6] rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-3xl font-caramel text-[#79483F] mb-4">Our Mission: Preserving Africa's Legacy</h2>
          <p className="text-lg font-prata text-[#E0B1A8] mb-4">Echoing the Untold Stories of a Continent</p>
          <p className="text-black font-teresa leading-relaxed">
            At Echoes of Africa, we are dedicated to unearthing and sharing the rich, diverse, and often overlooked
            stories that have shaped the African continent. Our mission is to bridge the gap between past and present,
            connecting generations through the power of storytelling. We believe that by amplifying these voices, we can
            foster a deeper understanding and appreciation of Africa's complex history and vibrant cultures.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-[#E0B1A8] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-prata text-[#79483F] mb-6">Our Vision</h2>
            <p className="text-black font-teresa mb-4 leading-relaxed">
              We envision a world where African history is celebrated in all its complexity and diversity. Through our
              platform, we aim to:
            </p>
            <ul className="list-disc list-inside text-black font-teresa space-y-2">
              <li>Challenge stereotypes and misconceptions about Africa</li>
              <li>Provide a platform for African voices to share their own narratives</li>
              <li>Inspire pride and connection to African heritage</li>
              <li>Educate and inform a global audience about Africa's rich history</li>
            </ul>
          </div>

          <div className="bg-[#D7E2B6] rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-prata text-[#79483F] mb-6">Our Approach</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <BookOpen className="h-6 w-6 text-[#E0B1A8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-prata text-[#79483F] mb-2">Rigorous Research</h3>
                  <p className="text-black font-teresa">
                    We collaborate with historians, archaeologists, and cultural experts to ensure the accuracy and
                    authenticity of our stories.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-[#E0B1A8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-prata text-[#79483F] mb-2">Community Engagement</h3>
                  <p className="text-black font-teresa">
                    We actively involve African communities in our storytelling process, ensuring that local
                    perspectives are represented.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-[#E0B1A8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-prata text-[#79483F] mb-2">Innovative Presentation</h3>
                  <p className="text-black font-teresa">
                    We use cutting-edge digital technologies to bring stories to life, making history accessible and
                    engaging for all ages.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-[#E0B1A8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-prata text-[#79483F] mb-2">Global Perspective</h3>
                  <p className="text-black font-teresa">
                    While focusing on Africa, we contextualize our stories within global history, highlighting Africa's
                    connections and influences worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-caramel text-[#79483F] mb-6">Join Us in Amplifying African Voices</h2>
          <p className="text-black font-teresa mb-8 max-w-2xl mx-auto">
            Whether you're a history enthusiast, a student, or simply curious about African heritage, there's a place
            for you in our community. Explore our stories, contribute your own, and be part of the journey to preserve
            and celebrate Africa's rich legacy.
          </p>
          <Link
            to="/stories"
            className="inline-block bg-[#79483F] text-[#F3E5D6] px-8 py-4 rounded-md font-prata hover:bg-[#E0B1A8] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Explore Our Stories
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About

