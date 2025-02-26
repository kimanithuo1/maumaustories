"use client"

import { useState } from "react"
import { Scroll, Calendar, Book, ChevronDown, ChevronUp } from "lucide-react"

const timelineEvents = [
  {
    year: "3100 BCE",
    event: "Ancient Egyptian civilization begins",
    details: "The unification of Upper and Lower Egypt marks the beginning of the Early Dynastic Period.",
    fullStory:
      "Around 3100 BCE, King Menes (also known as Narmer) unified Upper and Lower Egypt, marking the beginning of the Early Dynastic Period. This unification led to the birth of one of the world's oldest and most influential civilizations. The ancient Egyptians developed a complex society with advancements in art, architecture, writing (hieroglyphs), and technology. Their achievements, including the construction of the pyramids and the development of a sophisticated religious and political system, would influence cultures for millennia to come.",
  },
  {
    year: "814 BCE",
    event: "Founding of Carthage",
    details: "Phoenician Queen Dido establishes the city of Carthage in modern-day Tunisia.",
    fullStory:
      "In 814 BCE, according to legend, the Phoenician Queen Dido (also known as Elissa) founded the city of Carthage on the coast of modern-day Tunisia. Carthage would grow to become a major maritime power in the Mediterranean, rivaling the Roman Republic. The city's strategic location allowed it to dominate trade routes between the eastern and western Mediterranean. Carthage developed a unique culture, blending Phoenician traditions with local North African elements. The city-state would play a crucial role in the history of the ancient world, most notably in its conflicts with Rome in the Punic Wars.",
  },
  {
    year: "332 BCE",
    event: "Alexander the Great conquers Egypt",
    details: "The Macedonian king's conquest leads to the Ptolemaic dynasty in Egypt.",
    fullStory:
      "In 332 BCE, Alexander the Great of Macedonia conquered Egypt as part of his campaign against the Persian Empire. The Egyptians, who had been under Persian rule, welcomed Alexander as a liberator. After his death, his general Ptolemy established the Ptolemaic dynasty, which would rule Egypt for nearly three centuries. This period saw a blending of Greek and Egyptian cultures, most notably in the city of Alexandria, which became a center of learning and scholarship in the ancient world. The Ptolemaic period ended with the death of Cleopatra VII in 30 BCE, after which Egypt became a province of the Roman Empire.",
  },
  {
    year: "1st century CE",
    event: "Kingdom of Aksum rises to power",
    details: "The East African kingdom becomes a major trading empire.",
    fullStory:
      "During the 1st century CE, the Kingdom of Aksum (or Axum) in modern-day Eritrea and Ethiopia rose to become a major power in the Red Sea region. Aksum was strategically located to control trade routes between Africa and the Mediterranean world. The kingdom was known for its advanced agriculture, sophisticated stone architecture, and the development of the Ge'ez script. Aksum was also one of the first African kingdoms to adopt Christianity as its official religion in the 4th century CE. At its height, the Aksumite Empire extended across much of modern Ethiopia, Eritrea, Somalia, Yemen, and parts of Sudan.",
  },
  {
    year: "642 CE",
    event: "Arab conquest of Egypt",
    details: "The spread of Islam begins in North Africa.",
    fullStory:
      "In 642 CE, Arab Muslim armies conquered Egypt, which had been part of the Byzantine Empire. This conquest marked the beginning of the spread of Islam across North Africa. The Arabs established a new capital at Fustat (near modern Cairo) and introduced the Arabic language and Islamic culture to Egypt. Over the following centuries, Islam would spread across North Africa and into sub-Saharan Africa through trade, missionary activity, and sometimes military conquest. This process would profoundly reshape the religious, cultural, and political landscape of much of the continent.",
  },
  {
    year: "11th-16th Century CE",
    event: "Rise of the Great Zimbabwe Empire",
    details: "The Great Zimbabwe kingdom flourishes in Southern Africa, developing advanced architecture.",
    fullStory:
      "The Great Zimbabwe civilization, located in present-day Zimbabwe, thrived between the 11th and 16th centuries. It was known for its massive stone structures, advanced trade networks, and connections with Swahili coastal cities, linking it to global trade routes. The ruins of Great Zimbabwe remain a symbol of African ingenuity and architectural achievement. The empire controlled a vast territory and was a major player in the gold trade between the interior of Africa and the Indian Ocean coast.",
  },
  {
    year: "1235 CE",
    event: "Mali Empire founded",
    details: "Sundiata Keita establishes one of the largest empires in West Africa.",
    fullStory:
      "In 1235 CE, Sundiata Keita founded the Mali Empire in West Africa after defeating the Sosso king Sumanguru at the Battle of Kirina. Under Sundiata and his successors, particularly Mansa Musa, Mali grew to become one of the largest and wealthiest empires in Africa. The empire controlled key trans-Saharan trade routes and was known for its vast gold reserves. Mali's capital, Timbuktu, became a center of Islamic learning and culture. The empire's wealth and power were famously displayed during Mansa Musa's pilgrimage to Mecca in 1324-1325, where his generosity reportedly caused inflation in the cities he visited due to the amount of gold he distributed.",
  },
  {
    year: "14th-17th Century CE",
    event: "Swahili Coast Trade Flourishes",
    details: "The East African coast becomes a major trading hub linking Africa, the Middle East, and Asia.",
    fullStory:
      "Swahili city-states such as Kilwa, Mombasa, and Zanzibar thrived due to trade in gold, ivory, and spices. These cities had a rich cultural blend of African, Arab, and Persian influences, leading to the development of the Swahili language and culture. The Portuguese later disrupted this trade after arriving in the 15th century. The Swahili Coast played a crucial role in connecting the African interior with the wider Indian Ocean trade network, facilitating cultural and economic exchanges that shaped the region for centuries.",
  },
  {
    year: "1652 CE",
    event: "Dutch East India Company establishes Cape Colony",
    details: "European colonization of southern Africa begins.",
    fullStory:
      "In 1652 CE, the Dutch East India Company established a refreshment station at the Cape of Good Hope, marking the beginning of European colonization in southern Africa. Initially intended as a stopover point for ships traveling between Europe and Asia, the Cape Colony gradually expanded as more Dutch settlers (known as Boers) arrived and began farming the land. This led to conflicts with indigenous Khoikhoi and San peoples. The establishment of the Cape Colony would have far-reaching consequences for southern Africa, setting the stage for centuries of European colonization, the development of Afrikaner culture, and eventually, the system of apartheid in South Africa.",
  },
  {
    year: "1804",
    event: "Fulani Jihad and the Sokoto Caliphate",
    details: "Usman dan Fodio establishes one of the largest Islamic empires in West Africa.",
    fullStory:
      "Usman dan Fodio, a Fulani scholar, launched a jihad in northern Nigeria, overthrowing corrupt rulers and establishing the Sokoto Caliphate. The caliphate promoted Islamic education, governance, and economic development, influencing modern Nigeria's religious and political landscape. The Sokoto Caliphate became one of the largest and most powerful states in sub-Saharan Africa, lasting until British colonization in 1903.",
  },
  {
    year: "1884-1885",
    event: "Berlin Conference",
    details: "European powers divide Africa among themselves.",
    fullStory:
      "The Berlin Conference of 1884-1885, also known as the Congo Conference or West Africa Conference, regulated European colonization and trade in Africa. Organized by Otto von Bismarck, the first Chancellor of Germany, the conference was attended by representatives of 13 European countries and the United States. The conference resulted in the General Act of the Berlin Conference, which formalized the 'Scramble for Africa'. It established rules for the division of Africa among European powers, without any African representation. This event marked the peak of European colonialism in Africa and led to the rapid colonization of most of the African continent, disregarding existing political and cultural boundaries.",
  },
  {
    year: "1957",
    event: "Ghana Gains Independence",
    details: "Ghana becomes the first sub-Saharan African country to gain independence from colonial rule.",
    fullStory:
      "Under the leadership of Kwame Nkrumah, Ghana achieved independence from Britain on March 6, 1957. This inspired other African nations to seek self-rule, making Ghana a symbol of Pan-Africanism and anti-colonial movements. Nkrumah's vision of a united and prosperous Africa influenced independence movements across the continent and beyond.",
  },
  {
    year: "1960",
    event: "Year of Africa",
    details: "17 African nations gain independence in a single year.",
    fullStory:
      "1960 is often referred to as the 'Year of Africa' because 17 African nations gained independence from their European colonizers in this single year. These nations included Cameroon, Togo, Mali, Senegal, Madagascar, the Democratic Republic of Congo, Somalia, Benin, Niger, Burkina Faso, Ivory Coast, Chad, Central African Republic, Congo, Gabon, Nigeria, and Mauritania. This wave of independence marked a turning point in African history, signaling the end of colonial rule and the beginning of a new era of African self-governance.",
  },
  {
    year: "1963",
    event: "Formation of the Organization of African Unity (OAU)",
    details: "African leaders establish the OAU to promote unity and cooperation among African states.",
    fullStory:
      "On May 25, 1963, leaders from 32 African nations met in Addis Ababa, Ethiopia, to form the Organization of African Unity (OAU). The OAU aimed to promote African solidarity, coordinate efforts to achieve a better life for African people, defend the sovereignty of African states, and eradicate all forms of colonialism. The OAU played a crucial role in the decolonization of the continent and later transformed into the African Union in 2002.",
  },
  {
    year: "1976",
    event: "Soweto Uprising",
    details: "Student protests in South Africa mark a turning point in the anti-apartheid struggle.",
    fullStory:
      "On June 16, 1976, thousands of black South African students in Soweto protested against the introduction of Afrikaans as the medium of instruction in local schools. The peaceful protest turned violent when police opened fire on the students. The Soweto Uprising became a symbol of resistance against the apartheid regime and sparked widespread riots and protests across South Africa, drawing international attention to the brutality of the apartheid system.",
  },
  {
    year: "1994",
    event: "End of Apartheid in South Africa",
    details: "Nelson Mandela becomes the first democratically elected president of South Africa.",
    fullStory:
      "In 1994, South Africa held its first democratic elections in which citizens of all races could vote. This marked the official end of the apartheid system, a regime of institutionalized racial segregation and discrimination that had been in place since 1948. Nelson Mandela, who had been released from prison in 1990 after 27 years of incarceration, was elected as the country's first black president. This event was a watershed moment in African history, symbolizing the end of white minority rule in South Africa and offering hope for racial reconciliation and democratic governance across the continent.",
  },
  {
    year: "2002",
    event: "Establishment of the African Union",
    details: "The African Union replaces the OAU with a vision for greater African integration.",
    fullStory:
      "On July 9, 2002, the African Union (AU) was officially launched in Durban, South Africa, replacing the Organization of African Unity (OAU). The AU was established with the ambitious goal of accelerating the process of integration in Africa, addressing the continent's socio-economic and political problems, and promoting peace, security, and stability. The AU has played a significant role in conflict resolution, peacekeeping, and promoting economic cooperation among African nations.",
  },
  {
    year: "2011",
    event: "South Sudan Becomes Independent",
    details: "Africa's newest nation is formed after decades of conflict.",
    fullStory:
      "After years of civil war, South Sudan officially gained independence from Sudan on July 9, 2011, following a referendum in which 98% of South Sudanese voted for separation. The creation of South Sudan marked a significant moment in African history, reflecting the complex legacy of colonial borders and the ongoing process of state formation on the continent. However, the new nation has faced significant challenges, including internal conflicts and economic struggles, highlighting the complexities of nation-building in post-colonial Africa.",
  },
  {
    year: "2015",
    event: "Kenya hosts Global Entrepreneurship Summit",
    details:
      "US President Barack Obama visits Kenya for the Global Entrepreneurship Summit, highlighting Kenya's growing role in the global economy.",
    fullStory:
      "In July 2015, Kenya hosted the Global Entrepreneurship Summit, with US President Barack Obama in attendance. This event showcased Kenya's emerging status as a hub for innovation and entrepreneurship in Africa. The summit brought together entrepreneurs, investors, and business leaders from around the world, fostering connections and promoting economic growth. President Obama's visit, the first by a sitting US president to Kenya, also highlighted the country's progress and its strategic importance in East Africa.",
  },
  {
    year: "2017",
    event: "Kenya's Plastic Bag Ban",
    details: "Kenya implements one of the world's strictest bans on plastic bags, showcasing environmental leadership.",
    fullStory:
      "On August 28, 2017, Kenya implemented one of the world's toughest laws against plastic bags. The ban prohibited the use, manufacture, and importation of all plastic bags used for commercial and household packaging. Violators faced hefty fines and even imprisonment. This bold move positioned Kenya as a leader in environmental conservation in Africa and inspired similar actions in other countries. The ban has significantly reduced plastic pollution in Kenya, although challenges in implementation and alternatives remain.",
  },
  {
    year: "2018",
    event: "Reconciliation between Kenyatta and Odinga",
    details:
      "Political rivals Uhuru Kenyatta and Raila Odinga shake hands, signaling a new era of political cooperation.",
    fullStory:
      "On March 9, 2018, Kenyan President Uhuru Kenyatta and opposition leader Raila Odinga surprised the nation with a public handshake and a pledge to work together. This event, known as 'The Handshake,' marked the end of a period of intense political rivalry and post-election violence. The two leaders initiated the Building Bridges Initiative (BBI), aimed at addressing long-standing issues in Kenyan politics and society. While controversial, this reconciliation significantly eased political tensions in the country and opened discussions on constitutional reforms.",
  },
  {
    year: "2020",
    event: "Kenya elected to UN Security Council",
    details: "Kenya wins a non-permanent seat on the UN Security Council for 2021-2022.",
    fullStory:
      "In June 2020, Kenya was elected as a non-permanent member of the United Nations Security Council for the 2021-2022 term. This marked Kenya's third time serving on the Council, having previously served in 1973-1974 and 1997-1998. Kenya's campaign focused on themes of building bridges, peace and security, justice, human rights, and sustainable development. This election highlighted Kenya's growing influence in global affairs and its commitment to multilateralism and peaceful conflict resolution.",
  },
  {
    year: "2022",
    event: "William Ruto elected as Kenya's 5th President",
    details: "William Ruto wins a closely contested election, marking a new chapter in Kenya's political history.",
    fullStory:
      "On August 15, 2022, William Ruto was declared the winner of Kenya's presidential election, succeeding Uhuru Kenyatta. Ruto, who ran on a platform emphasizing economic empowerment for the common citizen (what he termed the 'hustler nation'), won a narrow victory over veteran opposition leader Raila Odinga. The election was notable for its peaceful conduct and the Supreme Court's validation of the results despite challenges. Ruto's presidency marks a significant shift in Kenya's political landscape, with implications for the country's economic policies and regional relations.",
  },
]

