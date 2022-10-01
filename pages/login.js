
import Header from "../components/Header"
import styles from '../styles/Login.module.css'
import Image from "next/image";
import Footer from "../components/Footer";

import Link from "next/link";
import Menu from "../components/Menu";



const Login =()=>{
    return(
        <div  className={styles.container}>
           <Header/>
          
           <div className={styles.hbackgroud}></div>
          <div className={styles.loginCon}>

           <div className={styles.leftCon}>
                 <h1>Welcome Back Scholar</h1>
                 <p>kindly input your email and password, login to continue learning on astroMutatio</p>

           </div>
           <div className={styles.rightCon}>

               <form >
                <div className={styles.field}>
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" placeholder="Email address...."/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" placeholder="Enter password...."/>
                </div>
               </form>
            
          </div>
          </div>
          
           <Menu/>
            <Footer/>
        </div>
    )
}

export default Login