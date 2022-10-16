import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import ComfortyLogo from "../assets/LogoChairy.png";
import SearchLogo from "../assets/search-1.png";
// import { Outlet } from "react-router-dom";
import CartLogo from "../assets/Group.png";
import ProfileLogo from "../assets/Profile.png";
import HeartLogo from "../assets/Heart 1.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <img
        src={ComfortyLogo}
        alt="comforty logo"
        className={styles["nav-logo"]}
      />
      <form action="" className={styles["nav-form"]}>
        <input
          type="text"
          className={styles["nav-form__input"]}
          placeholder="Search here ...."
        />
        <img
          src={SearchLogo}
          alt="search logo"
          className={styles["nav-form__image"]}
        />
      </form>

      <div className={styles["nav-button__logo"]}>
        <Link className={styles["nav-button__cart"]} to="/cart">
          <img
            src={CartLogo}
            alt="cart logo"
            className={styles["nav-cart__image"]}
          />
          <p className={styles["nav-cart__details"]}>Cart</p>
          <p className={styles["nav-cart__count"]}>{props.total}</p>
        </Link>
        <button className={styles["nav-logo__heart"]}>
          <img
            src={HeartLogo}
            alt="heart logo"
            className={styles["nav-heart__image"]}
          />
        </button>
        <button className={styles["nav-logo__profile"]}>
          <img
            src={ProfileLogo}
            alt="Profile logo"
            className="nav-profile__image"
          />
        </button>
      </div>
      {/* <Outlet /> */}
    </nav>
  );
};

const mapStateToProps = (state) => {
  let total = 0;
  if (state.cart && state.cart.cart) {
    state.cart.cart.forEach((item) => {
      total += item.qty;
    });
  }
  return { total };
};

export default connect(mapStateToProps)(Navbar);
