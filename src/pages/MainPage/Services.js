import React from "react";
import { ServicesItems } from "registry";

const Services = () => {
  return (
    <section className="section section-services">
      <div className="container">
        <h2 className="common-heading">Service Offers</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex
          dolores tempore possimus, mollitia vero quas
        </p>
      </div>

      {/* service offers card */}
      <div className="container grid grid-three-column">
        {ServicesItems.map((item) => {
          return (
            <div className="service-box" key={item.id}>
              {item.icon}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
