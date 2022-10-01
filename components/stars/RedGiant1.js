import  React, { useState } from 'react'

import {  TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useRef } from 'react'


 export function RedGiant1 (props){

    const colorMap = useTexture("/sunmap2.png")
    const cloudMap = useTexture("/sunmap4.png")


    const earthRef =useRef()
    const cloudRef =useRef()
    const sphereRef = useRef();
  
    const [x, setX] = useState(3)
 
    setTimeout(()=>{
      if(x == -1){      
        setX(3)
      }else{
        setX(x - 1)
      }
    },  1000)

  useFrame(({ clock }) => {
    sphereRef.current.rotation.y += -0.01;
   
  });


 
   
    
  
    return (
          <>
          <ambientLight color="0xffffff" intensity={1} />
          <pointLight color='#f6f3ea'  position ={[2, 0, 2]} intensity={0.14}/>
          <mesh  ref={cloudRef}   position={[x, 0, 0]}    >
          <sphereGeometry  args={[1.4,  32, 32 ]}/>
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
          <mesh ref={sphereRef}  position={[x, 0, 0]} >
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

