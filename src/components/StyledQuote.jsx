import { Leaf } from "lucide-react"

function StyledQuote({ quote, author }) {
  return (
    <div className="bg-[#F5E6D3] p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden">
      {/* Textured background */}
      <div
        className="absolute inset-0 bg-[url('/parchment-texture.jpg')] opacity-50 mix-blend-multiply"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      ></div>

      {/* Leaf icon */}
      <div className="absolute top-4 left-4 text-[#8B4513] opacity-50">
        <Leaf className="w-12 h-12 transform -rotate-45" />
      </div>

      {/* Quote */}
      <blockquote className="relative z-10 text-[#5C3D2E] text-xl md:text-2xl font-teresa italic mb-6 leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Author signature */}
      <div className="relative z-10 text-right">
        <p className="font-caramel text-[#8B4513] text-2xl md:text-3xl transform -rotate-6">{author}</p>
      </div>
    </div>
  )
}

export default StyledQuote

