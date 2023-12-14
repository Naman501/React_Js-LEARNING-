import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(6)



  // const [count, setCount] = useState(0)
  // let counter=6
  const addValue=()=>{
    console.log("cicked",counter);
    // counter=counter+1
    // console.log("value Added :",Math.random())
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    
   
  
    }

  

  const removeValue=()=>{
    console.log("clicked",counter);
    setCounter(counter-1)
  }

  return (
    <>
      <h1>NAMAN MITTAL</h1>
      <h2>Counter Value :{counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <br />
        <button
        onClick={removeValue}>Remove Value {counter}</button>
        <br />
        <p>Footer {counter}</p>
      
  </>
  )
}

export default App
