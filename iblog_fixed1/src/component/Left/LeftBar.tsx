import title_icon from '../../assets/title_icon.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function LeftBar(){

    const [menu1, setMenu1]=useState(false)
    const [menu2, setMenu2]=useState(false)
    const [menu3, setMenu3]=useState(false)
    const [menu4, setMenu4]=useState(false)

    function trigger1(){
        setMenu1(!menu1)
    }
    function trigger2(){
        setMenu2(!menu2)
    }
    function trigger3(){
        setMenu3(!menu3)
    }
    function trigger4(){
        setMenu4(!menu4)
    }

    return (
        <div className="LeftBar">
            <Link to='/' style={{textDecoration: 'none'}}>
                <span><img src={title_icon} alt="" />
                    <span style={{fontSize: 30, color: '#F77268'}}>i</span>
                    <span style={{fontSize: 30, color: '#FC9419'}}>blog</span>
                </span>
            </Link>
               
                <div style={{height: 45}}></div>
                <nav onClick={trigger1} style={{height: (menu1 ? 160 : 37), width: 250, padding: 5, overflow: 'hidden'}}>
                    <b style={{cursor: 'progress'}}>Lifestyle</b> <br/>
                    <div style={{width: 250, overflow: 'hidden', position: 'relative', marginTop: 15,cursor: 'progress'}}>
                        <Link to='/menu' style={{textDecoration: 'none', color: 'black'}}>
                            <div className='menu' style={{padding: 10,margin: 5}}>Hobby</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>Travel</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>Food&Beverage</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>Home and decor</div>
                        </Link>
                        
                    </div>
                </nav>
                
                <nav onClick={trigger2} style={{height: (menu2 ? 160 : 37), marginTop: 10,width: 250, padding: 5, overflow: 'hidden'}}>
                    <b style={{cursor: 'progress'}}>Sport</b> <br/>
                    <div style={{width: 250, overflow: 'hidden', position: 'relative', marginTop: 15,cursor: 'progress'}}>
                        <Link to='/menu' style={{textDecoration: 'none', color: 'black'}}>
                            <div className='menu' style={{padding: 10,margin: 5}}>Soccer</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>Volleyball</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>Basketball</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>E Sport</div>
                        </Link>
                        
                    </div>
                </nav>
                <nav onClick={trigger3} style={{height: (menu3 ? 160 : 37),marginTop: 10,width: 250, padding: 5, overflow: 'hidden'}}>
                    <b style={{cursor: 'progress'}}>Technology</b> <br />
                    <div style={{width: 250, overflow: 'hidden', position: 'relative', marginTop: 15,cursor: 'progress'}}>
                        <Link to='/menu' style={{textDecoration: 'none', color: 'black'}}>
                            <div className='menu' style={{padding: 10,margin: 5}}>Artificial Intelligence</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>Quantium Computer</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>Development</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>Dev Ops</div>
                        </Link>
                        
                    </div>
                </nav>
                <nav onClick={trigger4} style={{height: (menu4 ? 160 : 37),marginTop: 10,width: 250, padding: 5, overflow: 'hidden'}}>
                    <b style={{cursor: 'progress'}}>Entertainment</b> <br />
                    <div style={{width: 250, overflow: 'hidden', position: 'relative', marginTop: 15}}>
                        <Link to='/menu' style={{textDecoration: 'none', color: 'black'}}>
                            <div className='menu' style={{padding: 10,margin: 5}}>Billboard chart</div>
                            <div className='menu' style={{padding: 10,margin: 5}}>Kpop</div>
                        </Link>
                        
                    </div>
                </nav>
        </div>
    )
}