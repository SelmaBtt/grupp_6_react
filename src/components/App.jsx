import { useState } from 'react'
import FetchAll from './FetchAll'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchAll />
    </>
  )
}

export default App
