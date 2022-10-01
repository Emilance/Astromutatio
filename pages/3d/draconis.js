import Link from "next/link";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import styles from "../../styles/Cepheid.module.css";
import { MdKeyboardBackspace } from "react-icons/md";
import Draconis from "../../components/variables/Draconis";

function Dra() {
  const [currentYear, setCurrentYear] = useState(0);
  const changeYear = () => {
    setCurrentYear((currentYear += 1));
  };

  if (currentYear >= 39) {
    setCurrentYear(0);
  } else {
    setTimeout(() => {
      changeYear();
    }, 1000);
  }

  return (
    <div className={styles.app}>
      <div className={styles.float}>
        <Link href="/3d">
          <a>
            <div className={styles.backButton}>
              <MdKeyboardBackspace size="20" />
              <span>Back</span>
            </div>
          </a>
        </Link>
        <h1>ROTATING VARIABLE STAR</h1>
        <p>
          Rotating Variable stars are stars that changes brightness due to
          rotation to the darker part of the star.
        </p>
        <p>An example is BY DRACONIS</p>

        <label htmlFor="year">{`${currentYear} -days`}</label>
        <progress id="year" max="39" value={currentYear}>
          5days
        </progress>
        <div className={styles.buttonCon}>
          <Link href="/lightcurve/draconis">
            <button>lightcurve</button>
          </Link>
          <button>Learn More</button>
        </div>
      </div>
      <Canvas>
        <Suspense>
          <Draconis currentYear={currentYear} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Dra;
