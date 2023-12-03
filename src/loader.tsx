import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const Loader = () => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })
  return (
    <>
      <mesh ref={ref} position={[0, 0, 1]}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color='#171717' metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, -6, 1]}>
        <Text color='#303030' anchorX='center' anchorY='middle'>
          Loading...
        </Text>
      </mesh>
    </>
  )
}
