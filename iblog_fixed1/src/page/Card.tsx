
export default function Card(props: {recImage:string, content:string, proImage:string, heaImage:string, share:string}){
    return (
    <div style={{width: 210, margin: 10}}>
                <img src={props.recImage} alt="" /> <br/>
                <b>{props.content}</b>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center'}}><img src={props.proImage} alt="" />Tracey Wilson</span><span style={{fontSize: 12}}>Aug 20, 2022</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: 16, display: 'flex', alignItems: 'center'}}><img src={props.heaImage} alt="" /><b>23</b></span><span><img src={props.share} alt=''/></span>
                </div>
    </div>
    )
}
