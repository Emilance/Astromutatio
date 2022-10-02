import Header from "../components/Header";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import Footer from "../components/Footer";

import Link from "next/link";
import Menu from "../components/Menu";
import SignUp from "../components/SignUp";
import { useState } from "react";

const Login = () => {
  const [openSignUp, setOpenSignUp]= useState(false)


   const openSignUpForm = e =>{
      e.preventDefault()
      setOpenSignUp(!openSignUp)
   }
  
  return (
    <div className={styles.container}>
      <Header />
      {openSignUp    &&   <SignUp setOpenSignUp={setOpenSignUp}  openSignUp={openSignUp} />  }
     
      <div className={styles.hbackgroud}></div>
      <div className={styles.loginCon}>
        <div className={styles.leftCon}>
          <h1>Welcome Back Scholar</h1>
          <p>
            kindly input your email and password, login to continue learning on
            astroMutatio
          </p>
        </div>
        <div className={styles.rightCon}>
          <form>
            <div className={styles.field}>
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div className={styles.field}>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <button className={styles.button}>Log In</button>
            <a href="#" className={styles.link}>
              Forgotten Password?
            </a>
            <button  onClick={e => openSignUpForm(e)} className={styles.button}>Create New Account</button>
          </form>
        </div>
      </div>

      <Menu />
      <Footer />
    </div>
  );
};

export default Login;
