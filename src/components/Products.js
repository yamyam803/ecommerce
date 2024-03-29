import React from "react";
import styles from "./Products.module.css";
import CartLogo from "../assets/Add Cart-1.png";
import { fetchProduct, AddProduct } from "../actions/products";
import { connect } from "react-redux";

const Products = (props) => {
  return (
    <div className={styles.products}>
      <div className={styles["products-item"]}></div>
      <div className={styles["products-container"]}>
        <div className={styles["products-info"]}>
          <p className={styles["products-detail"]}>{props.item.name}</p>
          <span className={styles["products-price"]}>${props.item.price}</span>
        </div>
        <button className={styles["products-button"]}>
          <img
            src={CartLogo}
            alt="cart logo"
            onClick={() =>
              props.add({
                id: props.item.id,
                price: props.item.price,
                name: props.item.name,
              })
            }
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    add: (obj) => dispatch(AddProduct(obj)),
  };
};

export default connect(null, mapDispatchToProps)(Products);
