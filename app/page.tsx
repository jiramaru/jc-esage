import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import Programme from "@/components/Programme";
import Gallery from "@/components/Gallery";
import EventInfo from "@/components/EventInfo";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import BackgroundDecor from "@/components/BackgroundDecor";
import ProgrammeHero from "@/components/ProgrammeHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden pt-16">
      <BackgroundDecor />
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <ProgrammeHero title="Venez célébrer avec nous" subtitle="" backgroundImage="/assets/imgs/jc/jc-01.jpeg" />
      <Programme />
      <Gallery />
      <EventInfo />
      <MapSection />
      <Footer />
    </main>
  );
}
