import React from "react"
import styles from '../styles/SignUp.module.css'

const SignUp =() =>{
    return(
        <div className={styles.container}>
            <form >
                <h1>Sign Up</h1>
                <p> sign up with ur info</p>
                <div className={styles.field}>  
                     <input   type="text"   placeholder="" />
                </div>
            </form>
        </div>
    )
}


export default  SignUp