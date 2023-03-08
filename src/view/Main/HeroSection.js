import React from "react";
import { Button } from "layout";

const HeroSection = () => {
  return (
    <main>
      <section className="section-hero section">
        <div className="container grid grid-two-column">
          {/* hero section left side */}
          <div className="section-hero-data">
            <p className="hero-top-data">this is me</p>
            <h1 className="hero-heading">Deepak Tech</h1>
            <p className="hero-para">
              I'am deepak kurmi. A Full stake Developer and freelancer. I have
              1.7 years Experiance.
            </p>
            <Button
              className="PrimaryBtn"
              padding="1.6rem 3.2rem"
              weight="500"
              size="1.5rem"
              width="15rem"
            >
              Hire me
            </Button>
          </div>

          {/* hero section right side */}
          <div className="section-hero-image">
            <img src="/images/hero.jpg" alt="hero" className="hero-img" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
