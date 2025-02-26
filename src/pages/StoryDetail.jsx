"use client"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const storyDetails = {
  1: {
    title: "The Wrath of the Oracle – The Rise of Menya Araap Kisiara",
    content: `The night smelled of burning flesh and wet earth. The dying warrior reached for Menya's arm, his breath hot with blood. "They will return," he whispered. "And they will burn all we have left."

    Menya knew what had to be done. He had trained with the elders, learned the art of war, but this was different. This was personal. The Maasai were fierce, their warriors swift as the wind, their spears long enough to pierce a man through the heart before he saw his killer.

    With his people trembling in fear, Menya stood before them, the flames behind him making him seem larger than life. "We do not fight for land, or for cows," he declared. "We fight for our children, for the spirits of our fathers. If they want war, then we shall give them a storm."

    The final battle was chaos. Spears clashed, war cries filled the air, and Menya led his warriors into the heart of the enemy camp. By dawn, the blood of the Maasai ran into the soil. The prophecy had been fulfilled—his name would be remembered.`,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    author: "Ngugi wa Thiong'o",
    date: "June 1, 2023",
    era: "Pre-Colonial",
  },
  2: {
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
    date: "June 2, 2023",
    era: "Colonial",
  },
  3: {
    title: "Shadows in the Aberdares",
    content: `Field Marshal Muthoni crouched in the misty forest, her heart pounding. She was no longer just a woman; she was a symbol of defiance, a ghost that haunted the colonial forces. Tonight, she would strike again.

    The cool air of the Aberdares clung to her skin as she signaled to her fellow Mau Mau fighters. They moved silently through the undergrowth, their bodies painted with mud to blend into the shadows. Each carried a panga, sharpened to a deadly edge.

    As they neared the British camp, Muthoni could hear the low murmur of voices, the clink of mess tins. She closed her eyes, steeling herself for what was to come. This was not just about revenge; it was about freedom, about reclaiming what was rightfully theirs.

    The attack was swift and brutal. Muthoni led the charge, her war cry piercing the night air. The British soldiers, caught off guard, scrambled for their weapons. But it was too late. The Mau Mau were among them, their pangas flashing in the moonlight.

    As dawn broke, Muthoni and her fighters melted back into the forest. Behind them, they left a camp in ruins, a message written in blood: the Mau Mau would not be defeated.

    But even as she felt the thrill of victory, Muthoni knew that the war was far from over. The British would retaliate, and when they did, it would be the innocent who would suffer. Yet she could not stop. For in her heart, she knew that every blow struck against the colonial forces was a step closer to freedom.

    As she disappeared into the mist, Field Marshal Muthoni whispered a prayer to the spirits of the Aberdares. "Give us strength," she pleaded. "For the road ahead is long, and the price of freedom is high."`,
    image:
      "https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    author: "Ochieng Odhiambo",
    date: "June 3, 2023",
    era: "Colonial",
  },
  4: {
    title: "The Last Stand of the Leopard",
    content: `Dedan Kimathi, known as 'The Leopard', felt the noose of betrayal tightening. But even as he ran through the forest, he knew his capture would only fuel the flames of revolution he had ignited.

    The British were closing in. He could hear their dogs barking in the distance, smell the acrid scent of their cigarettes on the wind. But Kimathi was not afraid. He had faced death a thousand times before, and each time he had emerged stronger.

    As he paused to catch his breath, memories flashed through his mind. The day he had taken the oath to join the Mau Mau. The first time he had led a raid against a British settlement. The faces of his comrades who had fallen in battle.

    He knew that his time was running out. But even in these final moments, Kimathi felt a sense of triumph. For he had shown his people that it was possible to resist, to fight back against the oppressors who had stolen their land and their freedom.

    The sound of the dogs grew louder. Kimathi straightened his back, gripped his rifle tighter. He would not go down without a fight. For he was Dedan Kimathi, the Leopard of the Forest, and his spirit would live on long after his body had fallen.

    As the first British soldier burst into the clearing, Kimathi raised his rifle. In that moment, he was not just a man, but a symbol of resistance, a beacon of hope for all those who yearned for freedom.

    The forest echoed with the sound of gunfire, and the legend of the Leopard was born.`,
    image:
      "https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    author: "Muthoni Garland",
    date: "June 4, 2023",
    era: "Colonial",
  },
  5: {
    title: "The Lioness of Pumwani",
    content: `Mary Muthoni Nyanjiru felt the weight of oppression on her shoulders. With a war cry that would echo through generations, she led the charge against Thuku's arrest, her courage igniting a fire in the hearts of women across Kenya.

    The streets of Nairobi were tense that day. Word had spread quickly of Harry Thuku's arrest, and the people were angry. But it was Mary who stood at the forefront, her voice rising above the crowd.

"We will not be silenced!" she cried, her eyes blazing with determination. "They have taken our brother, but they cannot take our spirit!"

The women around her, inspired by her courage, began to chant and sing. Mary led them towards the police station where Thuku was being held, their voices growing louder with each step.

As they approached, the police formed a line, their rifles at the ready. But Mary did not falter. She stepped forward, her chin held high.

"We are not afraid of your guns," she declared. "We are the mothers of this land, and we will not stand by while you imprison our leaders."

For a moment, time seemed to stand still. Then, with a cry that would be remembered for generations, Mary tore off her clothes in a traditional act of defiance and curse.

"If you want to take Thuku, you'll have to kill us all first!"

Her act of bravery sparked a fire in the crowd. Women surged forward, following Mary's lead. The police, unprepared for such fierce resistance from women, were momentarily stunned.

Though the protest was eventually dispersed and Thuku remained in custody, something had changed that day. Mary Muthoni Nyanjiru had shown that women could be at the forefront of the struggle for freedom.

Her courage would inspire countless others in the years to come, as Kenya continued its fight for independence. The Lioness of Pumwani had roared, and her echo would be heard for generations.`,
    image:
      "https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2146&q=80",
    author: "Yvonne Adhiambo Owuor",
    date: "June 5, 2023",
    era: "Colonial",
  },
  6: {
    title: "The Man Who Knew Too Much – The Assassination of Tom Mboya",
    content: `The letter was slipped under his door at midnight.

    Mboya's hands trembled as he read the words: There is a price for knowing too much.

    He had always known politics was dangerous, but this—this was different. He had been warned before. Told to step back, to stop asking questions. But Tom Mboya was not a man who could be silenced.

    As dawn broke over Nairobi, Mboya made his way to his office. The streets were already bustling, but he barely noticed. His mind was racing, piecing together the fragments of information he had gathered over the past months.

    Corruption at the highest levels of government. Secret deals with foreign powers. A plot that could undermine the very foundation of Kenya's hard-won independence.

    He knew he should be afraid, but all he felt was a grim determination. He had fought too hard for his country's freedom to watch it slip away now.

    At 1:05 PM, Mboya stepped out of a pharmacy on Government Road. The sun was high in the sky, the street crowded with lunchtime traffic.

    He never saw the gunman.

    A single shot rang out, cutting through the bustle of the city. Mboya staggered, clutching his chest. As he fell, he saw the shadow of his killer disappear into the crowd.

    In his final moments, as the life drained from him, Mboya's thoughts were not of himself, but of his country. He had tried to warn them, to expose the rot at the core of the government. Now, it would be up to others to carry on the fight.

    As sirens wailed in the distance, Tom Mboya, the man who knew too much, closed his eyes for the last time. But the truth he had fought to reveal would not die with him. It would live on, a spark of hope in the darkness, waiting for someone brave enough to fan it into a flame.

    The people of Kenya would mourn. They would protest. But the truth of who ordered his death would remain buried—locked away in the minds of powerful men, a secret that would shape the nation's future for decades to come.`,
    image:
      "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Binyavanga Wainaina",
    date: "June 6, 2023",
    era: "Post-Colonial",
  },
}

function StoryDetail() {
  const { id } = useParams()
  const [story, setStory] = useState(null)

  useEffect(() => {
    setStory(storyDetails[id])
  }, [id])

  if (!story) {
    return <div className="text-center py-20 font-teresa text-text">Loading...</div>
  }

  return (
    <div className="bg-background min-h-screen py-12">
      <article className="max-w-4xl mx-auto bg-tertiary shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-96 object-cover" src={story.image || "/placeholder.svg"} alt={story.title} />
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-prata text-primary">{story.era} Era</span>
            <span className="text-sm font-teresa text-text">{story.date}</span>
          </div>
          <h1 className="text-4xl font-caramel text-primary mb-4">{story.title}</h1>
          <div className="flex items-center mb-6">
            <img
              className="h-12 w-12 rounded-full mr-4"
              src={`https://i.pravatar.cc/150?u=${story.author}`}
              alt={story.author}
            />
            <p className="text-lg font-prata text-text">{story.author}</p>
          </div>
          <div className="prose max-w-none">
            {story.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-text font-teresa text-lg leading-relaxed">
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

