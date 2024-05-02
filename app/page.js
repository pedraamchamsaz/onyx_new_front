import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <div id='events' className="h-screen bg-white">
        
      </div>
      <Footer />
    </main>
  );
}
