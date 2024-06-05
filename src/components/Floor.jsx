import React from 'react';
import { RigidBody } from '@react-three/rapier';


const Floor = () => {
  return (
    <RigidBody type="fixed">
      <mesh receiveShadow>
        <boxGeometry args={[25, 1, 25]} />
        <meshStandardMaterial color="lightgreen" />
      </mesh>
    </RigidBody>
  );
};

export default Floor;
