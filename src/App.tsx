import { GrchLogo } from './grch-logo'

function App() {
  return (
    <>
      {/* <ambientLight intensity={5} /> */}
      <directionalLight position={[0, 0, 5]} intensity={25} color='gray'/>
      <directionalLight position={[0, 10, 5]} intensity={30} color='gray'/>
      <directionalLight position={[0, -10, 5]} intensity={30} color='gray'/>
      <directionalLight position={[-10, 0, 5]} intensity={30} color='gray'/>
      <directionalLight position={[10, 0, 5]} intensity={30} color='gray'/>

      <pointLight position={[-14, 0, 1]} intensity={25} distance={50} />
      <pointLight position={[-5, 0, 1]} intensity={25} distance={50} />

      <pointLight position={[5, 0, 1]} intensity={25} distance={50} />
      <pointLight position={[14, 0, 1]} intensity={25} distance={50} />
      <GrchLogo />
    </>
  )
}

export default App
