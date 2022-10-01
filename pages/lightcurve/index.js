import Link from "next/link"
import { stars } from "../../components/data/starList"
import Header from "../../components/Header"
import styles from '../../styles/LightCurve.module.css'
import {MdKeyboardBackspace} from 'react-icons/md'
import Menu from "../../components/Menu"

const LightCurve =() => {

    return(
         <div className={styles.container}>
            
            <Header/>
            <div className={styles.hbackgroud}></div>
               <h1 > click a star to view its light curve </h1>
             <div className={styles.starCon}>
         {stars.map((data, i)=>{
            return(
                <Link  key={i} href={data.link}>

               <div className={(i%2 == 0 ? styles.star : styles.star2)}>
                  <p>{data.name}</p>
              </div>
                </Link>
            )
         })}
               
               
             </div>
         <Menu/>
         </div>
    )
}

export default LightCurve