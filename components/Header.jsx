import styles from '../styles/Header.module.css'
import {FaSignInAlt} from 'react-icons/fa'

const Header = () => {
    return ( 
        <div  className={styles.container}>
           <h1> ASTROMUTATIO </h1>
           <button>
            SIgn Up
           </button>
        </div>
     );
}
 
export default Header;