import React from "react";
import styles from "./Categories.module.css";
import Leftrow from "../assets/Line.png";
import rightRow from "../assets/Line2.png";
const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles["head-categories"]}>
        <h2 className={styles["heading-categories"]}>Top Categories</h2>
        <div className={styles["categories-button"]}>
          <button className={styles["left-button"]}>
            <img src={Leftrow} alt="Left arrow" />
          </button>
          <button className={styles["right-button"]}>
            <img src={rightRow} alt="Right arrow" />
          </button>
        </div>
      </div>
      <div className={styles["categories-products"]}>
        <div className={styles["categories-items"]}>
          <div className={styles["categories-img"]}>
            <img
              src="https://images.unsplash.com/photo-1555117391-6c0795768da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="foto elektornik"
            />
          </div>
          <div className={styles["categories-info"]}>
            <p className={styles["categories-text"]}>Wing Chair</p>
            <p className={styles["categories-detail"]}>3.548</p>
          </div>
        </div>
        <div className={styles["categories-items"]}>
          <div className={styles["categories-img"]}>
            <img
              src="https://images.unsplash.com/photo-1555117391-6c0795768da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="foto elektornik"
            />
          </div>
          <div className={styles["categories-info"]}>
            <p className={styles["categories-text"]}>Wing Chair</p>
            <p className={styles["categories-detail"]}>3.548</p>
          </div>
        </div>
        <div className={styles["categories-items"]}>
          <div className={styles["categories-img"]}>
            <img
              src="https://images.unsplash.com/photo-1555117391-6c0795768da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="foto elektornik"
            />
          </div>
          <div className={styles["categories-info"]}>
            <p className={styles["categories-text"]}>Wing Chair</p>
            <p className={styles["categories-detail"]}>3.548</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
