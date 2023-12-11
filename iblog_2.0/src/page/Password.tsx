import {Link} from 'react-router-dom'
import wu_user from '../assets/wu_user.png'
import key from '../assets/u_key-skeleton.png'

export default function Password(){
    return (
        <div style={{display: 'grid', gridTemplateRows: '0fr 1fr'}}>
             <div style={{display: 'flex'}}>
                <button style={{backgroundColor: 'white',width: 400, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: 'none', borderRight: 'none', borderLeft: 'none', margin: 5, cursor: 'pointer'}}><Link to='/profile' style={{textDecoration: 'none', color: 'black'}}><img src={wu_user} alt="" /><b>Профайл мэдээлэл</b></Link></button>
                <button style={{backgroundColor: 'white',width: 400, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: 'none', borderRight: 'none', borderLeft: 'none', margin: 5, cursor: 'pointer'}}><Link to='/password' style={{textDecoration: 'none', color: 'black'}}><img src={key} alt="" /><b>Нууц үг солих</b></Link></button>
            </div> 
            <div style={{padding: 20}}>
                <b style={{fontSize: 18, fontFamily: 'sans-serif'}}>Хуучин нууц үг</b> <p></p>
                <input type="password" style={{fontSize: 16,width: 600, height: 50, backgroundColor: '#F5F7F9', border: 'none', borderRadius: 10}} placeholder='Нууц үг'/> <p></p>
                <b style={{fontSize: 18, fontFamily: 'sans-serif'}}>Шинэ нууц үг</b> <p></p>
                <input type="password" style={{fontSize: 16,width: 600, height: 50, backgroundColor: '#F5F7F9', border: 'none', borderRadius: 10}} placeholder='Нууц үг зохиох'/> <p></p>
                <input type="password" style={{fontSize: 16,width: 600, height: 50, backgroundColor: '#F5F7F9', border: 'none', borderRadius: 10}} placeholder='Нууц үг давтах'/> <p></p>
                <button style={{width: 175, height: 41, backgroundColor: '#E86B02', border: 'none', borderRadius: 10, color: 'white', position: 'relative', right: '-42%', cursor: 'pointer'}}>Хадгалах</button>
            </div>
        </div>
    )
}