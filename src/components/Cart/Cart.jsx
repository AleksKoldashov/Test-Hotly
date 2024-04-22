import CartItem from './CartItem/CartItem'
import './index.css'
import './cart.scss'
import midas from './CartItem/img/Midas.svg'
import check from './CartItem/img/check.svg'
import mga from './CartItem/img/block3/mga.svg'
const data =[
    {id:1,pic: midas,ch: check,rating:4.8,b3t:'Regulation', b3i: mga,textbonus: '260% bis zu 2600€ + 260 FS'},
    {id:1,pic: midas,ch: check,rating:4.8,b3t:'Regulation', b3i: mga,textbonus: '260% bis zu 2600€ + 260 FS'},
    {id:1,pic: midas,ch: check,rating:4.8,b3t:'Regulation', b3i: mga,textbonus: '260% bis zu 2600€ + 260 FS'},
    {id:1,pic: midas,ch: check,rating:4.8,b3t:'Regulation', b3i: mga,textbonus: '260% bis zu 2600€ + 260 FS'},
]


export default function Cart(params) {


    return(
        <div className="cart">
           {data.map(item=><CartItem item={item}/>)}
        
        </div>
    )
}