function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showFullStory, setShowFullStory] = useState(false)
  const [visibleEvents, setVisibleEvents] = useState(10)

  const sortedEvents = [...timelineEvents].sort((a, b) => {
    const yearA = Number.parseInt(a.year.split(" ")[0])
    const yearB = Number.parseInt(b.year.split(" ")[0])
    return yearB - yearA
  })

  const TimelineEvent = ({ event, index }) => (
    <div className={`relative mb-16 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
      <div className="flex items-center">
        <div
          className={`w-12 h-12 rounded-full ${
            selectedEvent === event ? "bg-[#D7E2B6] border-4 border-[#79483F]" : "bg-[#E0B1A8]"
          } absolute left-1/2 md:left-auto md:right-full md:mr-8 transform -translate-x-1/2 md:translate-x-0 cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg`}
          onClick={() => setSelectedEvent(selectedEvent === event ? null : event)}
        >
          <Calendar className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#79483F]" />
        </div>
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
          <div className="bg-[#D7E2B6] p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border-2 border-[#79483F]">
            <div className="text-3xl font-caramel text-[#79483F] mb-2">{event.year}</div>
            <h3 className="text-2xl font-prata mb-2 text-[#79483F]">{event.event}</h3>
            {selectedEvent === event && (
              <>
                <p className="mt-4 text-black font-teresa leading-relaxed text-lg">
                  {showFullStory ? event.fullStory : event.details}
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <button
                    onClick={() => setShowFullStory(!showFullStory)}
                    className="inline-flex items-center text-[#79483F] hover:text-[#E0B1A8] transition-colors duration-200"
                  >
                    <Book className="h-5 w-5 mr-2" />
                    <span className="font-prata text-lg">{showFullStory ? "Show less" : "Read full story"}</span>
                  </button>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="font-prata text-lg text-[#79483F] hover:text-[#E0B1A8] transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
            {selectedEvent !== event && (
              <button
                onClick={() => setSelectedEvent(event)}
                className="mt-4 inline-flex items-center text-[#79483F] hover:text-[#E0B1A8] transition-colors duration-200"
              >
                <span className="font-prata text-lg mr-2">Learn more</span>
                <Scroll className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="bg-[#F3E5D6] py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/vintage-paper-texture.jpg')] opacity-30 mix-blend-multiply"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-caramel mb-4 relative inline-block text-[#79483F]">
            African History Timeline
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#E0B1A8]"></div>
          </h2>
          <p className="text-xl font-teresa italic text-[#79483F] opacity-80">
            Journey through the pivotal moments that shaped the African continent
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#E0B1A8] md:left-auto md:right-1/2 md:mr-8"></div>
          {sortedEvents.slice(0, visibleEvents).map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
        {visibleEvents < sortedEvents.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleEvents(visibleEvents + 5)}
              className="inline-flex items-center px-6 py-3 bg-[#79483F] text-[#F3E5D6] rounded-full font-prata hover:bg-[#E0B1A8] transition-colors duration-200"
            >
              Show more <ChevronDown className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
        {visibleEvents > 10 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setVisibleEvents(10)}
              className="inline-flex items-center px-6 py-3 bg-[#79483F] text-[#F3E5D6] rounded-full font-prata hover:bg-[#E0B1A8] transition-colors duration-200"
            >
              Show less <ChevronUp className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Timeline

