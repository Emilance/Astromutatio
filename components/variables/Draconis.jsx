import  React, { useState } from 'react'

import {  TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useRef } from 'react'


function Draconis (){
//   const [i, setI]= useState(0.5)
 
     const colorMap = useTexture("/rotating.png")
     const cloudMap = useTexture("/rotating.png")
    const earthRef =useRef()
    const cloudRef =useRef()
    useFrame(({ clock }) =>{
        const elapseTime = clock.getElapsedTime()
        earthRef.current.rotation.y = elapseTime / 6;
        cloudRef.current.rotation.y = elapseTime / 6;
    })
  
    return (
          <>
          <ambientLight intensity={0.9} />
          <mesh  ref={cloudRef}    >
          <sphereGeometry  args={[1.3, 32, 32 ]}/>
          <meshPhongMaterial map={cloudMap}    
          opacity={0.4}
          depthWrite ={true}
          transparent={true}
          side ={THREE.DoubleSide}

          />
          </mesh>
          <Stars  radius={300} 
          depth={60} 
          count={20000} 
          factor={7} 
          saturation={0}  
          fade={true}

          />
          <mesh ref={earthRef}>
              <sphereGeometry  args={[1, 32, 32 ]}/>
              <meshPhongMaterial  color='red'  />
              <meshStandardMaterial map={colorMap} />
              <OrbitControls  enableZoom={true} 
               enablePan={true}
               enableRotate={true}
               zoomSpeed={0.6}
               panSpeed={0.5}
               rotateSpeed={0.4}
           
               />
          </mesh>
          </>

   )
}


export default Draconis
