import React from "react";
import { CounterItems } from "registry";

export default function WorkCounter() {
  return (
    <section className="section section-work-counter">
      <div className="container grid grid-four-column">
        {CounterItems.map((list) => {
          return (
            <div key={list.id}>
              <h2 data-number={list.count} className="counter-numbers">
                {list.count}+
              </h2>
              <p>{list.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
