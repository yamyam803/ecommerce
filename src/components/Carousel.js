import React from "react";
import styles from "./Carousel.module.css";
import DiscountLogo from "../assets/Diskon.svg";
import LeftArrow from "../assets/Left Arrow.png";
import RightArrow from "../assets/Right Arrow.png";
import Ellipse from "../assets/Ellipse.svg";
const Carousel = () => {
  return (
    <section className={styles.hero}>
      <div className="hero-title">
        <h3 className={styles["hero-info"]}>welcome to chairy</h3>
        <p className={styles.title}>
          Best Furniture Collection for your interior.
        </p>
        <button className={styles["hero-button"]}>Shop Now &rarr;</button>
      </div>
      <div className={styles["hero-image"]}>
        <img src={DiscountLogo} alt="discount logo" />
      </div>
      <button className={styles["left-button"]}>
        <img src={LeftArrow} alt="left arrow" />
      </button>
      <button className={styles["right-button"]}>
        <img src={RightArrow} alt="right arrow" />
      </button>
      <div className={styles.elipse}>
        <img src={Ellipse} alt="elipse" />
        <img src={Ellipse} alt="elipse" />
        <img src={Ellipse} alt="elipse" />
      </div>
    </section>
  );
};

export default Carousel;
