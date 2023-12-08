export default function Store_Post(props: {title:string, image:File | null, body:string}){
    return (
        <div>
            <img src={URL.createObjectURL(props.image)} alt="" /> <br />
            <p>{props.title}</p>
            <b>{props.body}</b>
        </div>
    )
}