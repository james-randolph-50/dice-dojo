// src/App.js
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Floor from './components/Floor';
import Dice from './components/Dice';
import Wall from './components/Wall';

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 10, 10], fov: 75 }}>
      <Suspense>
      <Text position={[5, 5, -10]} color="black" >
        Click the dice to roll it.
      </Text>
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
        <Wall dimensions={[1,20,25]} position={[13,10,0]} />
        <Wall dimensions={[1,20,25]} position={[-13,10,0]} />
        <Wall dimensions={[25,20,1]} position={[0,10,-12.5]} />
        <Dice />
      </Physics>
      <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default App;

