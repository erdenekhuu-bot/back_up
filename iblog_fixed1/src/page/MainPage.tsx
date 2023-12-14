import LeftBar from "../component/Left/LeftBar"
import {Outlet} from 'react-router-dom'
import title_icon from '../assets/title_icon.png'
import mail from '../assets/fi_mail.png'
import phone from '../assets/fi_phone.png'
import {Link} from 'react-router-dom'

export default function MainPage(){
    return (
        <div className='Main'>
                <LeftBar/>
                <div className="RightBar">
                    <div style={{padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between',borderWidth: 1, borderStyle: 'solid',borderColor: '#E2E8EE'}}>
                        <form style={{borderStyle: 'solid', width: 617, borderRadius: 30, display: 'flex', alignItems: 'center', margin: 5, border: '1px solid gray'}}>
                            <input type="text" placeholder='Хайх' style={{height: 39, width: 572,borderTopLeftRadius: 20,borderBottomLeftRadius: 20, border: 'none'}}/>
                            <button type='submit' style={{height: 45, width: 50, borderTopRightRadius: 30, borderBottomRightRadius: 30, border: 'none'}}>🔍</button>
                        </form>
                    <div>
                    <Link to='/login/signUp' style={{textDecoration: 'none'}}>
                        <button style={{width: 149, height: 41, margin: 5, backgroundColor: 'white', borderRadius: 10, cursor: 'pointer',color: '#E86B02', border: '1px solid #DCE3EA'}}><b>Бүртгүүлэх</b></button>
                    </Link>
                    <Link to='/login'>
                        <button style={{width: 122, height: 41, margin: 5, backgroundColor: '#E86B02', color: 'white', border: 'none', borderRadius: 10, cursor: 'pointer'}}><b>Нэвтрэх</b></button>
                    </Link>
                    </div>
                </div>
                <div style={{padding: 40}}>
                    <Outlet/>
                    <div style={{display: 'flex', margin: 50}}>
                        <button style={{height: 48, width: 141, margin: '0 auto', fontSize: 16}}>Цааш унших</button>
                    </div>
                    
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', borderWidth: 1, borderStyle: 'solid',borderColor: '#E2E8EE'}}>
                    <div style={{margin: 10}}>
                        <span><img src={title_icon} alt="" />
                            <span style={{fontSize: 30, color: '#F77268'}}>i</span>
                            <span style={{fontSize: 30, color: '#FC9419'}}>blog</span> <br />
                            <span>Write, Read, Enjoy</span>
                        </span>
                    </div>
                    <div style={{margin: 10}}>
                        <b>Тусламж</b> <p></p>
                        <span>Хэрэглэх заавар</span> <br />
                        <span>Санал хүсэлт</span>
                    </div>
                    <div style={{margin: 10}}>
                        <b>Бидэнтэй холбогдох</b> <p></p>
                        <span><img src={mail} alt="" />info@jstemplate.net</span> <br />
                        <span><img src={phone} alt="" />+976 99112344</span>
                    </div>
                </div>
        </div>
        </div>
    )
}