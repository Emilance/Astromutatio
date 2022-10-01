import Header from "../../components/Header"
import styles from '../../styles/LightCurve.module.css'
import RenderLineChart from "../../components/Curve"
import { cepheid } from "../../components/data/variable"
import {MdKeyboardBackspace} from 'react-icons/md'
import Link from "next/link"

const Cepheid =() => {
    return(
         <div className={styles.lcontainer}>
            <Header/>
            <div className={styles.hbackgroud}></div>
             <div className={styles.starCon}>
         <Link href="/lightcurve">
                <a>
                  <div className={styles.backButton}>
                     <MdKeyboardBackspace size="20"/>
                     <span>back</span>
                  </div>
                </a>
          </Link>
                
                 <RenderLineChart  data={cepheid}
                  title="LightCurve for Delta Cephei"
                  subtitle="Cepheid a type  of pulsative variable"
                 />
             </div>
             <div className={styles.buttonCon}>
                <Link href="/3d/cepheid">
                <button>3d visualizer</button>
                </Link>

                <button>Learn More</button>
             </div>

         </div>
    )
}

export default Cepheid