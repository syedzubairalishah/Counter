import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(0)

  // let counter = 0;

  const addValue = () => {
    console.log("value added:",counter);
    counter = counter + 1;
    setCounter(counter)
  }

  const removeValue = () => {
    console.log("remove value:",counter);
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
    <h1>Shah-JEE</h1>
    <h2>Counter value: {counter} </h2>
    <button onClick={addValue}>Addd value {counter} </button>
    <br />
    <button onClick={removeValue}>Remove value {counter} </button>
    <p>Footer: {counter} </p>
    </>
  )
}

export default App
