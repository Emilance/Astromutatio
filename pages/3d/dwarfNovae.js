import Link from "next/link";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import styles from "../../styles/Cepheid.module.css";
import { MdKeyboardBackspace } from "react-icons/md";
import Draconis from "../../components/variables/Draconis";
import { RedGiant } from "../../components/stars/RedGiant";
import { Hotblue } from "../../components/stars/Hotblue";

function Dwarf() {
  const [currentYear, setCurrentYear] = useState(0);
  const changeYear = () => {
    setCurrentYear((currentYear += 37));
  };

  if (currentYear >= 296) {
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
        <h1>CATASLYSMIC VARIABLE STAR</h1>
        <p>
          Cataslysmic variables brighten because of sharp or violent outbursts
          caused by thermonuclear processes.
          <p>
            They are binary star system that have a white dwarf and a normal
            star.
          </p>{" "}
        </p>
        <label htmlFor="year">{`${currentYear} -days`}</label>
        <progress id="year" max="296" value={currentYear}>
        296days
        </progress>
        <div className={styles.buttonCon}>
          <Link href="/lightcurve/draconis">
            <button>lightcurve</button>
          </Link>
          <Link  href="/video/hWxsl9ZRgWM">
          <button>Learn More</button>
          </Link>
        </div>
      </div>
      <Canvas>
        <Suspense>
          <RedGiant />
          <Hotblue />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Dwarf;
