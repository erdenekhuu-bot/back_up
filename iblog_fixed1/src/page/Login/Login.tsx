import {Link, Outlet} from 'react-router-dom'
import Footer from '../../component/Footer'
import group from '../../assets/Group.png'

export function Login(){
    return (
        <div style={{display: 'grid', gridTemplateRows: '0fr 8fr 1fr'}}>
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
                    <button className='openPopup' style={{width: 149, height: 41, borderRadius: 10, border: 'none',margin: 5, backgroundColor: 'white', color: 'white', alignItems: 'center'}}><Link to='/login/signUp' style={{textDecoration:'none',color: '#E86B02'}}>Бүртгүүлэх</Link></button>
                    <button style={{width: 122, height: 41, borderRadius: 10, borderTop: 'none', borderRight:'none',borderLeft:'none', borderWidth: 1, borderStyle: 'solid', borderColor: '#E86B02', margin: 5, backgroundColor: '#E86B02'}}><Link to='/login' style={{textDecoration: 'none',color: 'white'}}>Нэвтрэх</Link></button>
                </div>
        </div>
        <Outlet/>
        <Footer/>
        </div>
    )
}

