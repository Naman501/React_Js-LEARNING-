
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
   <UserContextProvider>
   <h1>BITCH-ASS NIGGA</h1>
   <Login/>
   <br /><hr /><br />
   <Profile/>
    </UserContextProvider>
  )
}

export default App
