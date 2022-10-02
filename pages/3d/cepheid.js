import Link from "next/link";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import Planet from "../../components/Planet";
import styles from "../../styles/Cepheid.module.css";
import { MdKeyboardBackspace } from "react-icons/md";

function App() {
  const [currentYear, setCurrentYear] = useState(0);
  const changeYear = () => {
    setCurrentYear((currentYear += 1));
  };

  if (currentYear >= 10) {
    setCurrentYear(0);
  } else {
    setTimeout(() => {
      changeYear();
    }, 500);
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
        <h1>PULSATING VARIABLE STAR</h1>
        <p>
          Pulsating variables e.g Cepheid variables are stars which expand and
          shrink dramatically.{" "}
        </p>
        <p>Delta Cephei is a sample of Cepheid variable star</p>
        <label htmlFor="year">{`${currentYear} -days`}</label>
        <progress id="year" max="10" value={currentYear}>
          5days
        </progress>
        <div className={styles.buttonCon}>
          <Link href="/lightcurve/cepheid">
            <button>LightCurve</button>
          </Link>
          <Link href="/video/C4lRmBEdrIc">
          <button>Learn More</button>
          </Link>
        </div>
      </div>
      <Canvas>
        <Suspense>
          <Planet currentYear={currentYear} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
