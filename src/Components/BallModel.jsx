import { Model } from '@/assets/Scene'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const BallModel = () => {
  return (
    <div id='ball_id' className='fixed top-0 z-20 bg-transparent h-[100vh] w-[100vw]'>
        <Canvas camera={{ fov: 20, near: 1, far: 2000 }}>
           <ambientLight intensity={1.25} />
           <directionalLight intensity={0.4} />
           <Model   />
           <Environment preset='apartment' />
           <OrbitControls />
        </Canvas>
    </div>
  )
}

export default BallModel