import { useState } from 'react'
import FetchAll from './FetchAll'
import { Background } from './Background'
import './App.css'
import Switch from './Switch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchAll />
      <Background />
      <Switch />
    </>
  )
}

export default App
