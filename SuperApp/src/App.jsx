import { useState } from 'react'
import Loadpage from './Component/Loadpage/Loadpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Loadpage/>
    </>
  )
}

export default App
