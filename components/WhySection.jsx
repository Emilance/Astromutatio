import styles from '../styles/WhySection.module.css'
import Image from "next/image";
import {AiOutlineFileAdd }  from 'react-icons/ai'
import {MdMoreHoriz, MdQuestionAnswer} from "react-icons/md"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const leftWhy = [
     {
          text: "How are stars created ?"
     },
     {
          text: "How was our stars created ?"
     },
     {
          text: "What will be the end of stars ?"
     },
     {
          text: "Why is space black  ?"
     }
]

const rightWhy  = [
     {
          text: "How big are stars ?"
     },
     {
          text: "what are stars near to the earth ?"
     },
     {
          text: "How many stars do we havein the universe ?"
     },
     {
          text: "How big is our universe ?"
     }
]
const WhySection = () => {
     useEffect(() => {
          AOS.init( {duration:"1000"});
        }, [])
    return ( 
        <div className={styles.container}> 
             <h1>I WANNA KNOW!!!</h1>
             <div className={styles.body}>
               <div className={styles.leftCon}>
                 {rightWhy.map((data, i)=>{
                    return(
                    <div data-aos="fade-up" key={i} className={styles.questionCon}>
                       <p>{data.text}</p>
                    </div>     

                    )
                 })}
               </div>
           
             <div className={styles.rightCon}>
             {leftWhy.map((data, i)=>{
               return(
                    <div data-aos="fade-up"  key={i} className={styles.questionCon}>
                       <p>{data.text}</p>
                    </div>     

               )

                 })}

             </div>
             </div>
             <div className={styles.buttonCon}>
               <button  data-aos="fade-up">SEE MORE WHY <MdMoreHoriz size="15px"/> </button>
               <button  data-aos="fade-up">ADD A WHY <AiOutlineFileAdd size="15px"/></button>
               <button  data-aos="fade-up">ANSWER  A WHY  <MdQuestionAnswer size="15px"/></button>
               </div> 
        </div>


     );
}
 
export default WhySection;