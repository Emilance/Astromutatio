import React from "react"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import styles from '../../styles/Quiz.module.css'


const Quiz = ()=>{
    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.hbackgroud}></div>
             <div className={styles.quizSection}>
                 <div className={styles.leftCon}>
                        Scale up!!
                 </div>
                 <div className={styles.rightCon}>
                           <h1>QUIZ</h1>
                           <hr/>
                           <p>this is the question answer answer?</p>
                           <hr/>
                           <div className={styles.optionCon}>
                          <div className={styles.rightOpt}>
                              <div className={styles.option}>
                                  answer 1
                              </div>
                              <div className={styles.option}>
                                  answer 1
                              </div>
                           </div>
                           <div className={styles.leftOpt}>
                                
                              <div className={styles.option}>
                                  answer 1
                              </div><div className={styles.option}>
                                  answer 1
                              </div>
                           </div>
                           </div>
                 </div>
             </div>
             <Menu/>
        </div>
    )
}

export default Quiz