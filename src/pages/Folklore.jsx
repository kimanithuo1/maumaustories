import { Link } from "react-router-dom"

const folkloreStories = [
  {
    id: "shaka-zulu",
    title: "The Rise of Shaka Zulu: The Spear and the Storm",
    excerpt:
      "Born in 1787 to a minor Zulu chief, Shaka's early years were spent in exile, enduring humiliation and hardship. But adversity breeds warriors...",
    image:
      "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "amina-zazzau",
    title: "Amina of Zazzau: The Warrior Queen of the Sahel",
    excerpt:
      "In the 16th century, the Sahel witnessed the rise of Queen Amina, a woman as fierce as the desert sun. She was not content with the throne of Zazzau...",
    image:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "nzinga-mbande",
    title: "Nzinga Mbande: The Cunning Serpent of Angola",
    excerpt:
      "The Portuguese came with crosses and muskets, but Nzinga Mbande, queen of Ndongo and Matamba (modern-day Angola), met them with steel and guile...",
    image:
      "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "dahomey-amazons",
    title: "The Dahomey Amazons: Sisters of War",
    excerpt:
      "In the Kingdom of Dahomey (modern-day Benin), men were not the fiercest warriors—women were. The Dahomey Amazons, an elite female military unit...",
    image:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "samori-toure",
    title: "Samori Touré: The Last Emperor of the Mandé",
    excerpt:
      "In the late 19th century, as European empires carved up Africa, Samori Touré stood defiant. He forged the Wassoulou Empire, training his warriors in modern warfare...",
    image:
      "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "koitalel-arap-samoei",
    title: "Koitalel Arap Samoei: The Seer Who Fought the British",
    excerpt:
      "In the lush hills of Kenya, the Nandi leader Koitalel Arap Samoei foresaw the British invasion. He waged a guerrilla war against the railway construction...",
    image:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "yaa-asantewaa",
    title: "Yaa Asantewaa: The Last War of the Ashanti",
    excerpt:
      "When the British demanded the Golden Stool of the Ashanti, a sacred symbol of their sovereignty, they expected surrender. Instead, they got war...",
    image:
      "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "mekatilili-wa-menza",
    title: "Mekatilili wa Menza: The Lioness of the Giriama",
    excerpt:
      "In the coastal lands of Kenya, colonial taxation and forced labor sparked fury. Mekatilili wa Menza, a fearless Giriama woman, stood against the British...",
    image:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
]

function Folklore() {
  return (
    <div className="bg-[#F3E5D6] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-caramel text-[#79483F] mb-8 text-center">
          Legends of Africa: Warriors of Honor, Blood, and Destiny
        </h1>
        <p className="text-lg font-teresa text-black mb-12 max-w-3xl mx-auto text-center">
          Africa's history is carved in blood, fire, and rebellion. From the golden empires of Mali to the misty
          highlands of Kenya, warriors have risen against invaders, defied tyranny, and cemented their names in
          folklore. These are their stories, tales of resilience, heroism, and sacrifice that have echoed through
          generations.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {folkloreStories.map((story) => (
            <div key={story.id} className="bg-[#D7E2B6] rounded-lg shadow-lg overflow-hidden">
              <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-prata text-[#79483F] mb-4">{story.title}</h2>
                <p className="text-black font-teresa mb-4">{story.excerpt}</p>
                <Link
                  to={`/stories/${story.id}`}
                  className="inline-block bg-[#79483F] text-[#F3E5D6] px-4 py-2 rounded font-prata hover:bg-[#E0B1A8] transition-colors duration-200"
                >
                  Read full story
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Folklore

