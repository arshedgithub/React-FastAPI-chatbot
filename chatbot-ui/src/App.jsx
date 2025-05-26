import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline my-3'>Chatbot UI</h1>
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setCount(count + 1)}>Start Chat</button>
        
        <div>state: {count}</div>
      </div>
    </>
  )
}

export default App
