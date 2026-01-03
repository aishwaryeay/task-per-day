import './App.css'
import { useState } from 'react'

function App() {

  const [count , setCount] = useState(0)

  function handleIncr() {
    setCount(prev => prev + 1)
  }

  function handleDecr() {
    setCount(prev => Math.max(prev-1, 0))
  }

  return (
    <>
      <button onClick={handleIncr}> Incr </button>
      <h1>{count}</h1>
      <button onClick={handleDecr}
      disabled = {count === 0}> Decr </button>
    </>
  )
}

export default App
