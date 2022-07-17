import React from "react";
import styles from "./CompanyLogo.module.css";
import Logo from "../assets/Logo.png";
import Logo1 from "../assets/Logo-1.png";
import Logo2 from "../assets/Logo-2.png";
import Logo3 from "../assets/Logo-3.png";
import Logo4 from "../assets/Logo-4.png";
import Logo5 from "../assets/Logo-5.png";
import Logo6 from "../assets/Logo-6.png";
const CompanyLogo = () => {
  return (
    <section className={styles.company}>
      <img src={Logo} alt="logo" />
      <img src={Logo1} alt="logo" />
      <img src={Logo2} alt="logo" />
      <img src={Logo3} alt="logo" />
      <img src={Logo4} alt="logo" />
      <img src={Logo5} alt="logo" />
      <img src={Logo6} alt="logo" />
    </section>
  );
};

export default CompanyLogo;
