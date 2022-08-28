import React, { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./SignIn.module.css";
// import Eye from "../assets/eye.png";
import { useDispatch, useSelector } from "react-redux";
// import login from "../services/login";
import { login } from "../actions/auth";
import { useNavigate } from "react-router-dom";
const isEmpty = (value) => {
  return value.trim() === "";
};

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassowrd(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email !== "" && password !== "") {
      // await login(email, password);
      dispatch(login(email, password))
        .then(() => {
          history("/");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    }
    if (!isEmpty) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const debouncedChangeHandler = (e) => setTimeout(emailHandler(e), 10000);
  const debouncedPasswordHandler = (e) => setTimeout(passwordHandler(e), 10000);

  return (
    <main>
      <Header />
      <div className={styles["sign-in"]}>
        <form action="#" className={styles.login} onSubmit={submitHandler}>
          <h3 className={styles["form-title"]}>Sign In</h3>
          <input
            type="username"
            className={styles["form-email"]}
            placeholder="username"
            value={email}
            onChange={debouncedChangeHandler}
          />
          {valid && (
            <p className="text-alert">mohon masukan input yang benar</p>
          )}
          <input
            type="password"
            className={styles["form-passowrd"]}
            placeholder="Password"
            value={password}
            onChange={debouncedPasswordHandler}
          />

          {/* <img src={Eye} alt="eye logo" className={styles["eye-form"]} /> */}
          <div className={styles["form-bottom"]}>
            <div className={styles["from-checkbox"]}>
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">Remember Me</label>
            </div>
            <div className={styles["form-forget"]}>
              <a href="#">Forget Password</a>
            </div>
          </div>
          <Button className={styles["signin-button"]} type="submit">
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
