import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0))
  const reset = () => setCount(0)

  return (
    <>
      <div className="background-blobs">
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      <div className="counter-container">
        <h1>Pulse Counter</h1>
        <div className="count-display">
          {count}
        </div>

        <div className="controls">
          <div className="main-btns">
            <button className="btn btn-dec" onClick={decrement} aria-label="Decrease">
              -
            </button>
            <button className="btn btn-inc" onClick={increment} aria-label="Increase">
              +
            </button>
          </div>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App