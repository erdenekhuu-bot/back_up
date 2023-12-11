import { useState } from "react"
import {Link} from 'react-router-dom'

export function ForgotPass(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: 478}}>
                <b style={{fontSize: 20, color: '#E86B02'}}>Нууц үг сэргээх</b> <p></p>
                <div style={{textAlign: 'center'}}>
                    <span  style={{fontSize: 18, color: '#546371'}}>Таны бүртгэлтэй имэйл рүү <br />баталгаажуулах код илгээх болно.</span>
                </div> <p></p>
                <input type="text" value={'Example@gmail.com'} placeholder="И-мэйл эсвэл утасны дугаар" style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                
                <Link to={'/login/handshake'}>
                      <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E86B02', borderRadius: 10, border: 'none', color: 'white'}}>Код авах</button>
                </Link>
                
               
            </div>
        </div>
    )
}

export function HandShake(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: 478}}>
                <b style={{fontSize: 20, color: '#E86B02'}}>Нууц үг сэргээх</b> <p></p>
                <div style={{textAlign: 'center'}}>
                    <span  style={{fontSize: 18, color: '#546371'}}>Таны бүртгэлтэй имэйл рүү <br />илгээсэн баталгаажуулах кодыг <br />оруулна уу.</span>
                </div> <p></p>
                <div style={{display: 'flex', justifyContent: 'space-evenly', color: 'black'}}>
                    <input type="text" style={{width: 50, height: 50, textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}/>
                    <input type="text" style={{width: 50, height: 50, textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}/>
                    <input type="text" style={{width: 50, height: 50, textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}/>
                    <input type="text" style={{width: 50, height: 50, textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}/>
                </div> <p></p>
                <Link to={'/login/resetPassword'}>
                    <button style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E86B02', borderRadius: 10, border: 'none', color: 'white'}}>Үргэжлүүлэх</button>
                </Link>
        
            </div>
        </div>
    )
}
export function ResetPass(){

    const [enter, setEnter] = useState(false)

    function trigger(){
        setEnter(!enter)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: 478}}>
                <b style={{fontSize: 20, color: '#E86B02'}}>Нууц үг зохиох</b> <p></p>
                <div style={{textAlign: 'center'}}>
                    <span  style={{fontSize: 18, color: '#546371'}}>Нууц үгээ шинээр зохионо уу.</span>
                </div> <p></p>
                <input type="password" placeholder='Нууц үг зохиох' style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                <input type="password" placeholder='Нууц үг давтах' style={{width: 470, height: 50, borderRadius: 10, border: 'none', backgroundColor: '#F5F7F9'}}/> <p></p>
                <button onClick={trigger} style={{width: 478, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E86B02', borderRadius: 10, border: 'none', color: 'white'}}>Хадгалах</button>
                {!enter && (<p>Амжилттай хадгалагдлаа</p>)}
            </div>
        </div>
    )
}