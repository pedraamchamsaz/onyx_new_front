import CarouselSection from "./CarouselSection"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const CustomFilters = () => {
  return (
    <div className='px-6 sm:px-16 border-t'>
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <CarouselSection />
                </CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default CustomFilters