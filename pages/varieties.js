import Link from 'next/link';

import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';

import styles from '../styles/Varieties.module.css'
import {MdKeyboardBackspace} from 'react-icons/md'
import { Hotblue } from '../components/stars/Hotblue';
import { RedGiant } from '../components/stars/RedGiant';


const Varieties = ()=>{
    return (
        <div className={styles.container}>
            <Canvas>
              <Suspense >
                <Hotblue/>
                <RedGiant/>
           
              </Suspense>
            </Canvas>
        </div>
    )
}


export default Varieties 