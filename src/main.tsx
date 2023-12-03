import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Canvas camera={{ fov: 45, position: [0, 0, 30] }}>
      <App />
    </Canvas>
  </React.StrictMode>
)
