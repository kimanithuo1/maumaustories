"use client"

import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Link } from "react-router-dom"

const warriors = [
  { name: "Shaka Zulu", coordinates: [-28.5, 31.5], country: "South Africa" },
  { name: "Queen Amina", coordinates: [11.0, 7.0], country: "Nigeria" },
  { name: "Nzinga Mbande", coordinates: [-9.5, 16.0], country: "Angola" },
  { name: "Samori Touré", coordinates: [10.0, -10.0], country: "Guinea" },
  { name: "Yaa Asantewaa", coordinates: [6.7, -1.6], country: "Ghana" },
  { name: "Koitalel Arap Samoei", coordinates: [0.5, 35.3], country: "Kenya" },
  { name: "Mekatilili wa Menza", coordinates: [-3.2, 40.1], country: "Kenya" },
]

function InteractiveMap() {
  const [activeWarrior, setActiveWarrior] = useState(null)

  return (
    <div className="h-[600px] w-full bg-[#F3E5D6] p-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-caramel text-[#79483F] mb-4 text-center">African Warriors Map</h2>
      <MapContainer center={[0, 20]} zoom={3} style={{ height: "calc(100% - 40px)", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {warriors.map((warrior, index) => (
          <Marker
            key={index}
            position={warrior.coordinates}
            eventHandlers={{
              click: () => setActiveWarrior(warrior),
            }}
          >
            <Popup>
              <div className="bg-[#D7E2B6] p-2 rounded-lg">
                <h3 className="font-prata text-lg text-[#79483F]">{warrior.name}</h3>
                <p className="font-teresa text-black">{warrior.country}</p>
                <Link
                  to={`/folklore/${warrior.name.toLowerCase().replace(" ", "-")}`}
                  className="text-[#79483F] hover:text-[#E0B1A8] transition-colors duration-200 font-prata"
                >
                  Read their story
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default InteractiveMap

