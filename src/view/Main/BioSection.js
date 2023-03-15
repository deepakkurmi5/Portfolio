import React from "react";
import { Button } from "layout";

export default function BioSection() {
  return (
    <section className="section section-bio">
      <div className="container grid grid-two-column">
        {/* left side bio image */}
        <div className="bio-image">
          <img src="/images/bio.jpg" alt="bio" />
        </div>
        {/* right side bio data */}
        <div className="bio-data">
          <h2 className="common-heading">My Bio-Data</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ullam error eum voluptates optio.
          </p>
          <br />
          <p>
            Eum explicabo veritatis reprehenderit a asperiores dolor cum fuga?
          </p>
          <div className="bio-data-stats">
            <div className="bio-stats">
              <h3>Design</h3>
              <div className="bio-progress-bar bio-progress-1">
                <span>80%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>HTML</h3>
              <div className="bio-progress-bar bio-progress-2">
                <span>90%</span>
              </div>
            </div>
          </div>
          <div className="bio-data-btn">
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <Button
                className="PrimaryBtn"
                padding="1.6rem 3.2rem"
                weight="500"
                size="1.5rem"
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
