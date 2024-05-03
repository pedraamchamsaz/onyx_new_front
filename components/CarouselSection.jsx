import { filters } from "@/constants"

const CarouselSection = () => {
  return (
    <div className="flex">
        {filters.map((filter) => (
            <div key={filter.name}>
                {filter.name}
            </div>
        ))}
    </div>
  )
}

export default CarouselSection