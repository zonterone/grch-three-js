import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

import { GLTF } from 'three-stdlib'
import grch from './assets/grch_logo.glb'

type GLTFResult = GLTF & {
  nodes: {
    Vector: THREE.Mesh
  }
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial
  }
}

export function GrchLogo(props: JSX.IntrinsicElements['group']) {
  const ref = useRef<THREE.Mesh>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const cameraPositionZ = useRef(11)

  useEffect(() => {
    const setMousePositionHandler = (e: MouseEvent) => {
      mousePosition.current = {
        x: window.innerWidth / 2 - e.clientX,
        y: window.innerHeight / 2 - e.clientY,
      }
    }
    cameraPositionZ.current = 32000 / window.innerWidth
    window.addEventListener('mousemove', setMousePositionHandler)

    return () => {
      window.removeEventListener('mousemove', setMousePositionHandler)
    }
  }, [])

  useFrame(({ camera }) => {
    if (!ref.current) return
    ref.current.rotation.x = Math.PI / 2 + mousePosition.current.y / 2000
    ref.current.rotation.z = -(mousePosition.current.x / 2000)
    camera.position.z = cameraPositionZ.current
  })

  const { nodes, materials } = useGLTF(grch) as GLTFResult
  nodes.Vector.geometry.computeVertexNormals()
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Vector.geometry}
        material={materials['Material.003']}
        position={[0, 0, -10]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1500}
      />
    </group>
  )
}

useGLTF.preload(grch)
