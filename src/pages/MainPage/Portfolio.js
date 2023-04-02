import React, { useRef } from "react";
import { portfolioRegistry } from "registry";

const Portfolio = () => {
  const btns = useRef(null);

  function handleToggle(e) {
    const p_btn = document.querySelectorAll(".PrimaryBtn");
    const p_btn_clicked = e.target;

    p_btn.forEach((ele) => ele.classList.remove("p-img-active"));
    p_btn_clicked.classList.add("p-img-active");

    const btn_num = p_btn_clicked.dataset.btnNum;

    const p_imgs_elem = document.querySelectorAll(".img-overlay");
    const img_active = document.querySelectorAll(`.PrimaryBtn--${btn_num}`);

    p_imgs_elem.forEach((ele) => ele.classList.add("p-img-hidden"));
    img_active.forEach((ele) => ele.classList.remove("p-img-hidden"));
  }

  return (
    <section className="section section-portfolio" id="portfolio-section">
      <div className="container">
        <h2 className="common-heading">Latest Works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          natus eum quibusdam, blanditiis nobis dolor distinctio asperiores
          itaque voluptas nesciunt cum dolorum. Quidem sed id repellat facere
        </p>
      </div>

      <div className="p-btns" ref={btns} onClick={handleToggle}>
        <button className="btn_wrapper PrimaryBtn" data-btn-num="1">
          Websites
        </button>
        <button className="btn_wrapper PrimaryBtn" data-btn-num="2">
          Youtube
        </button>
        <button className="btn_wrapper PrimaryBtn" data-btn-num="3">
          Design
        </button>
      </div>

      <div className="container grid grid-three-column portfolio-images">
        {portfolioRegistry.map((list) => {
          return (
            <div
              className={`img-overlay ${list.target.map((tar) => {
                return `PrimaryBtn--${tar}`;
              })}`}
              key={list.id}
            >
              <img src={list.img} alt={list.content} />
              <div className="overlay">
                <a href={list.url} target="__blank" className="common-heading">
                  {list.content}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
