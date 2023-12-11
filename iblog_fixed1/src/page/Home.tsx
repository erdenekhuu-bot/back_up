import Header from "../component/Header"
import Footer from "../component/Footer"
import Image from '../assets/Image.png'
import w_pen from '../assets/w_pen.png'
import { Outlet } from "react-router-dom"
import '../App.css'

export default function Home(){
    return (
        <div className="Home" style={{borderWidth: 1, borderStyle: 'solid', borderColor: '#E2E8EE'}}>
            <Header/>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
                <div style={{paddingTop: 50, margin: '0 auto'}}>
                    <div style={{width: 294}}>
                        <span style={{display: 'flex', alignItems: 'center'}}>
                            <img src={Image} alt="" />
                            <b style={{fontSize: 24, fontFamily: 'sans-serif',margin: 5}}>Tracey Willson</b>
                        </span>
                    </div>
                    <div style={{width: 294, display: 'flex', justifyContent: 'space-around'}}>
                        <span style={{textAlign: 'center', margin: 5}}>
                            <b>1</b> <br /> <b>Follows</b>
                        </span>
                        <span style={{textAlign: 'center', margin: 5}}>
                            <b>0</b> <br /> <b>Followers</b>
                        </span>
                        <span style={{textAlign: 'center', margin: 5}}>
                            <b>0</b> <br /> <b>Posts</b>
                        </span>
                    </div>
                    <button style={{ width: 294, padding: 5, borderRadius: 10, display: 'flex', alignItems:'center', justifyContent:'center'}}><img src={w_pen} alt="" />Профайл засах</button>
                </div>
                    <Outlet/>   
            </div>
            <Footer/>
        </div>
    )
}