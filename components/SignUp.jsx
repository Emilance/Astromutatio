import React from "react";
import styles from "../styles/SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <form>
        <h1>Sign Up</h1>
        <p> sign up with ur info</p>
        <div className={styles.field}>
          <input
            type="text"
            className={styles.input}
            placeholder="First Name:"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Surname:"
          ></input>
          <input
            type="text"
            className={styles.input}
            placeholder="Email Address:"
          ></input>
          <input
            type="password"
            className={styles.input}
            placeholder="New Password:"
          ></input>
          <p>
            By clicking Sign Up, you agree to our Terms,
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className={styles.link}>
              Cookies Policy.
            </a>
          </p>
          <button className={styles.button}>Sign Up</button>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default SignUp;
