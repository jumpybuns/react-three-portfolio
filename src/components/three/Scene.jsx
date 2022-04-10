import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { Suspense } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Scene = (props) => {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame

  return (
    <mesh visible position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color='hotpink' transparent />
    </mesh>
  );
};
export default Scene;
