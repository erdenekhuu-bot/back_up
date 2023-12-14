import img1 from './card_images/img1.png'
import img2 from './card_images/img2.png'
import img3 from './card_images/img3.png'
import img4 from './card_images/img4.png'
import wu_heart from '../assets/wu_heart.png'
import Card from './Card'


export default function Loved_Post(){
    return (
        <div style={{display: 'grid', gridTemplateRows: '0fr 1fr 1fr 1fr'}}>
            <button style={{width: 400, height: 40, borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderColor: '#E86B02', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <img src={wu_heart} alt="" /> <b>Таалагдсан</b></button>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
                <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
                <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
                <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            </div>
            
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
                <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
                <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
                <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            <Card recImage={img1} content={'The Impact of \n Technology on the \n Workplace'} proImage={img2} heaImage={img3} share={img4}/>
            </div>
            
        </div>
    )
}