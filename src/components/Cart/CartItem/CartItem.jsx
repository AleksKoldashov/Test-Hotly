import { useState } from "react"
import Rating from "./Rating/Rating"
import bonus from './img/block-4/bonus.svg'
import galoch from './img/galoch.svg'
import CartItemDrop from "../CartItemDrop/CartItemDrop"




export default function CartItem(item) {
  
const [handle, setHandle]=useState(true)
const [drop, setDrop] = useState({a:"none",b:"btn-drop"})


const data = item.item
const HandleClick=()=>{
    setHandle(!handle)
    if(handle){
        setDrop({a:'block',b:"btn-drop-down"})
    }else{
        setDrop({a:'none',b:"btn-drop"})
    }
}




    return(<>
       <div className="filter_class" style={{display:`${data.popular}`}}>Additional deposit upon registration</div>
       <div className="cartItem">
                <div className="styleId">
                    {data.id}
                </div>
                <div className="img_cartItem">
                    <img alt="pic" src={data.pic}/>
                    <a href="/#">{data.a}</a>
                </div>
               
                <div className="rating">
                    <div className="Expert">
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
                <button className={drop.b} onClick={()=>{HandleClick()}}>
                    Mehr Infos
                    <img alt="galoch" src={galoch}/>
                </button>
                <div className="wrapper-drop" style={{display:`${drop.a}`}}>
                 <CartItemDrop/>
                
                </div> 
    </>
         
     
    )
}