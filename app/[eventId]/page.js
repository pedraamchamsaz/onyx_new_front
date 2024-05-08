"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import { titan_one } from "@/constants/fonts";
import Footer from "@/components/Footer";

export default async function Event({ params }) {
  const getEvent = async (id) => {
    const response = await axios.get(`http://localhost:3001/events/${id}`);
    return response.data;
  };
  const event = await getEvent(params.eventId);
  console.log(event);

  return (
    <div className="bg-[#FFE7C3]">
      <Navbar />

      <div className="flex max-lg:flex-col gap-5 lg:gap-14 px-6 sm:px-16 pt-24">
        <div className="object-cover sticky">
          <img src="/dancer.jpg" className="rounded-[15px]" />
        </div>

        <div className="max-w-[600px]">
          <p className="bg-orange-400 inline-block px-2 uppercase">
            {event.category}
          </p>
          <h1 className={`${titan_one.className} text-4xl py-2`}>
            {event.name}
          </h1>
          <p className="text-sm">{event.country}</p>

          <div className="flex justify-between gap-10 mt-5 border-y border-black py-5">
            <p className="text-4xl font-extrabold">£{event.price}</p>
            <button className="bg-orange-700 hover:bg-orange-600 transition w-full rounded-[12px] text-white font-bold">
              Book Now
            </button>
          </div>

          <div className="py-5">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi
              elit, pulvinar tempus dignissim nec, pulvinar mattis ex. Integer
              pretium ex eget scelerisque imperdiet. Phasellus suscipit, diam
              vel elementum sagittis, orci sem porta tellus, vitae faucibus leo
              ante vel urna. Vestibulum pulvinar, odio ac dictum viverra, diam
              massa congue odio, quis rutrum lacus tortor ut felis. Praesent sed
              velit consequat, laoreet elit eu, auctor risus. Donec luctus
              tortor non aliquet blandit. Nulla facilisi. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Integer finibus purus
              eros, ac accumsan ipsum posuere id. Morbi at nulla posuere,
              commodo lacus non, bibendum dui. Suspendisse consectetur convallis
              lorem, mattis vestibulum arcu varius eget. Cras quis felis cursus,
              auctor risus vel, venenatis purus.
            </p>
          </div>

          <div className="border-t border-black py-5">
            <div className="flex gap-5 items-center">
              <div className="h-10 w-10 rounded-full">
                <img src="/pic.png" className="object-cover h-10 rounded-full"/>
              </div>
              <h2 className="text-2xl font-bold">Meet your host</h2>
            </div>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi
              elit, pulvinar tempus dignissim nec, pulvinar mattis ex. Integer
              pretium ex eget scelerisque imperdiet. Phasellus suscipit, diam
              vel elementum sagittis, orci sem porta tellus, vitae faucibus leo
              ante vel urna.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
