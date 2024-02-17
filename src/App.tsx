import { useState } from 'react'
import ReactLogo from './assets/react.svg?react'
import ViteLogo from '../public/vite.svg?react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gray-800 gap-8'>
      <div className='flex flex-row justify-center items-center gap-8'>
        <a href="https://vitejs.dev" target="_blank">
          <ViteLogo className='w-36 h-36'/>
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo className='w-36 h-36'/>
        </a>
      </div>
      <h1 className='text-purple-700 text-9xl font-sans'>ViReT</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='text-white text-2xl'>
          count is {count}
        </button>
      </div>
      <p className='text-white text-2xl'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
