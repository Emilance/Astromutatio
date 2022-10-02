import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import {BsFillStarFill , BsFillMoonStarsFill} from "react-icons/bs"
import { MdStarOutline}  from "react-icons/md"
import  {GiStarsStack}  from "react-icons/gi"

const Footer = () => {
    return ( 
        <div className={styles.container}>
          <div className={styles.leftCon}>
               <div className={styles.ImgCon}>
                <Image className={styles.img} src='/moon1.png'  alt='' layout="fill"/>
               </div>
          </div>
          <div className={styles.midCon}>
               <div className={styles.iconCon} >
                   <BsFillStarFill size="20px"/>
                   <GiStarsStack size="20px"/>
                   <MdStarOutline size="20px"/>
                   <BsFillMoonStarsFill size="20px"/>
               </div>
               <a href='#'> Astronomy picture of the day</a>
          </div>
          <div className={styles.rightCon}>
             <h3> AstroMutatio</h3>
             <p>Contact Us</p>
             <p>Our Team </p>
          </div> 

        </div>

     );
}
 



export default Footer;