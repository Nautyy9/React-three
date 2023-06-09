/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/woman.gltf
*/

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useAnimationContext} from '../context/CharacterAnimation'
import { useConfigContext } from '../context/CharacterConfig'
function Woman(props) {

  const { animInd,  setAnim} = useAnimationContext() 
  const {colorCustom, setColorCustom , morphDic , setMorphDic, setMorphInf} = useConfigContext()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/woman.gltf')
  const { actions, names } = useAnimations(animations, group)
  useEffect(() =>{
    setAnim(names)
  },[names])

  useEffect(() =>{
    actions[names[animInd]].reset().fadeIn(0.5).play()
    // ! important as all the animations will be played overlappingly
    return () =>{
      actions[names[animInd]].fadeOut(0.5)
    }
  }, [animInd])

  useEffect(() =>{
    setMorphDic(Object.keys(nodes.Mesh019.morphTargetDictionary))
    setMorphInf(nodes.Mesh019.morphTargetInfluences)
    setColorCustom((prev)=> ({ ...prev, 
      eyes : `#${materials.Eyes.color.getHexString()}`
    ,hair : `#${materials.Hair.color.getHexString()}`
    ,mouth : `#${materials.Mouth.color.getHexString()}`
    ,glass : `#${materials.Glasses.color.getHexString()}`
    ,skin : `#${materials.Skin.color.getHexString()}`
    ,shirt : `#${materials.Shirt.color.getHexString()}`
    ,pants : `#${materials.Pants.color.getHexString()}`
    ,shoes : `#${materials.Shoes.color.getHexString()}`
    ,laces : `#${materials.Laces.color.getHexString()}`
    ,sole : `#${materials.Sole.color.getHexString()}`}))
    
  },[])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="SM_Chr_Developer_Female_02">
            <skinnedMesh
              frustumCulled={false}
              castShadow
              name="Mesh019"
              geometry={nodes.Mesh019.geometry}
              skeleton={nodes.Mesh019.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            ><meshStandardMaterial {...materials.Glasses} color={colorCustom.glass}></meshStandardMaterial>
            </skinnedMesh>
            <skinnedMesh  
              frustumCulled={false}
              castShadow
              name="Mesh019_1"
              geometry={nodes.Mesh019_1.geometry}
              skeleton={nodes.Mesh019_1.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Eyes} color={colorCustom.eyes}></meshStandardMaterial>
            </skinnedMesh>
            <skinnedMesh 
              frustumCulled={false}
              castShadow
              name="Mesh019_2"
              geometry={nodes.Mesh019_2.geometry}
              skeleton={nodes.Mesh019_2.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Hair} color={colorCustom.hair}></meshStandardMaterial>
            </skinnedMesh>
            <skinnedMesh 
              frustumCulled={false}
              castShadow
              name="Mesh019_3"
              geometry={nodes.Mesh019_3.geometry}
              skeleton={nodes.Mesh019_3.skeleton}
              morphTargetDictionary={nodes.Mesh019.morphTargetDictionary}
              morphTargetInfluences={nodes.Mesh019.morphTargetInfluences}
            >
              <meshStandardMaterial {...materials.Skin} color={colorCustom.skin}></meshStandardMaterial>
            </skinnedMesh>
            <skinnedMesh  
            frustumCulled={false} 
            castShadow 
            name="Mesh019_4" 
            geometry={nodes.Mesh019_4.geometry}  
            skeleton={nodes.Mesh019.skeleton} 
            morphTargetDictionary={nodes.Mesh019.morphTargetDictionary} 
            morphTargetInfluences={nodes.Mesh019.morphTargetInfluences} 
            >
              <meshStandardMaterial {...materials.Mouth} color={colorCustom.mouth}></meshStandardMaterial>
            </skinnedMesh>
            <skinnedMesh  frustumCulled={false} castShadow name="Mesh019_5" geometry={nodes.Mesh019_5.geometry}  skeleton={nodes.Mesh019.skeleton} morphTargetDictionary={nodes.Mesh019.morphTargetDictionary} morphTargetInfluences={nodes.Mesh019.morphTargetInfluences} >
              <meshStandardMaterial {...materials.Shirt} color={colorCustom.shirt}></meshStandardMaterial>
            </skinnedMesh>
            <skinnedMesh  frustumCulled={false} castShadow name="Mesh019_6" geometry={nodes.Mesh019_6.geometry}  skeleton={nodes.Mesh019.skeleton}  morphTargetDictionary={nodes.Mesh019.morphTargetDictionary} morphTargetInfluences={nodes.Mesh019.morphTargetInfluences} >
              <meshStandardMaterial {...materials.Pants} color={colorCustom.pants}></meshStandardMaterial>
            </skinnedMesh>
            <skinnedMesh  frustumCulled={false} castShadow name="Mesh019_7" geometry={nodes.Mesh019_7.geometry}  skeleton={nodes.Mesh019.skeleton}  morphTargetDictionary={nodes.Mesh019.morphTargetDictionary} morphTargetInfluences={nodes.Mesh019.morphTargetInfluences} >
              <meshStandardMaterial {...materials.Shoes} color={colorCustom.shoes}></meshStandardMaterial>
            </skinnedMesh>
            <skinnedMesh  frustumCulled={false} castShadow name="Mesh019_8" geometry={nodes.Mesh019_8.geometry}  skeleton={nodes.Mesh019.skeleton}  morphTargetDictionary={nodes.Mesh019.morphTargetDictionary} morphTargetInfluences={nodes.Mesh019.morphTargetInfluences} >
            <meshStandardMaterial {...materials.Sole} color={colorCustom.sole}></meshStandardMaterial>
            </skinnedMesh>
            <skinnedMesh  frustumCulled={false} castShadow name="Mesh019_9" geometry={nodes.Mesh019_9.geometry}  skeleton={nodes.Mesh019.skeleton}  morphTargetDictionary={nodes.Mesh019.morphTargetDictionary} morphTargetInfluences={nodes.Mesh019.morphTargetInfluences} >
            <meshStandardMaterial {...materials.Laces} color={colorCustom.laces}></meshStandardMaterial>
            </skinnedMesh>
          </group>
        </group>
      </group>
    </group>
  )
}


export default Woman

// ? loading the model before we try to display it
useGLTF.preload('models/woman.gltf')
