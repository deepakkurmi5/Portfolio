import React from "react";
import "styles/main.css";
import HeroSection from "./HeroSection";
import BioSection from "./BioSection";
import Portfolio from "./Portfolio";

export default function Main() {
  return (
    <>
      <HeroSection />
      <BioSection />
      <Portfolio />
    </>
  );
}
