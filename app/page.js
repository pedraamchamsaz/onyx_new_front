import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FFE7C3]">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
