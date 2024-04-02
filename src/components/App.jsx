import { useState } from 'react'
import FetchAll from './FetchAll'
import Search from './Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchAll />
    </>
  )
}

export default App
