import React, { useEffect } from "react";
import { ContactShadows, OrbitControls, PresentationControls } from "@react-three/drei";
import Woman from "./Woman";
import { useTheme } from "@emotion/react";
import { useThree } from "@react-three/fiber";
import {useConfigContext} from '../context/CharacterConfig'
function Experience() {
  const gl = useThree((state) => state.gl)
  const {takeSs, setTakeSs} = useConfigContext()

  useEffect(() =>{
    if(takeSs) {
      screenShot();
      setTakeSs(false)
    }
  }, [takeSs])

  function screenShot() {
    const link = document.createElement('a')
    link.setAttribute("download" , "screenshot.png");
    link.setAttribute("href", gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
    link.click();
  }
  return (
    <>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI/2 , 0,0]} receiveShadow>
        <planeGeometry args={[10, 10, 1,1]}/>
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <group position={[0, 0, 0]}>
        <Woman/>
      </group>
  
      {/* <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} /> */}
    </>
  );
}

export default Experience;