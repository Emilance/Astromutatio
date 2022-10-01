import styles from '../styles/FeatureCard.module.css'
import Image from "next/image";
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureCard = ({data}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return ( 
            <Link  href={data.link} >
        <div data-aos="fade-left" className={styles.container}>


            <div className={styles.imgCon}>
                 <Image  className={styles.img} src={data.image}  alt={data.title} layout="fill"/>
                 <div className={styles.imgOverlay}>
                        <p>{data.overlayText}</p>
                 </div>
            </div>
            <div className={styles.caption}>
                <div className={styles.leftCon}>
                    <div className={styles.star}>
                        WS
                    </div>
                </div>
                <div className={styles.rightCon}>
                <h3>{data.title}</h3>
                <p>{data.subtitle}</p>

                </div>

            </div>

        </div>
            </Link>
     );
}
 
export default FeatureCard;