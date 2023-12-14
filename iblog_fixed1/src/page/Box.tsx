import Card from './Card'
import { useState } from 'react'
import img1 from './card_images/img1.png'
import img2 from './card_images/img2.png'
import img3 from './card_images/img3.png'
import img4 from './card_images/img4.png'

export default function Box(){

    const [slide, setSlide]=useState([])

    return (
    <div style={{display: 'grid', gridTemplateRows: '0fr 1fr 0fr 1fr 0fr 1fr'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 10fr 1fr', fontFamily: 'sans-serif'}}>
            <button style={{width: 131.41, height: 44.84, border: 'none',backgroundColor: 'white'}}><b style={{fontSize: 18}}>LIFESTYLE</b></button>
            <button style={{border: 'none',backgroundColor: 'white'}}>{''}</button>
            <button style={{width: 116.5, height: 44.84, border: 'none',fontSize: 16,backgroundColor: 'white', color: '#546371'}}>Бүгд <span style={{margin: 5}}>{'>'}</span></button>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-around'}}> 
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 10fr 1fr', fontFamily: 'sans-serif'}}>
            <button style={{width: 131.41, height: 44.84, border: 'none',backgroundColor: 'white'}}><b style={{fontSize: 18}}>TECHNOLOGY</b></button>
            <button style={{border: 'none',backgroundColor: 'white'}}>{''}</button>
            <button style={{width: 116.5, height: 44.84, border: 'none',fontSize: 16,backgroundColor: 'white',color: '#546371'}}>Бүгд <span style={{margin: 5}}>{'>'}</span></button>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-around'}}> 
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
        </div>


        <div style={{display: 'grid', gridTemplateColumns: '1fr 10fr 1fr', fontFamily: 'sans-serif'}}>
            <button style={{width: 131.41, height: 44.84, border: 'none',backgroundColor: 'white'}}><b style={{fontSize: 18}}>HEALTH</b></button>
            <button style={{border: 'none',backgroundColor: 'white'}}>{''}</button>
            <button style={{width: 116.5, height: 44.84, border: 'none',fontSize: 16,backgroundColor: 'white',color:'#546371'}}>Бүгд <span style={{margin: 5}}>{'>'}</span></button>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-around'}}> 
        <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
        </div>
    </div>
    )
}