/// <reference types="vite/client" />

/// glb import
declare module '*.glb' {
  const src: string
  export default src
}
