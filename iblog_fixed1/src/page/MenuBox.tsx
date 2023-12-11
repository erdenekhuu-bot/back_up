import rectangle from '../assets/Rectangle 39.png'
import image from '../assets/Image.png'
import u_heart from '../assets/u_heart.png'
import share from '../assets/share.png'
import {Link} from 'react-router-dom'

export default function MenuBox(){
    return (
    <div style={{display: 'grid', gridTemplateRows: '0fr 1fr 1fr 1fr'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 4fr'}}>
            <button style={{height: 39, border: 'none',fontSize: 18, backgroundColor: 'white'}}>Нүүр хуудас<span style={{margin: 5}}> {'>'}</span></button>
            <button style={{height: 39, border: 'none',fontSize: 18, backgroundColor: 'white'}}>Lifestyle<span style={{margin: 5}}> {'>'}</span></button>
            <button style={{height: 39, border: 'none',fontSize: 18, backgroundColor: 'white'}}>Hobby<span style={{margin: 5}}> {'>'}</span></button>
            <button style={{border: 'none', backgroundColor: 'white'}}></button>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-around'}}> 
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
        </div>


        <div style={{display: 'flex', justifyContent: 'space-around'}}> 
        <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
        </div>


        

        <div style={{display: 'flex', justifyContent: 'space-around'}}> 
        <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
        </div>

        

        <div style={{display: 'flex', justifyContent: 'space-around'}}> 
        <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
            <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{width: 210, margin: 10}}>
                <img src={rectangle} alt="" /> <br/>
                <b>The Impact of <br /> Technology on the <br />Workplace</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={image} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={u_heart} alt="" /><b>23</b></span><span><img src={share} alt=''/></span>
                </div>
            </div>
            </Link>
        </div>
    </div>
    )
}