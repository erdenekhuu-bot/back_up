import title_icon from '../assets/Group.png'
import fi_mail from '../assets/fi_mail.png'
import fi_phone from '../assets/fi_phone.png'

export default function Footer(){
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', borderWidth: 1, borderStyle: 'solid',borderColor: '#E2E8EE'}}>
            <div></div>
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
                <span><img src={fi_mail} alt="" />info@jstemplate.net</span> <br />
                <span><img src={fi_phone} alt="" />+976 99112344</span>
            </div>
        </div>
    )
}