import React from "react";
import styles from "./Links.module.css";
import menu from "../assets/menu.svg";
const Links = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <li className={styles["links-item"]}>
          <a href="#">
            <img src={menu} alt="menu logo" className={styles["links-menu"]} />
            All Categories
          </a>
        </li>
        <li className={styles["links-item"]}>
          <a href="#">Home</a>
        </li>
        <li className={styles["links-item"]}>
          <a href="#">Shop</a>
        </li>
        <li className={styles["links-item"]}>
          <a href="#">Product</a>
        </li>
        <li className={styles["links-item"]}>
          <a href="#">Page</a>
        </li>
        <li className={styles["links-item"]}>
          <a href="#">About</a>
        </li>
      </ul>
      <p className={styles["links-contact"]}>
        Contact: <strong>(808) 555-0111</strong>{" "}
      </p>
    </div>
  );
};

export default Links;
