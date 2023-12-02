import { GrchLogo } from './grch-logo'

function App() {
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

      <GrchLogo />
    </>
  )
}

export default App
