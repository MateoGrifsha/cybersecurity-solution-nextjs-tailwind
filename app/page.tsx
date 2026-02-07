import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent-blue/30 selection:text-white">
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <Services />
      <Footer />
    </main>
  );
}
