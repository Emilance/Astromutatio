import  React, { useState } from 'react'
import earthDayMap from '../components/assets/8k_earth_daymap.jpg'
import earthNormalMap from '../components/assets/8k_earth_normal_map.jpg'
import earthSpecularMap from '../components/assets/8k_earth_specular_map.jpg'
import earthCloudMap from '../components/assets/8k_earth_clouds.jpg'
import {  TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useRef } from 'react'


function Eruptive ({currentYear}){
//   const [i, setI]= useState(0.5)
  if((currentYear >= 1 && currentYear <= 5))
  {
   var i = 2
  }else{
    var i = 0.5
  }
     const colorMap = useTexture("/sunmap2.png")
     const cloudMap = useTexture("/sunmap4.png")
    const earthRef =useRef()
    const cloudRef =useRef()
    useFrame(({ clock }) =>{
        const elapseTime = clock.getElapsedTime()
        earthRef.current.rotation.y = elapseTime / 6;
        cloudRef.current.rotation.y = elapseTime / 6;
    })
  
    return (
          <>
          <ambientLight intensity={i} />
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


export default Eruptive
