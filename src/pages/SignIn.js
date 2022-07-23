import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./SignIn.module.css";
import Eye from "../assets/eye.png";
const SignIn = () => {
  return (
    <main>
      <Header />
      <div className={styles["sign-in"]}>
        <form action="#" className={styles.login}>
          <h3 className={styles["form-title"]}>Sign In</h3>
          <input
            type="email"
            className={styles["form-email"]}
            placeholder="Email"
          />
          <input
            type="password"
            className={styles["form-passowrd"]}
            placeholder="Password"
          />
          {/* <img src={Eye} alt="eye logo" className={styles["eye-form"]} /> */}
          <div className={styles["form-bottom"]}>
            <div className={styles["from-checkbox"]}>
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">Remember Me</label>
            </div>
            <div className={styles["form-forget"]}>
              <p>Forget Password</p>
            </div>
          </div>
          <Button className={styles["signin-button"]}>
            Sign In <span className={styles["signin-row"]}>&rarr;</span>
          </Button>
          <div className={styles["form-signup"]}>
            <span>Don't Have Account? &nbsp;</span>
            <a href="#"> Sign Up</a>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default SignIn;
