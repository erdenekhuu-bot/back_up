import group from '../assets/Group.png'
import w_heart from '../assets/u_heart.png'
import u_pen from '../assets/u_pen.png'
import w_user from '../assets/u_user (1).png'
import u_user from '../assets/u_user.png'
import u_heart from '../assets/u_heart (1).png'
import log_out from '../assets/fi_log-out.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Header(){

    const [click, setClick] = useState(false)

    function Trigger(){
        setClick(!click)
    }

    return (
        <div style={{backgroundColor: 'white',display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderWidth: 1, borderStyle: 'solid', borderColor: '#E2E8EE'}}>
                <Link to='/' style={{textDecoration: 'none'}}>
                <span style={{margin: 5, cursor: 'pointer'}}><img src={group} alt="" />
                    <span style={{color: '#F77268', fontSize: 30}}>i</span>
                    <span style={{color: '#FC9419', fontSize: 30}}>blog</span>
                </span>
                </Link>
                
                <form style={{borderStyle: 'solid', width: 617, borderRadius: 30, display: 'flex', alignItems: 'center', margin: 5, border: '1px solid gray'}}>
                    <input type="text" placeholder='Хайх' style={{height: 39, width: 572,borderTopLeftRadius: 20,borderBottomLeftRadius: 20, border: 'none'}}/>
                    <button type='submit' style={{height: 45, width: 50, borderTopRightRadius: 30, borderBottomRightRadius: 30, border: 'none'}}>🔍</button>
                </form>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <img src={w_heart} alt="" style={{margin: 5}}/>
                    <button className='openPopup' style={{width: 111, height: 41, borderRadius: 10, border: 'none',margin: 5, backgroundColor: '#E86B02', color: 'white', alignItems: 'center'}}><Link to='/add-post' style={{textDecoration:'none',color: 'white'}}>Post</Link><img src={u_pen} alt="" />
                    <div className='Popup' style={{position: 'absolute',top: '8.5%'}}>
                        <div className='pop' style={{width: 270, height: 42, display: 'flex', alignItems: 'center', margin: 5, padding: 3, color: 'black'}}><img src={u_user} alt="" /><b>Миний мэдээлэл</b></div>
                        <div className='pop' style={{width: 270, height: 42, display: 'flex', alignItems: 'center', margin: 5, padding: 3, color: 'black'}}><img src={u_heart} alt="" />Таалагдсан</div>
                        <div className='pop' style={{width: 270, height: 42, display: 'flex', alignItems: 'center', margin: 5, padding: 3, color: 'black'}}><img src={log_out} alt="" />Гарах</div>
                    </div>
                    </button>
                    <button style={{width: 111, height: 41, borderRadius: 10, borderTop: 'none', borderRight:'none',borderLeft:'none', borderWidth: 1, borderStyle: 'solid', borderColor: '#E86B02', margin: 5, backgroundColor: 'white', color: '#E86B02'}}><img src={w_user} alt=''/> Профайл</button>
                </div>
        </div>
    )
}