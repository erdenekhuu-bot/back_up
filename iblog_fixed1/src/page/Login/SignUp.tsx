import facebook from '../../assets/fb.png'
import gmail from '../../assets/google.png'
import {Link} from 'react-router-dom'


export function Access(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: 478}}>
                    <b style={{fontSize: 20, color: '#E86B02'}}>Нэвтрэх</b> <p></p>
                    <input type="text" placeholder="И-мэйл эсвэл утасны дугаар" style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                    <input type="password" placeholder="Нууц үг" style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                    
                    <Link to={'/login/forgotPassword'}>
                    <span style={{position: 'relative', display: 'flex', justifyContent: 'flex-end', textDecoration: 'underline', color: '#E86B02'}}>Нууц үг мартсан уу?</span> 
                    </Link>
                    <p></p>
                    
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E86B02', borderRadius: 10, border: 'none', color: 'white'}}><Link to='/home'>Нэвтрэх</Link>

                        </button> <p></p>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', borderStyle: 'solid',borderColor:'#F9D9BD', borderRadius: 10}}> 
                         <img src={gmail} alt="" />
                         <span style={{margin: 5}}>Gmail-ээр нэвтрэх</span>
                        </button> <p></p>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center',borderStyle: 'solid',borderColor:'#F9D9BD', borderRadius: 10}}> 
                        <img src={facebook} alt="" />
                        <span style={{margin: 5}}>Facebook-ээр нэвтрэх</span>
                        </button> <p></p>
                    <span style={{display: 'flex', justifyContent: 'center', color: '#B3B6B9'}}>эсвэл</span> <p></p>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', borderStyle: 'solid',borderColor:'#E86B02', borderRadius: 10, cursor: 'pointer'}}><Link to='/login/signUp' style={{textDecoration: 'none', color: 'black'}}>Бүртгүүлэх</Link></button>
            </div>
            </div>
    )
}

export function SignUp(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: 478}}>
                    <b style={{fontSize: 20, color: '#E86B02'}}>Бүртгүүлэх</b> <p></p>
                    <input type="text" placeholder="И-мэйл эсвэл утасны дугаар" style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                    <Link to={'/login/createPassword'}>
                        <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E86B02', borderRadius: 10, border: 'none', color: 'white'}}>Бүртгүүлэх
                        </button> <p></p>
                    </Link>
                    
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', borderStyle: 'solid',borderColor:'#F9D9BD', borderRadius: 10}}> 
                         <img src={gmail} alt="" />
                         <span style={{margin: 5}}>Gmail-ээр бүртгүүлэх</span>
                        </button> <p></p>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center',borderStyle: 'solid',borderColor:'#F9D9BD', borderRadius: 10}}> 
                        <img src={facebook} alt="" />
                        <span style={{margin: 5}}>Facebook-ээр бүртгүүлэх</span>
                    </button> <p></p>
            </div>
            </div>
    )
}

export function CreatePassword(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: 478}}>
                    <b style={{fontSize: 20, color: '#E86B02'}}>Бүртгүүлэх</b> <p></p>
                    <input type="text" value={'Example@gmail.com'} placeholder="И-мэйл эсвэл утасны дугаар" style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                    <input type="password" placeholder='Нууц үг зохиох' style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                    <input type="password" placeholder='Нууц үг давтах' style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                    <Link to={'/login'}>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E86B02', borderRadius: 10, border: 'none', color: 'white'}}>Бүртгүүлэх</button>
                    </Link>
                    
                    
            </div>
        </div>
    )
}