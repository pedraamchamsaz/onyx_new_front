"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import { titan_one } from "@/constants/fonts";
import Footer from "@/components/Footer";
import { loadStripe } from "@stripe/stripe-js";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Event({ params }) {
  const getEvent = async (id) => {
    const response = await axios.get(`http://localhost:3001/events/${id}`);
    return response.data;
  };
  const event = await getEvent(params.eventId);
  console.log(event);

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51PIpzfFrCOgMMaMHCZc1KipvJQQJzZQ03Picgjuv645BfSjTaYT8ScruivAQJiuglDpU014wjaUSgF9oGd93GreL00ELwnUhbA")
    
    const body = {
      products: [event]
    }

    const headers = {
      "Content-Type": "application/json"
    }

    // const response = axios.post('http://localhost:3001/events/create-checkout-session', body, {
    //   headers: headers
    // })

    const response = await fetch('http://localhost:3001/events/create-checkout-session',{
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const session = await response.json()

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    })

    if (result.error) {
      console.log(result.errror)
    }
  };

  return (
    <div className="bg-[#FFE7C3]">
      <Navbar />

      <div className="flex max-lg:flex-col gap-5 lg:gap-14 px-6 sm:px-16 pt-24">
        <div className="object-cover sticky min-w-[400px]">
          <img src={event.image} className="rounded-[15px]" />
        </div>

        <div className="max-w-[600px]">
          <p className="bg-orange-400 inline-block px-2 uppercase">
            {event.category}
          </p>
          <h1 className={`${titan_one.className} text-5xl py-3`}>
            {event.name}
          </h1>
          <p className="font-bold text-lg">{event.date}</p>
          <p className="text-sm pt-2">{event.country}</p>

          <div className="flex justify-between gap-10 mt-5 border-y border-black py-5">
            <p className="text-4xl font-extrabold">£{event.price}</p>
            <button
              className="bg-orange-700 hover:bg-orange-600 transition w-full rounded-[12px] text-white font-bold"
              onClick={makePayment}
            >
              Book Now
            </button>
          </div>

          <div className="pt-5">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="pt-3 overflow-hidden">{event.overview}</p>
          </div>

          <Accordion type="single" collapsible className="py-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>What happens on the day?</AccordionTrigger>
              <AccordionContent>{event.onTheDay}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Refund Policy</AccordionTrigger>
              <AccordionContent>{event.refund}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Participant Guidelines</AccordionTrigger>
              <AccordionContent>{event.guidelines}</AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="py-5">
            <div className="flex gap-5 items-center">
              <div className="h-10 w-10 rounded-full">
                <img
                  src="/pic.png"
                  className="object-cover h-10 rounded-full"
                />
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
