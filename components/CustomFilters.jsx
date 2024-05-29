import { filters } from "@/constants";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CustomFilters = ({ allEvents, setFilteredEvents }) => {
  const filteredEvents = (cat) => {
    const newEvents = allEvents.filter((event) => event.category === cat);
    setFilteredEvents(newEvents);
  };

  return (
    <div className="px-6 sm:px-16 border-t sticky top-0 z-10 bg-white">
      <Carousel>
        <CarouselContent className='flex flex-none'>
          <CarouselItem className="flex gap-10 mt-5 overflow-scroll">
            {filters.slice(0, 13).map((filter) => (
              <div
                key={filter.name}
                className="flex flex-col items-center hover:border-b-4 hover:border-b-gray-400 border-b-4 border-b-black/0 text-gray-500 hover:text-black transition cursor-pointer w-16"
                onClick={() => filteredEvents(filter.name)}
              >
                <span className="material-symbols-outlined">
                  {filter.image}
                </span>
                <p className="text-[10px] text-center my-2">{filter.name}</p>
              </div>
            ))}
          </CarouselItem>
          <CarouselItem className="flex gap-10 mt-5 overflow-scroll">
            {filters.slice(14, 28).map((filter) => (
              <div
                key={filter.name}
                className="flex flex-col items-center hover:border-b-4 hover:border-b-gray-400 border-b-4 border-b-black/0 text-gray-500 hover:text-black transition cursor-pointer w-16"
                onClick={() => filteredEvents(filter.name)}
              >
                <span className="material-symbols-outlined">
                  {filter.image}
                </span>
                <p className="text-[10px] text-center my-2">{filter.name}</p>
              </div>
            ))}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CustomFilters;
