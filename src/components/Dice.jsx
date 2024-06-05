// src/components/Dice.js
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const Dice = () => {
  const diceRef = useRef();
  const { nodes, materials } = useGLTF('./Cow.glb');
  console.log("nodes: " + nodes)
  console.log("materials: " + materials)

  return (
    <RigidBody ref={diceRef} mass={1} position={[0, 5, 0]}>
      <primitive object={nodes.dice} material={materials.material} />
    </RigidBody>
  );
};

export default Dice;
