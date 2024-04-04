import { useState } from 'react'
import FetchAll from './FetchAll'
import './App.css'
import Switch from './Switch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FetchAll /> */}
      <Switch />
    </>
  )
}

export default App
