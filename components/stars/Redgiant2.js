import  React, { useState } from 'react'

import {  TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useRef } from 'react'



 export function RedGiant2 (props){

    const colorMap = useTexture("/sunmap2.png")
    const cloudMap = useTexture("/sunmap4.png")

    const earthRef =useRef()
    const cloudRef =useRef()
    const sphereRef = useRef();
    const matRef = useRef();
    const repeatX = 10;
    const repeatY = 10;

    
    cloudMap.wrapS = THREE.RepeatWrapping;
    cloudMap.wrapT = THREE.RepeatWrapping;
    cloudMap.repeat.set(repeatX, repeatY);

  useFrame(({ clock }) => {
    sphereRef.current.rotation.y += -0.01;
    matRef.current.emissiveIntensity = Math.abs(
      Math.sin(clock.elapsedTime * 0.5)
    );
  });
   

     

     

    useFrame(({ clock }) =>{
        const elapseTime = clock.getElapsedTime()
        sphereRef.current.rotation.y = elapseTime / 6;
        cloudRef.current.rotation.y = elapseTime / 6;
    })

   
    
  
    return (
          <>
          <ambientLight color="0xffffff" intensity={0.4} />
          <pointLight color='#f6f3ea'  position ={[2, 0, 2]} intensity={0.14}/>
          <mesh className="scale"  ref={cloudRef}  position ={[0, 0, -2]} >
          <sphereGeometry  args={[0.8, 32, 32 ]}/>
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
          <mesh  className="scale"  ref={sphereRef}  position ={[0, 0, -2]}>
              <sphereGeometry  args={[0.6, 32, 32 ]}/>
              <meshPhongMaterial  color='blue'  />
              <meshStandardMaterial map={colorMap} />
              <meshPhysicalMaterial  
              ref={matRef}
            
              roughness={10}
              emissiveMap={cloudMap}
          
              emissive={"blue"}
              emissiveIntensity={0}
              />
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

