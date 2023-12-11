
import './App.css'
import MainPage from './page/MainPage'
import Box from './page/Box'
import {Routes, Route} from 'react-router-dom'
import MenuBox from './page/MenuBox'
import Profile from './page/Profile'
import Home from './page/Home'
import Post from './page/Post'
import Add_Post from './page/Add_Post'
import Store_Post from './page/Store_Post'
import Password from './page/Password'
import Loved_Post from './page/Loved_Post'
import { Login} from './page/Login/Login'
import { SignUp, Access, CreatePassword } from './page/Login/SignUp'
import {ForgotPass,HandShake, ResetPass} from './page/Login/ForgotPass'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}>
          <Route index element={<Box/>}/>
          <Route path='/menu' element={<MenuBox/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/login' element={<Login/>}>
            <Route index element={<Access/>}/>
            <Route path='/login/signUp' element={<SignUp/>}/>
            <Route path='/login/createPassword' element={<CreatePassword/>}/>
            <Route path='/login/forgotPassword' element={<ForgotPass/>}/>
            <Route path='/login/handShake' element={<HandShake/>}/>
            <Route path='/login/resetPassword' element={<ResetPass/>}/>
        </Route>
        <Route path='/home' element={<Home/>}>
            <Route index element={<Post/>}/>
            <Route path='/home/add-post' element={<Add_Post/>}/>
            <Route path='/home/store-post' element={<Store_Post/>}/>
            <Route path='/home/profile' element={<Profile/>}/>
            <Route path='/home/password' element={<Password/>}/>
            <Route path='/home/loved-post' element={<Loved_Post/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
