import { Link } from "react-router-dom"
import FeaturedStories from "../components/FeaturedStories"
import Newsletter from "../components/Newsletter"
import Timeline from "../components/Timeline"
import StyledQuote from "../components/StyledQuote"

function Home() {
  return (
    <div className="bg-[#F3E5D6]">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-caramel text-[#79483F] sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Echoes of Africa:</span>{" "}
                  <span className="block text-[#E0B1A8] xl:inline">Untold Stories of Resilience</span>
                </h1>
                <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Journey through time and discover the hidden narratives of African heroes, from ancient empires to
                  modern-day legends.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/stories"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-prata rounded-md text-[#F3E5D6] bg-[#79483F] hover:bg-[#E0B1A8] transition-colors duration-200 md:py-4 md:text-lg md:px-10"
                    >
                      Explore Stories
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/map"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-prata rounded-md text-[#79483F] bg-[#D7E2B6] hover:bg-[#E0B1A8] transition-colors duration-200 md:py-4 md:text-lg md:px-10"
                    >
                      Interactive Map
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3E5D6] via-transparent to-transparent lg:via-[#F3E5D6]/20 lg:to-[#F3E5D6]/20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#D7E2B6] rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-caramel text-[#79483F] mb-4">
            Echoes of Africa: Voices of Resistance and Triumph
          </h2>
          <p className="text-black font-teresa mb-4">
            Immerse yourself in the rich tapestry of African history, where every story echoes with the resilience and
            spirit of a continent.
          </p>
          <p className="text-black font-teresa">
            From the whispers of ancient civilizations to the roars of independence movements, our collection brings to
            life the untold tales of African heroes and heroines who shaped the course of history.
          </p>
        </div>
      </div>

      <FeaturedStories />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StyledQuote
          quote="The struggle for freedom is the struggle for dignity. It is the struggle for the recognition of the inherent worth of every human being."
          author="Jomo Kenyatta"
        />
      </div>
      <Timeline />
      <Newsletter />
    </div>
  )
}

export default Home

