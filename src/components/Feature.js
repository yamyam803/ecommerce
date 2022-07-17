import React from "react";
import styles from "./Feature.module.css";
import FreeDeliveryLogo from "../assets/Frame 6-1.png";
import GreatSupportLogo from "../assets/Frame 6-2.png";
import SecurePaymentLogo from "../assets/Frame 6-3.png";
import DiscountLogo from "../assets/Frame 6.png";
const Feature = () => {
  return (
    <section className={styles.feature}>
      <img src={FreeDeliveryLogo} alt="free delivery discount" />
      <img src={GreatSupportLogo} alt="great support logo" />
      <img src={SecurePaymentLogo} alt="secure payment logo" />
      <img src={DiscountLogo} alt="discount logo" />
    </section>
  );
};

export default Feature;
