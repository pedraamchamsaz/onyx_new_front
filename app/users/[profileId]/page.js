"use client";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { titan_one } from "@/constants/fonts";
// import Bio from "@/components/Bio";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

const page = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([allEvents]);
  const { user, isLoading } = useKindeBrowserClient();

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
    <div className="bg-[#FFE7C3]">
      <Navbar />

      <div className="flex max-md:flex-col gap-5 lg:gap-14 px-6 sm:px-16 pt-24 mb-10">
        {/* <Bio /> */}
        <div className="mx-auto">
          <div className="flex flex-col gap-8 p-6 rounded-[15px] shadow-2xl --tw-shadow-color: #1e293b; w-[300px]">
            <div className="flex flex-col items-center">
              <Image
                src={user?.picture}
                width={100}
                height={100}
                className="rounded-full"
                alt="Profile Pic"
              />
              {isLoading ? (
                <p className="pt-4 font-bold text-2xl">...</p>
              ) : (
                <>
                  <h1 className="pt-4 font-bold text-2xl">
                    {user?.given_name}
                  </h1>
                  <p className="text-sm">Host</p>
                </>
              )}
              {/* <h1 className="pt-4 font-bold text-2xl">{user.given_name}</h1>
          <p className="text-sm">Host</p> */}
            </div>
            <div className="flex justify-evenly">
              <div className="flex flex-col items-center w-[75px]">
                <h3 className="font-bold">X</h3>
                <p className="text-xs py-2">Reviews</p>
              </div>
              <div className="flex flex-col items-center w-[75px]">
                <h3 className="font-bold">X</h3>
                <p className="text-xs py-2">Rating</p>
              </div>
              <div className="flex flex-col items-center w-[75px]">
                <h3 className="font-bold">X</h3>
                <p className="text-xs py-2 text-center">Joined</p>
              </div>
            </div>
            {/* <div className="px-6">
          <h2 className="font-bold text-lg">Bio</h2>
          {isLoading ? (
            <p>...</p>
          ) : (
            <p className="text-sm xl:w-[200px] pt-3">
              {user?.user_bio}
            </p>
          )}
        </div> */}
          </div>

          <div></div>
        </div>
        {/* <div>
          <div className="flex flex-col gap-8 p-6 rounded-[15px] shadow-2xl --tw-shadow-color: #1e293b; w-[300px]">
            <div className="flex flex-col items-center">
              <Image
                src="/pic.png"
                width={100}
                height={100}
                className="rounded-full w-auto"
                alt="Profile Pic"
              />
              <h1 className="pt-4 font-bold text-2xl">Pedraam</h1>
              <p className="text-sm">Host</p>
            </div>
            <div className="flex justify-evenly">
              <div className="flex flex-col items-center w-[75px]">
                <h3 className="font-bold">X</h3>
                <p className="text-xs py-2">Reviews</p>
              </div>
              <div className="flex flex-col items-center w-[75px]">
                <h3 className="font-bold">X</h3>
                <p className="text-xs py-2">Rating</p>
              </div>
              <div className="flex flex-col items-center w-[75px]">
                <h3 className="font-bold">X</h3>
                <p className="text-xs py-2 text-center">Joined</p>
              </div>
            </div>
            <div className="px-6">
              <h2 className="font-bold text-lg">Bio</h2>
              <p className="text-sm xl:w-[200px] pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                nisi elit, pulvinar tempus dignissim nec, pulvinar mattis ex.
                Integer pretium ex eget scelerisque imperdiet. Phasellus
                suscipit, diam vel elementum sagittis, orci sem porta tellus,
                vitae faucibus leo ante vel urna.
              </p>
            </div>
          </div>

          <div></div>
        </div> */}

        <div className="lg:w-[800px] flex-1">
          <h1
            className={`${titan_one.className} text-5xl font-bold text-center md:text-left px-16 `}
          >
            Events
          </h1>
          <div className="px-6 sm:px-16 py-10 flex flex-wrap justify-center md:justify-start gap-5">
            {filteredEvents.filter(event => event.userId === user?.id).map((event) => (
              <Link href={`/events/${event._id}`} target="_blank">
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
      </div>

      <Footer />
    </div>
  );
};

export default page;
