import { useState } from 'react'
import FetchAll from './FetchAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchAll />
    </>
  )
}

export default App
