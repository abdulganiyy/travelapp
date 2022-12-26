import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Destinations from "../components/Destinations";
import Trips from "../components/Trips";
import Testimonials from "../components/Testimonials";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Destinations />
      <Trips />
      <Testimonials />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
