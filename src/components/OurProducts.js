import React from "react";
import styles from "./OurProducts.module.css";
import Products from "./Products";
const data = [
  { id: 1, nama: "kursi jati", price: 20 },
  { id: 2, nama: "meja", price: 120 },
  { id: 3, nama: "pintu", price: 200 },
  { id: 4, nama: "lemari", price: 210 },
];
const OurProducts = () => {
  return (
    <main className={styles.ourproducts}>
      <h2 className={styles["ourproducts-title"]}>Our Products</h2>
      <div className={styles["ourproducts-nav"]}>
        <a href="#">all</a>
        <a href="#">newest</a>
        <a href="#">trending</a>
        <a href="#">best sellers</a>
        <a href="#">featured</a>
      </div>

      <div className={styles.container}>
        {data.map((item) => {
          return <Products item={item} key={Math.random().toString()} />;
        })}
      </div>
    </main>
  );
};

export default OurProducts;
