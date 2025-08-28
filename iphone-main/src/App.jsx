import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Detials16 from "./components/Detials16";
import CameraHero from "./components/CameraHero";
import Wide from "./components/wide";
import Effects from "./components/Effects.jsx";
import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />

      <Highlights />
      <Model />
      <Features />
      <Detials16 />
      <CameraHero />
      <Wide />
      <Effects />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
