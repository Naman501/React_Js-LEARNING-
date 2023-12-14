import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
// let myObj = {
//   name:"naman",
//   age:20
// }
  return (
    <>
      <h1 className='bg-green-200 text-pink-600 p-5 rounded-xl' >TAILWIND TEST</h1>
      <Card name="LASSI" btnText="Click Kar" />
      <Card name="MONTY" btnText="Idhar Bhi Click Kar" />
    </>
  )
}

export default App
