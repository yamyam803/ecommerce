import React from "react";
import styles from "./Footer.module.css";
import FacebookLogo from "../assets/facebooklogo.png";
import LogoChairy from "../assets/LogoChairy.png";
import Button from "./Button";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-1"]}>
        <img src={LogoChairy} alt="logo chairy" />
        <p className={styles["footer-1__info"]}>
          Vivamus tristique odio sit amet velit semper, eu posuere turpis
          interdum. Cras egestas purus
        </p>
        <div className={styles["footer-1__social"]}>
          <a href="#">
            <img src={FacebookLogo} alt="facebook logo" />
          </a>
          <a href="#">
            <img src={FacebookLogo} alt="facebook logo" />
          </a>
          <a href="#">
            <img src={FacebookLogo} alt="facebook logo" />
          </a>
          <a href="#">
            <img src={FacebookLogo} alt="facebook logo" />
          </a>
          <a href="#">
            <img src={FacebookLogo} alt="facebook logo" />
          </a>
        </div>
      </div>
      <div className={styles["footer-2"]}>
        <h3 className={styles["footer-2__title"]}>category</h3>
        <ul className={styles["footer-2__list"]}>
          <li>sofa</li>
          <li>armchair</li>
          <li>wing chair</li>
          <li>desk chair</li>
          <li>wooden chair</li>
          <li>park bench</li>
        </ul>
      </div>
      <div className={styles["footer-3"]}>
        <h3 className={styles["footer-3__title"]}>Support</h3>
        <ul className={styles["footer-3__list"]}>
          <li>help & support</li>
          <li>Tearms & conditions</li>
          <li>privacy policy</li>
          <li>help</li>
        </ul>
      </div>
      <div className={styles["footer-4"]}>
        <h3 className={styles["footer-3__title"]}>newsletter</h3>
        <form action="#" className={styles["footer-4__form"]}>
          <input type="text" placeholder="Your Email" />
          <Button className={styles["footer-4__button"]}>Subscribe</Button>
        </form>
        <p className={styles["footer-4__text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt erat enim.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
