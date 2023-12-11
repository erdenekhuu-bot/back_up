import './App.css'
import Home from './page/Home'
import Post from './page/Post'
import Add_Post from './page/Add_Post'
import {Routes, Route} from 'react-router-dom'
import Store_Post from './page/Store_Post'
import Profile from './page/Profile'
import Password from './page/Password'
import Loved_Post from './page/Loved_Post'
import Login from './page/Login'
import { LoginPage } from './page/LoginPage'
import { SignUp } from './page/SignUp'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='/' element={<Post/>}/>
            <Route path='/add-post' element={<Add_Post/>}/>
            <Route path='/store-post' element={<Store_Post/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/password' element={<Password/>}/>
            <Route path='/loved-post' element={<Loved_Post/>}/>
        </Route>
      </Routes>

      <Routes>
          <Route path='/login' element={<Login/>}>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/login/create' element={<SignUp/>}/>
          </Route>
          
      </Routes>

    </div>
  )
}

export default App
