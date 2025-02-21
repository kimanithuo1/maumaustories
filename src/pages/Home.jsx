import { Link } from "react-router-dom"
import FeaturedStories from "../components/FeaturedStories"
import Newsletter from "../components/Newsletter"
import Timeline from "../components/Timeline"

function Home() {
  return (
    <div className="bg-background">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-caramel text-tertiary sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Unveiling Untold Stories:</span>{" "}
                  <span className="block text-secondary xl:inline">The Mau Mau Era</span>
                </h1>
                <p className="mt-3 text-base text-tertiary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Dive into the authentic narratives of resistance, resilience, and revolution that shaped Kenya's
                  journey to independence.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/stories"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-prata rounded-md text-background bg-secondary hover:bg-primary md:py-4 md:text-lg md:px-10"
                    >
                      Explore Stories
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/about"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-prata rounded-md text-tertiary bg-background hover:bg-primary hover:text-background md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
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
            src="/hero-image-ai.jpg"
            alt="Mau Mau fighters in the forest"
          />
        </div>
      </div>
      <FeaturedStories />
      <Timeline />
      <Newsletter />
    </div>
  )
}

export default Home

