import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// function App(){
//   const username = "LATTIM_666"

//   return(

//   )
// }

// function MyApp ( ){
// return(
//   <div>
//     <h1>My App</h1>
//   </div>
// )
// }

const anotherUser = " NAMAN"

const reactElement = React.createElement(
'a',
{href:"https://google.com",target:'_blank',},
'Click Bitch',
anotherUser
)


const anotherElement= ( 
  <a href="https://google.com">Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
// anotherElement 
reactElement

)
