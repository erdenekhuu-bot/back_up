import './App.css'
import Home from './page/Home'
import Post from './page/Post'
import Add_Post from './page/Add_Post'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='/' element={<Post/>}/>
            <Route path='/add-post' element={<Add_Post/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
