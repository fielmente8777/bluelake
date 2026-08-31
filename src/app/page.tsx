import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { FeatureStrip } from "../components/FeatureStrip";
import { AboutUs } from "@/components/Aboutus";
import { RoomsSuites } from "../components/RoomsSuites";
import { ExperiencesStrip } from "../components/ExperiencesStrip";
import { Gallery } from "../components/Gallery";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <AboutUs />
        <RoomsSuites />
        <ExperiencesStrip />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
