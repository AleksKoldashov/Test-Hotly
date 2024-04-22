import Rating from "./Rating/Rating"
import bonus from './img/block-4/bonus.svg'

export default function CartItem(item) {

const data = item.item

    return(
            <div className="cartItem">
                <img alt="pic" src={data.pic}/>
                <div className="rating">
                    <div>
                    Expert Bewertung
                    <img alt="pic" src={data.ch}/>
                    </div>
                    <Rating data={data.rating}/>
                    <a href='/#'>Mobile Bet Testebricht</a>
                </div>
                <div className="block-3">
                    <div className="block-3-text">
                        {data.b3t}
                    </div>
                    <img alt='pic' src={data.b3i}/>
                </div>
                <div className="block-4">
                    <button>
                        <img alt="bonus" src={bonus}/>
                        Welcome bonus
                    </button>
                    <div>
                    {data.textbonus}
                    </div>
                   
                </div>
                <button className="btn-spielen">
                Jetzt Spielen
                
                </button>
            </div>
     
    )
}