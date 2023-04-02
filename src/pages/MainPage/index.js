import React from "react";
import "styles/main.css";
import HeroSection from "./HeroSection";
import BioSection from "./BioSection";
import Portfolio from "./Portfolio";
import WorkCounter from "./WorkCounter";
import Services from "./Services";
import Testimonial from "./Testimonial";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <BioSection />
      <Portfolio />
      <WorkCounter />
      <Services />
      <Testimonial />
    </>
  );
}
