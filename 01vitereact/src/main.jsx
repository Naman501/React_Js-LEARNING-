import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// function MyApp ( ){
// return(
//   <div>
//     <h1>My App</h1>
//   </div>
// )
// }

const anotherElement= ( 
  <a href="https://google.com">Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
anotherElement 
)
