import styles from '../styles/Header.module.css'
import {FaSignInAlt} from 'react-icons/fa'
import Link from 'next/link';

const Header = () => {
    return ( 
        <div  className={styles.container}>
           <h1> ASTROMUTATIO </h1>
           <Link href="/login">
              <button>
               SIgn Up
              </button>
           </Link>

        </div>
     );
}
 
export default Header;