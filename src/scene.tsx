import { Suspense } from 'react'
import { GrchLogo } from './grch-logo'
import { Loader } from './loader'

function Scene() {
  return (
    <>
      <ambientLight intensity={8} />
      <directionalLight position={[0, 0, 5]} intensity={20} color='gray' />
      <directionalLight position={[0, 10, 5]} intensity={1} color='gray' />
      <directionalLight position={[0, -10, 5]} intensity={1} color='gray' />
      <directionalLight position={[0, 10, -5]} intensity={1} color='gray' />
      <directionalLight position={[0, -10, -5]} intensity={1} color='gray' />
      <directionalLight position={[-10, 0, -5]} intensity={1} color='gray' />
      <directionalLight position={[10, 0, -5]} intensity={1} color='gray' />
      <directionalLight position={[-10, 0, 5]} intensity={1} color='gray' />
      <directionalLight position={[10, 0, 5]} intensity={1} color='gray' />

      <Suspense fallback={<Loader />}>
        <GrchLogo />
      </Suspense>
    </>
  )
}

export default Scene
