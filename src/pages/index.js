import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ScrollBand from "@/components/sections/ScrollBand";

const Home = () => (
  <>
    <Navbar />
    <main className="overflow-x-clip">
      <Hero />
      <ScrollBand />
    </main>
    <Footer />
  </>
);

export default Home;
