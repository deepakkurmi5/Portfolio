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
              I'am Deepak kurmi. A Full Stake Developer and Freelancer. I have
              1.7 Years Experiance.
            </p>
            <div className="hero-btn">
              <Button
                className="PrimaryBtn"
                padding="1.6rem 3.2rem"
                weight="500"
                size="1.5rem"
              >
                Hire me
              </Button>
            </div>
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
