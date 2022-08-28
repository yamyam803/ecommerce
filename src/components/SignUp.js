import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./SignUp.module.css";
import Button from "./Button";
import daftar from "../services/daftar";

// const isEmpty = (value) => {
//   return value.trim() === "";
// };

const SignUp = () => {
  //   const [valid, setValid] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  //   const emailHandler = () => {};

  const submitHandler = (e) => {
    e.preventDefault();
    if (form.email.trim() === "") return alert("Wajib di isi");
    daftar(form);
    // if (!isEmpty) {
    //   setValid(false);
    // } else {
    //   setValid(true);
    // }
  };

  return (
    <div>
      <Header />
      <div className={styles["sign-in"]}>
        <form action="#" className={styles.login} onSubmit={submitHandler}>
          <h3 className={styles["form-title"]}>Sign Up</h3>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            className={styles["form-email"]}
            placeholder="Email"
            id="email"
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
          {/* {valid && (
            <p className="text-alert">mohon masukan input yang benar</p>
          )} */}
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            className={styles["form-passowrd"]}
            placeholder="Password"
            id="password"
            onChange={(e) => {
              setForm({
                ...form,
                password: e.target.value,
              });
            }}
          />
          <div className={styles.name}>
            <div className={styles.firstLabel}>
              <label htmlFor="firstName" className={styles.labelFirst}>
                First Name
              </label>
              <input
                type="text"
                className={styles.first}
                placeholder="First Name"
                id="firstName"
                onChange={(e) => {
                  setForm({
                    ...form,
                    firstName: e.target.value,
                  });
                }}
              />
            </div>
            <div className={styles.lastLabel}>
              <label htmlFor="lastName" className={styles.labelLast}>
                Last Name
              </label>
              <input
                type="text"
                className={styles.last}
                placeholder="Last Name"
                id="lastName"
                onChange={(e) => {
                  setForm({
                    ...form,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            className={styles["form-passowrd"]}
            placeholder="Username"
            id="username"
            onChange={(e) => {
              setForm({
                ...form,
                username: e.target.value,
              });
            }}
          />
          <label htmlFor="phonenumber" className={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            className={styles["form-passowrd"]}
            placeholder="Phone Number"
            id="phonenumber"
            onChange={(e) => {
              setForm({
                ...form,
                phoneNumber: e.target.value,
              });
            }}
          />
          {/* <img src={Eye} alt="eye logo" className={styles["eye-form"]} /> */}
          {/* <div className={styles["form-bottom"]}>
            <div className={styles["from-checkbox"]}>
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">Remember Me</label>
            </div>
            <div className={styles["form-forget"]}>
              <a href="#">Forget Password</a>
            </div>
          </div> */}
          <Button className={styles["signin-button"]} type="submit">
            Sign Up <span className={styles["signin-row"]}>&rarr;</span>
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
