import Header from "../component/Header"
import Footer from "../component/Footer"
import {LoginPage} from "./LoginPage"
import facebook from '../assets/fb.png'
import gmail from '../assets/google.png'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

export default function Login(){
    return (
    <div className="Home">
        <Header/>
          <Outlet/>
        <Footer/>
    </div>
    )
}