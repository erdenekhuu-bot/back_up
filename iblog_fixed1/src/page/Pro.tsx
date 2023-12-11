import wu_user from '../assets/wu_user.png'
import key from '../assets/u_key-skeleton.png'
import Image from '../assets/Image.png'
import {Link} from 'react-router-dom'

export default function Profile(){
    return (
        <div style={{display: 'grid', gridTemplateRows: '0fr 1fr'}}>
            <div style={{display: 'flex'}}>
                <button style={{backgroundColor: 'white',width: 400, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: 'none', borderRight: 'none', borderLeft: 'none', margin: 5, cursor: 'pointer'}}><Link to='/profile' style={{textDecoration: 'none', color: 'black'}}><img src={wu_user} alt="" /><b>Профайл мэдээлэл</b></Link></button>
                <button style={{backgroundColor: 'white',width: 400, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: 'none', borderRight: 'none', borderLeft: 'none', margin: 5, cursor: 'pointer'}}><Link to='/password' style={{textDecoration: 'none', color: 'black'}}><img src={key} alt="" /><b>Нууц үг солих</b></Link></button>
            </div> 
            <div style={{padding: 30}}>
                <div style={{display: 'flex', width: 201, height: 85, alignItems: 'center', margin: 10}}>
                    <img src={Image} alt="" /> <span style={{margin: 5, color: '#546371'}}>Зураг солих</span>
                </div>
                <div>
                    <b style={{fontSize: 18}}>Нэр</b> <p></p>
                    <input type="text" value={'Tracey Wills'} style={{fontSize: 16,width: 600, height: 50, backgroundColor: '#F5F7F9', borderRadius: 10, border: 'none'}}/> 
                </div> <p></p>
                <div>
                    <b style={{fontSize: 18}}>И-мэйл хаяг</b> <p></p>
                    <input type="text" value={'example@mail.com'} style={{fontSize: 16,width: 600, height: 50, backgroundColor: '#F5F7F9', borderRadius: 10, border: 'none'}}/>
                </div>
                <p></p>
                <button style={{width: 175, height: 41, backgroundColor: '#E86B02', border: 'none', borderRadius: 10, color: 'white', position: 'relative', right: '-42%', cursor: 'pointer'}}>Хадгалах</button>
            </div>
        </div>
    )
}