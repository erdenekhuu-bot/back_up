// import Header from "../component/Header"
import Footer from "../component/Footer"
import Image from '../assets/Image.png'
import w_pen from '../assets/w_pen.png'
import { Outlet, Link } from "react-router-dom"
import { useState } from 'react'
import '../App.css'
import group from '../assets/Group.png'
import w_heart from '../assets/u_heart.png'
import u_pen from '../assets/u_pen.png'
import w_user from '../assets/u_user (1).png'
import u_user from '../assets/u_user.png'
import u_heart from '../assets/u_heart (1).png'
import log_out from '../assets/fi_log-out.png'
import text from '../assets/text.png'

export default function Home(){

    const [click, setClick] = useState(false)
    const [popUp, setPopUp] = useState(false)

    function Trigger(){
        setClick(!click)
    }
    function pop(){
        setPopUp(!popUp)
    }


    return (
        <div className="Home" style={{borderWidth: 1, borderStyle: 'solid', borderColor: '#E2E8EE'}}>
             
             <div style={{background: (popUp ? 'rgba(0, 0, 0, 0.7)' : '#fff'),display: 'flex', justifyContent: 'space-between', 
                    alignItems: 'center', borderWidth: 1, borderStyle: 'solid', borderColor: '#E2E8EE'}}>
                <Link to='/' style={{textDecoration: 'none'}}>
                <span style={{margin: 5, cursor: 'pointer', fontFamily: 'sans-serif'}}><img src={group} alt="" />
                    <span style={{color: '#F77268', fontSize: 30}}>i</span>
                    <span style={{color: '#FC9419', fontSize: 30}}>blog</span>
                </span>
                </Link>
                
                <form style={{borderStyle: 'solid', width: 617, borderRadius: 30, display: 'flex', alignItems: 'center', margin: 5, border: '1px solid gray', fontFamily: 'sans-serif'}}>
                    <input type="text" placeholder='Хайх' style={{height: 39, width: 572,borderTopLeftRadius: 20,borderBottomLeftRadius: 20, border: 'none'}}/>
                    <button type='submit' style={{height: 45, width: 50, borderTopRightRadius: 30, borderBottomRightRadius: 30, border: 'none'}}>🔍</button>
                </form>
                <div style={{display: 'flex', justifyContent: 'space-around', fontFamily: 'sans-serif'}}>
                    <img src={w_heart} alt="" style={{margin: 5}}/>
                    <Link to='/home/add-post' style={{textDecoration:'none',color: 'white'}}>
                        <button className='openPopup' style={{width: 111, height: 41, borderRadius: 10, border: 'none',margin: 5, backgroundColor: '#E86B02', color: 'white', alignItems: 'center', display: 'flex', justifyContent: 'center'}}><span style={{margin: 3}}>Post</span><img src={u_pen} alt="" />
                        <div className='Popup' style={{position: 'absolute',top: '8%'}}>
                            <div className='pop' style={{width: 250, height: 40, display: 'flex', alignItems: 'center', margin: 1, padding: 3, color: 'black', cursor: 'pointer'}}><img src={u_user} alt="" /><b>Миний мэдээлэл</b></div>
                            <div className='pop' style={{width: 250, height: 40, display: 'flex', alignItems: 'center', margin: 1, padding: 3, cursor: 'pointer'}}><Link to='/home/loved-post' style={{textDecoration: 'none',color: 'black',}}><img src={u_heart} alt="" />Таалагдсан</Link></div>
                            <div className='pop' style={{width: 250, height: 40, display: 'flex', alignItems: 'center', margin: 1, padding: 3, color: 'black', cursor: 'pointer'}} onClick={pop}><img src={log_out} alt="" />Гарах</div>
                        </div>
                        </button>
                    </Link>
                    <Link to='/profile' style={{textDecoration: 'none'}}>
                        <button  style={{width: 111, height: 41, borderRadius: 10, borderTop: 'none', borderRight:'none',borderLeft:'none', borderWidth: 1, borderStyle: 'solid', borderColor: '#E86B02', margin: 5, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center',color: '#E86B02'}}><img src={w_user} alt=''/><span style={{margin: 3}}> Профайл</span>
                    
                        
                        {!popUp ? null : (<div style={{width: 482, height: 210, backgroundColor: 'white', position: 'absolute', right: '650%', top: '550%', color: 'black'}}>
                                                <img src={text} alt="" style={{marginTop: '5%'}}/> <p></p>
                                                <b style={{fontSize: 20}}>Та системээс гарахдаа итгэлтэй  <br />байна уу?</b> <p></p>
                                                <div>
                                                    <button style={{width: 220, height: 46, margin: 5, backgroundColor: '#E86B02', border: 'none', color: 'white', borderRadius: 10}}>Тийм</button>
                                                    <button style={{width: 220, height: 46, margin: 5, border: 'none', borderRadius: 10}}>Үгүй</button>
                                                </div>
                                            </div>)}</button>
                    </Link>
                </div>
        </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr', background: (popUp ? 'rgba(0, 0, 0, 0.7)' : '#fff')}}>
                <div style={{paddingTop: 50, margin: '0 auto'}}>
                    <div style={{width: 294}}>
                        <span style={{display: 'flex', alignItems: 'center'}}>
                            <img src={Image} alt="" />
                            <b style={{fontSize: 24, fontFamily: 'sans-serif',margin: 5}}>Tracey Willson</b>
                        </span>
                    </div>
                    <div style={{width: 294, display: 'flex', justifyContent: 'space-around', fontFamily: 'sans-serif'}}>
                        <span style={{textAlign: 'center', margin: 5, fontSize: 15}}>
                            <b>1</b> <br /> <b>Follows</b>
                        </span>
                        <span style={{textAlign: 'center', margin: 5, fontSize: 15}}>¯
                            <b>0</b> <br /> <b>Followers</b>
                        </span>
                        <span style={{textAlign: 'center', margin: 5, fontSize: 15}}>
                            <b>0</b> <br /> <b>Posts</b>
                        </span>
                    </div>
                    <button style={{ width: 294, height: 41, color: '#546371',padding: 5, borderRadius: 10, display: 'flex', alignItems:'center', justifyContent:'center', border: '1px solid #546371', cursor: 'pointer'}}><img src={w_pen} alt="" style={{margin: 2}}/>Профайл засах</button>
                </div>
                    <Outlet/>   
            </div>
            <Footer/>
        </div>
    )
}