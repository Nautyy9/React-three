import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { changeModes, useConfigContext } from "../context/CharacterConfig";
import * as THREE from "three";

//?  [changeModes.HEAD] == "HEAD" --> why not use simple ? --> cause in future we don't need to manually change every value if we change any position of camera or that object
//?  CameraPositions[modes] --> giving us the values of the FREE ,HEAD , BODY , BOTTOM
//? delta * 3 --> very useful as if not used the camera will directly jump to position without movement animtaion
// ? lerp help in getting smooth controls with useFrame

// * just normal setup will move the head postion camera to body position , and thats what we don't want , so what to do ? -> just update the orbit controls target postion to the target position of the CameraPositions object
// * stilly messy  ? ->  so our camera is at some y and a little in z  but the orbit controls target is at [0,0,0] , as of that the camera will always move regard to origin not the target object/position , that's why we are updating the orbit controls target

//? orbit controls can't be changed directly with attributes , so we need to add ref to it

const CameraPositions = {
  [changeModes.HEAD]: {
    position: new THREE.Vector3(0, 1.5, 1),
    target: new THREE.Vector3(0, 1.5, 0),
  },
  [changeModes.BODY]: {
    position: new THREE.Vector3(-0.5, 1.2, 1.2),
    target: new THREE.Vector3(0, 1, 0),
  },
  [changeModes.BOTTOM]: {
    position: new THREE.Vector3(0, 1.1, 2),
    target: new THREE.Vector3(0, 0.2, 0),
  },
};

function CustomControls() {
  const { modes, setModes, changeModes } = useConfigContext();
  const orbitControls = useRef();

  useFrame((state, delta) => {
    if (modes === changeModes["FREE"]) {
      return;
    }

    state.camera.position.lerp(CameraPositions[modes].position, delta * 3);
    orbitControls.current?.target.lerp(
      CameraPositions[modes].target,
      delta * 3
    );
  });

  return (
    <OrbitControls
      ref={orbitControls}
      maxDistance={20}
      minDistance={1}
      maxPolarAngle={Math.PI / 2}
      onStart={() => {
        setModes("FREE");
      }}
    />
  );
}

export default CustomControls;
