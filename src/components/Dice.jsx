import React from 'react';
import { RigidBody } from '@react-three/rapier';

const Dice = () => {


  return (
    <RigidBody colliders="ball">
        <mesh castShadow position={ [0,4,0] }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
    </RigidBody>
  );
};

export default Dice;
