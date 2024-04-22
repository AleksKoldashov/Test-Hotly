import star from'./img/stars.svg'

export default function Rating({data}) {

    return(
        <div className="stars">
                <img alt='star' src={star}/>
                <h3>{data}</h3>
        </div>
    )
}