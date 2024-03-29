import { useState } from 'react'
import FetchAll from './FetchAll'
import { Background } from './Background'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchAll />
      <Background />
    </>
  )
}

export default App
