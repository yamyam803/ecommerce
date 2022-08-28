import React from "react";
import styles from "./Cart.module.css";
import Footer from "./Footer";
import Header from "./Header";
const Cart = () => {
  return (
    <div>
      <Header />
      <div className={styles["cart-detail"]}>
        <h3 className={styles["cart-title"]}>Cart</h3>
        <div className={styles["cart-info"]}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
