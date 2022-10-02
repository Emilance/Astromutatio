import styles from '../styles/Banner.module.css'
import Image from "next/image";
import { useEffect, useState } from 'react';


const headerSubtitle ="Come Let's learn stellar "
const astronomy ="variability"
const Banner = () => {
    const [typingWord, setTypingWord] = useState('')
    const [typingWord1, setTypingWord1] = useState('')
    useEffect( () => {
       const timeOut =  setTimeout(() => {
            setTypingWord(headerSubtitle.slice(0, typingWord.length + 1))
            setTypingWord1(astronomy.slice(0, typingWord1.length + 1))
        }, 150)
    
 
        return () =>{
          
            clearTimeout(timeOut)
        } ;
    }, [typingWord])
    return ( 
        <div className={styles.container}>
              <div className = {styles.leftCon}>
                   <h3>{typingWord} </h3>
                   <p>{typingWord1} </p>

              </div>
              <div className={styles.rightCon}>
                <div className={styles.imgCon}>
                    <Image src='/afall.png' alt="falling astronaut" layout='fill'/>
                </div>

              </div>



        </div>

     );
}
 
export default Banner;