import { filters } from "@/constants"

const CarouselSection = () => {
  return (
    <div className="flex gap-10 mt-5">
        {filters.map((filter) => (
            <div key={filter.name} className="flex flex-col items-center hover:border-b-4 text-gray-500 hover:text-black transition">
                <span className="material-symbols-outlined">{filter.image}</span>
                <p className="text-[10px] text-center mt-2">{filter.name}</p>
            </div>
        ))}
    </div>
  )
}

export default CarouselSection