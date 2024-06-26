"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CustomFilters from "@/components/CustomFilters";
import Card from "@/components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

import { titan_one } from "@/constants/fonts";
import Link from "next/link";
// import { events } from "@/constants";

export default function Home() {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([allEvents]);

  const apiCall = async () => {
    const response = await axios.get("http://localhost:3001/events");
    setAllEvents(response.data);
    setFilteredEvents(response.data);
  };

  useEffect(() => {
    try {
      apiCall();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <main className="">
      <Navbar />

      <Hero />

      <div id="events" className="bg-white">
        <div className="px-6 sm:px-16 py-10">
          <h1 className={`${titan_one.className} text-5xl font-bold`}>
            Event Catalogue
          </h1>
          <p className="mt-2">Explore events here</p>
        </div>

        <CustomFilters
          allEvents={allEvents}
          setFilteredEvents={setFilteredEvents}
        />

        <div className="px-10 md:px-20 lg:px-32 xl:px-24 py-10 flex flex-wrap justify-start gap-5">
          {filteredEvents.map((event) => (
            <Link
              href={`/events/${event._id}`}
              target="_blank"
            >
              <Card
                name={event.name}
                country={event.country}
                price={event.price}
                image={event.image}
              />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
