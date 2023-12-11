import facebook from '../assets/fb.png'
import gmail from '../assets/google.png'
import {Link} from 'react-router-dom'

export function LoginPage(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: 478}}>
                    <b style={{fontSize: 20, color: '#E86B02'}}>Нэвтрэх</b> <p></p>
                    <input type="text" placeholder="И-мэйл эсвэл утасны дугаар" style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                    <input type="password" placeholder="Нууц үг" style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                    <span style={{position: 'relative', display: 'flex', justifyContent: 'flex-end', textDecoration: 'underline', color: '#E86B02'}}>Нууц үг мартсан уу?</span> <p></p>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E86B02', borderRadius: 10, border: 'none', color: 'white'}}>Нэвтрэх

                        </button> <p></p>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', borderStyle: 'solid',borderColor:'#F9D9BD', borderRadius: 10}}> 
                         <img src={gmail} alt="" />
                         <span style={{margin: 5}}>Gmail-ээр нэвтрэх</span>
                        </button> <p></p>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center',borderStyle: 'solid',borderColor:'#F9D9BD', borderRadius: 10}}> 
                        <img src={facebook} alt="" />
                        <span style={{margin: 5}}>Facebook-ээр нэвтрэх</span>
                        </button> <p></p>
                    <span style={{display: 'flex', justifyContent: 'center'}}>эсвэл</span> <p></p>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', borderStyle: 'solid',borderColor:'#E86B02', borderRadius: 10, cursor: 'pointer'}}><Link to='/login/create' style={{textDecoration: 'none'}}>Бүртгүүлэх</Link></button>
            </div>
        </div>
    )
}


