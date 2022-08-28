import React from "react";
import styles from "./ProductDetail.module.css";
import Button from "./Button";
const ProductDetail = () => {
  return (
    <div>
      <div className={styles["product-detail"]}>
        <div className={styles["product-image"]}>
          <div className={styles["product-hero"]}>
            <img
              src="https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="iphone"
            />
          </div>

          <div className={styles["product-thumbnail"]}>
            <img
              src="https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="iphone"
              className={styles.image}
            />
            <img
              src="https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="iphone"
              className={styles.image}
            />
            <img
              src="https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="iphone"
              className={styles.image}
            />
            <img
              src="https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="iphone"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles["product-description"]}>
          <span className={styles["tag"]}>electronic</span>
          <h3 className={styles["product-title"]}>Iphone 13</h3>
          <p className={styles["product-info"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            magni veritatis quod modi deleniti est esse perferendis pariatur
            vel, voluptatum deserunt qui consequatur enim provident nihil velit
            cum excepturi incidunt nesciunt eaque expedita nostrum facere
            dignissimos quis? Aliquid inventore reprehenderit cupiditate
            obcaecati aspernatur quam ex, explicabo sed amet nulla? Impedit.
          </p>
          <span className={styles["quantity"]}>quantity</span>
          <div className={styles["product-quantity"]}>
            <div className={styles["product-input"]}>
              <span>-</span>
              <input type="number" />
              <span>+</span>
            </div>
            <div className={styles["product-price"]}>
              <p>IDR 29.000.000</p>
            </div>
          </div>
          <Button className={styles["product-button"]}>Add to Cart</Button>
          <div className={styles["quantity"]}>
            <button className={styles["btn minus1"]}>-</button>
            <input
              className={["quantity"]}
              id="id_form-0-quantity"
              min="0"
              name="form-0-quantity"
              // value="1"
              type="number"
            />
            <button className={styles["btn add1"]}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
