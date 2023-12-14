import notes from '../assets/notes 1.png'

export default function Post(){
    return (
        <div style={{display: 'grid', gridTemplateRows: '0fr 1fr 1fr'}}>
                    <div>
                        <button style={{width: 150, height: 40, borderStyle: 'solid', borderWidth: 2, borderTop: 'none', borderLeft: 'none',borderRight: 'none',borderColor: '#E86B02', backgroundColor: 'white', cursor: 'pointer'}}><b style={{fontSize: 16, fontFamily: 'sans-serif'}}>Бүгд</b></button>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <img src={notes} alt="" style={{marginTop: '15%'}}/> <p></p>
                        <span style={{color: '#546371', fontFamily: 'sans-serif'}}>Одоогоор бичвэр оруулаагүй <br />байна!</span> 
                    </div> 
        </div>
    )
}