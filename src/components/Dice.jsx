import React, { useRef, useEffect } from 'react';
import { Box, useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Euler } from 'three'; 

const Dice = () => {
  const diceRef = useRef();
  const model = useGLTF('./dice.glb');

  const rollDice = () => {
    console.log(diceRef.current)

    diceRef.current.applyImpulse({ x: 0, y: 55, z: 0 }, true);

    const getRandomNumber = () => Math.floor(Math.random() * (100 - 10 + 1)) + 10;

    diceRef.current.applyTorqueImpulse({
      x: getRandomNumber(),
      y: getRandomNumber(),
      z: getRandomNumber()
    });
    
  };

  return (
    <RigidBody ref={diceRef} scale={4} position={[0, 5, 0]}>
      <primitive onClick={rollDice} object={model.scene} />
    </RigidBody>
  );
};

export default Dice;
