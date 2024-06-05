import React from 'react';
import { RigidBody } from '@react-three/rapier';


const Wall = ({dimensions, position}) => {
  return (
    <RigidBody type="fixed" position={position}>
      <mesh receiveShadow>
        <boxGeometry args={dimensions} />
        <meshStandardMaterial color="blue" transparent="true" opacity="0" />
      </mesh>
    </RigidBody>
  );
};

export default Wall;
