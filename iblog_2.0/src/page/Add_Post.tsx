import p_pen from '../assets/p_pen.png'
import u_image from '../assets/u_image-plus.png'
import widget from '../assets/fi_grid.png'
import React, { useState, ChangeEvent, useEffect } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Store_Post from './Store_Post'

export default function Add_Post(){

    const [file, setFile] = useState<File | null>(null)
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')
    const [click, setClick] = useState(false)

    function move(){
        setClick(!click)
    }

    function upload(e: ChangeEvent<HTMLInputElement>){
        if(e.target.files != null && e.target.files.length > 0){
            setFile(e.target.files[0] || null)
        }
    }

    function trigger(e: ChangeEvent<HTMLSelectElement>){
        setCategory(e.target.value)
    }
    function makeTitle(e: ChangeEvent<HTMLInputElement>){
        setTitle(e.target.value)
    }
    function makePost(e: ChangeEvent<HTMLInputElement>){
        setPost(e.target.value)
    }


    return (
        <div style={{display: 'grid', gridTemplateRows: '0fr 0.6fr 0.7fr 0.4fr 0.4fr 1fr'}}>
            <div>
                <button style={{width: 150, height: 40, borderStyle: 'solid', borderWidth: 4, borderTop: 'none', borderLeft: 'none',borderRight: 'none',borderColor: '#E86B02',display: 'flex', alignItems:'center',justifyContent:'center'}}>
                    <img src={p_pen} alt="" />
                    <b>Пост нэмэх</b>
                </button>
            </div>
            <div style={{marginTop: 40}}>
                <b style={{fontSize: 18, fontFamily: 'sans-serif'}}>Категори сонгох</b> <p></p>
                <select onChange={trigger} value={category} style={{width: 247, height: 52, borderRadius: 10}} required>
                    <option>Lifestyle</option>
                    <option>Travel</option>
                    <option>Food&Beverage</option>
                    <option>Home and decor</option>
                </select>
               
            </div>
            <div>
                <b style={{fontSize: 18, fontFamily: 'sans-serif'}}>Cover зураг</b> <p></p>
                <div id='upload'style={{width: 600, height: 154, backgroundColor: 'gray', display: 'flex', justifyContent:'center',alignItems:'center'}}>
                    <input type='file' style={{width: 500, padding: 50, backgroundImage: (file ? `url(${URL.createObjectURL(file)})`: 'none'), backgroundSize: 'cover', backgroundPosition: 'center'}} onChange={upload} placeholder='Зураг оруулах' accept='image/jpeg, image/png, image/jpg' required>
                        {/* <span><img src={u_image} alt="" /> <br /> <span style={{textDecoration: 'underline'}}>Зураг оруулах</span></span> */}
                    </input>     
                </div>
               
            </div>
            <div>
                <b style={{fontSize: 18, fontFamily: 'sans-serif'}}>Гарчиг</b> <p></p>
                <input type="text" placeholder='Жишээ: Миний дуртай ном' style={{width: 600, height: 50, borderRadius: 10}} onChange={makeTitle} required/>
               
            </div>
            
            <div>
            <b style={{fontSize: 18, fontFamily: 'sans-serif',display: 'grid'}}>Үндсэн хэсэг</b> <p></p>
                <div style={{borderWidth: 1, width: 600, height: 50, display: 'grid', gridTemplateColumns: '1fr 10fr'}} id='imgResult'>
                    <button><img src={widget} alt="" /></button>
                    <input type="text" style={{width: 400, overflow: 'clip'}} placeholder='Текст эсвэл зураг' onChange={makePost} required/>
                </div>
            
            </div>
           
            <div>
                <button type='submit' onClick={move} style={{backgroundColor: '#E86B02', color: 'white', borderRadius: 10, border: 'none', width: 175, height: 41, position: 'relative',right: '-40%',cursor: 'pointer'}}><Link to='/store-post' style={{textDecoration: 'none', color: 'black'}}>Постлох</Link></button>
            </div>

            <Routes>
                <Route path='/store-post' element={<Store_Post title={title} image={file} body={post}/>}/>
            </Routes>

        </div>
        
    )
}