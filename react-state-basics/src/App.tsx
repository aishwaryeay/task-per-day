import './App.css'
import { useState } from 'react'

function App() {

  const [count , setCount] = useState(0)
  const [isDisabled , setIsDisabled] = useState(false)

  function handleIncr() {
    setCount(count + 1)
    setIsDisabled(false)
  }

  function handleDecr() {
    if (count > 0 ) {
      setCount(count - 1)
    } else {
      setIsDisabled(true)
    }
  }

  return (
    <>
      <button onClick={handleIncr}> Incr </button>
      <h1>{count}</h1>
      <button onClick={handleDecr}
      disabled = {isDisabled}> Decr </button>
    </>
  )
}

export default App
