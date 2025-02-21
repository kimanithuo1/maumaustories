import { Link } from "react-router-dom"

const featuredStories = [
  {
    id: 1,
    title: "The Whisper of Rebellion",
    excerpt:
      "In the dead of night, Mekatilili's eyes gleamed with fierce determination. The British had pushed too far, and now, with ancient spirits guiding her, she would ignite a fire of resistance that would burn through the Giriama lands.",
    image: "/mekatilili-ai.jpg",
    author: "Wanjiru Kamau",
  },
  {
    id: 2,
    title: "Shadows in the Aberdares",
    excerpt:
      "Field Marshal Muthoni crouched in the misty forest, her heart pounding. She was no longer just a woman; she was a symbol of defiance, a ghost that haunted the colonial forces. Tonight, she would strike again.",
    image: "/muthoni-ai.jpg",
    author: "Ochieng Odhiambo",
  },
  {
    id: 3,
    title: "The Last Stand of the Leopard",
    excerpt:
      "Dedan Kimathi, known as 'The Leopard', felt the noose of betrayal tightening. But even as he ran through the forest, he knew his capture would only fuel the flames of revolution he had ignited.",
    image: "/kimathi-ai.jpg",
    author: "Ngugi wa Thiong'o",
  },
]

function FeaturedStories() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-caramel text-tertiary sm:text-4xl">Featured Stories</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-tertiary sm:mt-4">
            Step into the past and experience the untold tales of Kenya's heroes and heroines.
          </p>
        </div>
        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {featuredStories.map((story) => (
            <div key={story.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={story.image || "/placeholder.svg"} alt={story.title} />
              </div>
              <div className="flex-1 bg-background p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link to={`/stories/${story.id}`} className="block mt-2">
                    <p className="text-xl font-prata text-tertiary">{story.title}</p>
                    <p className="mt-3 text-base text-tertiary">{story.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{story.author}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={`/authors/${story.author.split(" ")[0].toLowerCase()}.jpg`}
                      alt={story.author}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-prata text-tertiary">{story.author}</p>
                    <div className="flex space-x-1 text-sm text-tertiary">
                      <time dateTime="2020-03-16">Mar 16, 2020</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedStories

