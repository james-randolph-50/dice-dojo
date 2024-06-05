import React from 'react';
import { RigidBody } from '@react-three/rapier';


const Floor = () => {
  return (
    <RigidBody type="fixed">
      <mesh receiveShadow>
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </RigidBody>
  );
};

export default Floor;
