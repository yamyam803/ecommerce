import React from "react";
import Products from "./Products";
import styles from "./FeatureProducts.module.css";
import RightArrow from "../assets/Right Arrow.png";
import LeftArrow from "../assets/Left Arrow.png";
const data = [
  { id: 1, nama: "kursi jati", price: 20 },
  { id: 2, nama: "meja", price: 120 },
  { id: 3, nama: "pintu", price: 200 },
  { id: 4, nama: "lemari", price: 210 },
];
const FeatureProducts = () => {
  return (
    <React.Fragment>
      <div className={styles["feature-heading"]}>
        <h3 className={styles["feature-title"]}>Featured Products</h3>
        <div className={styles["feature-button"]}>
          <button className={styles.left}>
            <img src={LeftArrow} alt="left arrow" />
          </button>
          <button className={styles.right}>
            <img src={RightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
      <div className={styles.container}>
        {data.map((item) => {
          return <Products item={item} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default FeatureProducts;
