import { useState } from 'react'
import Loadpage from './Component/Loadpage/Loadpage'
import Categorypage from './Component/Categorypage/Categorypage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Logedin from './Component/Logedinpage/Logedin'
function App() {
  const [count, setCount] = useState(0)
//added 
  return (

    <BrowserRouter>

      <>
        <Routes>

          <Route path='/' element={<Loadpage />} />
          <Route path='/Category' element={<Categorypage />} />
          <Route path='/Logedin' element={<Logedin />} />

        </Routes>
      </>

    </BrowserRouter>
  )
}

export default App
