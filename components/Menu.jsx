import React, { useEffect, useState } from 'react';
import styles from '../styles/Menu.module.css'
import {FcHome, FcVideoCall, FcLineChart, FcMenu} from "react-icons/fc"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  useEffect(() => {
    AOS.init();
  }, [])
    return ( 
        <div className={styles.container}>
          {
            openMenu  &&
          
            <div className={styles.menu}>
              <Link href="/lightcurve">

               <div data-aos="fade-up" data-aos-duration="1000"  className={styles.menuIcon}>
                 <FcLineChart size="40px"/>
               </div>
              </Link>
               <Link href='/video'>
               <div data-aos="fade-up" data-aos-duration="80"  className={styles.menuIcon}>
                 <FcVideoCall size="40px"/>
               </div>
               </Link>
               <Link href="/">

               <div data-aos="fade-up" data-aos-duration="600"  className={styles.menuIcon}>
                 <FcHome size="40px"/>
               </div>
               </Link>

               </div>

          }   

               <div    onClick={()=> setOpenMenu(!openMenu)}  id={styles.menuKey} className={styles.menuIcon}>
                 <FcMenu size="40px"/>
               </div>

        </div>

     );
}
 
export default Menu;