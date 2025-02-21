"use client"

import { useState } from "react"

const timelineEvents = [
  { year: 1895, event: "East Africa Protectorate established by British" },
  { year: 1920, event: "Kenya becomes a British colony" },
  { year: 1944, event: "Kenya African Union (KAU) formed" },
  { year: 1952, event: "State of Emergency declared, Mau Mau Uprising begins" },
  { year: 1953, event: "Jomo Kenyatta sentenced to 7 years imprisonment" },
  { year: 1956, event: "Dedan Kimathi captured" },
  { year: 1959, event: "State of Emergency ends" },
  { year: 1963, event: "Kenya gains independence" },
  { year: 1964, event: "Kenya becomes a republic, Jomo Kenyatta as first president" },
]

function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-caramel text-tertiary mb-8 text-center">
          Timeline of Kenya's Struggle for Independence
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-8">
              <div className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full ${selectedEvent === index ? "bg-secondary" : "bg-primary"} absolute left-1/2 transform -translate-x-1/2 cursor-pointer`}
                  onClick={() => setSelectedEvent(index)}
                ></div>
                <div className={`w-1/2 pr-8 ${index % 2 === 0 ? "text-right" : "ml-auto pl-8"}`}>
                  <div className="text-xl font-prata text-secondary">{event.year}</div>
                  <div className="mt-2 text-tertiary">{event.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedEvent !== null && (
          <div className="mt-8 p-4 bg-primary rounded-lg shadow-lg">
            <h3 className="text-xl font-prata text-background mb-2">
              {timelineEvents[selectedEvent].year}: {timelineEvents[selectedEvent].event}
            </h3>
            <p className="text-background">
              This event marked a significant moment in Kenya's journey towards independence. It shaped the course of
              the nation's history and the lives of its people.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Timeline

