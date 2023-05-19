import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hubs from './components/Hubs/Hubs.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Hubs></Hubs>
  
    </>
  )
}

export default App
