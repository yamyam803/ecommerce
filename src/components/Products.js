import React from "react";
import styles from "./Products.module.css";
import CartLogo from "../assets/Add Cart-1.png";
const Products = (props) => {
  return (
    <div className={styles.products}>
      <div className={styles["products-item"]}></div>
      <div className={styles["products-container"]}>
        <div className={styles["products-info"]}>
          <p className={styles["products-detail"]}>{props.item.nama}</p>
          <span className={styles["products-price"]}>${props.item.price}</span>
        </div>
        <button className={styles["products-button"]}>
          <img src={CartLogo} alt="cart logo" />
        </button>
      </div>
    </div>
  );
};

export default Products;
