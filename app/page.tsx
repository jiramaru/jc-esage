import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import Programme from "@/components/Programme";
import Gallery from "@/components/Gallery";
import EventInfo from "@/components/EventInfo";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden pt-16">
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Programme />
      <Gallery />
      <EventInfo />
      <MapSection />
      <Footer />
    </main>
  );
}
