import React from "react";
import Navbar from "../components/Navbar";
import styles from "./Cart.module.css";
import { fetchProduct, AddProduct } from "../actions/products";

import { connect } from "react-redux";

const Cart = (props) => {
  const renderListCart = (x) => {
    return (
      <React.Fragment>
        <div className={styles["cart-seller"]}>{x.id}</div>
        <div className={styles["cart-info"]}>
          {/* <div className={styles["cart-img"]}>asd</div> */}
          <div className={styles["cart-name"]}>
            <p className={styles["cart-item"]}>
              {x.name.substring(1, 30)}......
            </p>
            <div className={styles["cart-amount"]}>
              <p className={styles["cart-price"]}>${x.price}</p>
              <div className={styles["cart-button"]}>
                <button
                  onClick={() =>
                    props.add({
                      id: x.id,
                      price: x.price,
                      name: x.name,
                    })
                  }
                >
                  +
                </button>
                <p className={styles["cart-total"]}>{x.qty}</p>
                <button>-</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  return (
    <div>
      <Navbar />
      <div className={styles.cart}>
        {props.ListCart.map((x) => renderListCart(x))}
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

const mapStateToProps = (state) => {
  let ListCart = null;
  if (state.cart && state.cart.cart) {
    ListCart = state.cart.cart;
  }
  return { ListCart };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
