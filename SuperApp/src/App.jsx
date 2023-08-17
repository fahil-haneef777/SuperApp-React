import { useState } from 'react'
import Loadpage from './Component/Loadpage/Loadpage'
import Categorypage from './Component/Categorypage/Categorypage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>

    <>
    <Routes>
   
     <Route path='/' element={<Loadpage/>}/>
     <Route path='/Category' element={<Categorypage/>}/>
     
     </Routes>
    </>
    
    </BrowserRouter>
  )
}

export default App
