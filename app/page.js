import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { titan_one } from "@/constants/fonts";
import CustomFilters from "@/components/CustomFilters";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <Hero />

      <div id='events' className="h-screen bg-white">
        <div className="px-6 sm:px-16 py-10">
          <h1 className={`${titan_one.className} text-5xl font-bold`}>Event Catalogue</h1>
          <p className="mt-2">Explore events here</p>
        </div>

        <CustomFilters />
      </div>

      <Footer />
    </main>
  );
}
