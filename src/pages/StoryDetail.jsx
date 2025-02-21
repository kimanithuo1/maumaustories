"use client"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

// This would typically come from an API or database
const storyDetails = {
  1: {
    title: "The Whisper of Rebellion",
    content: `The moon hung low over the Giriama lands, casting long shadows across the silent village. Mekatilili wa Menza stood at the edge of the forest, her eyes scanning the darkness. The cool night air carried whispers of discontent, of anger simmering just beneath the surface.

    She closed her eyes, feeling the weight of her people's suffering. The British had come with their guns and their laws, pushing the Giriama from their ancestral lands, demanding taxes and labor. But tonight, everything would change.

    Mekatilili opened her eyes, a fire burning within them. She raised her arms, and the spirits of her ancestors seemed to swirl around her. With a voice that carried the strength of generations, she began to speak.

    "My brothers, my sisters," she called out, her words carrying through the night. "We are the children of this land. Our roots go deep into this soil. And now, we must stand together against those who would tear us from it."

    As if summoned by her words, figures began to emerge from the shadows. Men and women, young and old, their faces set with determination. Mekatilili felt a surge of pride. This was her people, the proud Giriama, ready to fight for their freedom.

    "The British think they can break us," she continued, her voice rising. "They think they can make us bow, make us forget who we are. But we are like the baobab tree – our roots run deep, our spirits stand tall. We will not be moved!"

    A murmur of agreement rippled through the crowd. Mekatilili saw the spark in their eyes, the same fire that burned in her heart. She knew then that this was just the beginning. The whisper of rebellion would grow into a roar that would shake the very foundations of colonial rule.

    As the night wore on, plans were made, oaths were sworn. The Giriama would resist, in ways big and small. They would refuse to pay taxes, refuse to work on British plantations. And if the colonizers came with force, they would find not a docile people, but a united front, ready to defend their land and their way of life.

    As dawn broke over the horizon, Mekatilili looked out at her people. The seed of rebellion had been planted. Now, it would grow, nurtured by the strength and courage of the Giriama. The British Empire was vast and powerful, but it had never faced the likes of Mekatilili wa Menza and her people.

    The whisper of rebellion had begun. Soon, it would echo across all of Kenya, a call to freedom that could not be silenced.`,
    image:
      "https://images.unsplash.com/photo-1532188363366-3a1b2ac4a338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Wanjiru Kamau",
    date: "March 16, 2020",
  },
  // Add other story details here...
}

function StoryDetail() {
  const { id } = useParams()
  const [story, setStory] = useState(null)

  useEffect(() => {
    // In a real app, this would be an API call
    setStory(storyDetails[id])
  }, [id])

  if (!story) {
    return <div className="text-center py-20 font-teresa text-[#385471]">Loading...</div>
  }

  return (
    <div className="bg-[#DFE6EB] min-h-screen py-12">
      <article className="max-w-3xl mx-auto bg-[#DFE6EB] shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-96 object-cover" src={story.image || "/placeholder.svg"} alt={story.title} />
        <div className="p-8">
          <h1 className="text-4xl font-caramel text-[#385471] mb-4">{story.title}</h1>
          <div className="flex items-center mb-6">
            <img
              className="h-12 w-12 rounded-full mr-4"
              src={`https://i.pravatar.cc/150?u=${story.author}`}
              alt={story.author}
            />
            <div>
              <p className="text-lg font-prata text-[#385471]">{story.author}</p>
              <p className="text-[#385471] font-teresa">{story.date}</p>
            </div>
          </div>
          <div className="prose max-w-none">
            {story.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-[#385471] font-teresa">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default StoryDetail

