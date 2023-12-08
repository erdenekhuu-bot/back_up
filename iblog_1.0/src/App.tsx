
import './App.css'
import Home from './page/Home'
import Box from './page/Box'
import {Routes, Route} from 'react-router-dom'
import MenuBox from './page/MenuBox'
import Profile from './page/Profile'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/' element={<Box/>}/>
          <Route path='/menu' element={<MenuBox/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
