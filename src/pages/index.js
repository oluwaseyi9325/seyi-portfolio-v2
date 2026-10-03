import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ScrollBand from "@/components/sections/ScrollBand";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";

const Home = () => (
  <>
    <Navbar />
    <main className="overflow-x-clip">
      <Hero />
      <ScrollBand />
      <About />
      <Services />
    </main>
    <Footer />
  </>
);

export default Home;
