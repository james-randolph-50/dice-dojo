// src/App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Floor from './components/Floor';
import Dice from './components/Dice';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Physics>
        <Floor />
        {/* <Dice /> */}
      </Physics>
      <OrbitControls />
      {/* <p className="read-the-docs">
        dice set by Jeremy Eyring [CC-BY] via Poly Pizza
      </p> */}
    </Canvas>
  );
};

export default App;

