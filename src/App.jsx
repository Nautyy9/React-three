import React from 'react'
import {Canvas} from '@react-three/fiber'
import Experience from '../components/Experience'
import { OrbitControls } from '@react-three/drei'
import Text from '../components/Text'
import CustomControls from '../components/CustomControls'
function App() {
  return (
    <>
      <Canvas camera={{position : [.5,3,4] ,fov : 50}} shadows gl={{preserveDrawingBuffer : true}}>
      <CustomControls/>
      <ambientLight/>
      <directionalLight castShadow receiveShadow position={[-5, 5, 5]} shadow-mapSize-width={1024} shadow-mapSize-height={1024}/>
        <Experience/>
      </Canvas>
      <Text/>
    </>
  )
}

export default App