import Link from "next/link";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import styles from "../../styles/Cepheid.module.css";
import { MdKeyboardBackspace } from "react-icons/md";

import { RedGiant1 } from "../../components/stars/RedGiant1";
import { RedGiant2 } from "../../components/stars/Redgiant2";

function Eclipsing() {
  const [currentYear, setCurrentYear] = useState(0);
  const changeYear = () => {
    setCurrentYear((currentYear += 4000));
  };

  if (currentYear >= 16000) {
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
        <h1>ECLIPSING VARIABLE STAR</h1>
        <p>
          Stars that pass in front of each other, causing fluctuation and
          obscuring of the light seen on Earth.{" "}
        </p>
        <label htmlFor="year">{`${currentYear} -days`}</label>
        <progress id="year" max="16000" value={currentYear}>
          16000days
        </progress>
        <div className={styles.buttonCon}>
          <Link href="/lightcurve/ecipsing">
            <button>lightcurve</button>
          </Link>
          <Link href="/video/meeSpRGk74o">
          <button>Learn More</button>
          </Link>
        </div>
      </div>
      <Canvas>
        <Suspense>
          <RedGiant1 />
          <RedGiant2 />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Eclipsing;
