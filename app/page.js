import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CustomFilters from "@/components/CustomFilters";
import Card from "@/components/Card";

import { titan_one } from "@/constants/fonts";
import { events } from "@/constants";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <Hero />

      <div id='events' className="bg-white">
        <div className="px-6 sm:px-16 py-10">
          <h1 className={`${titan_one.className} text-5xl font-bold`}>Event Catalogue</h1>
          <p className="mt-2">Explore events here</p>
        </div>

        <CustomFilters />

        <div className="px-6 sm:px-16 py-10 flex flex-wrap justify-start gap-5">
          {events.map((event) => (
            <Card 
              name={event.name}
              country={event.country}
              price={event.price}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
