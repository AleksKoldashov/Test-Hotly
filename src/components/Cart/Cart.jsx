import CartItem from './CartItem/CartItem'
import './index.css'
import './cart.scss'
import midas from './CartItem/img/Midas.svg'
import Mobilebet from './CartItem/img/Mobilebet.svg'
import Moi from './CartItem/img/Moi.svg'
import Mrbet from './CartItem/img/Mrbet.svg'
import Pach from './CartItem/img/Pach.svg'
import check from './CartItem/img/check.svg'
import mga from './CartItem/img/block3/mga.svg'
const data =[
    {id:1,pic: midas,ch: check,rating:4.8,b3t:'Regulation', b3i: mga,textbonus: '260% bis zu 2600€ + 260 FS', a:'Midas casono Testebricht', popular: 'none'},
    {id:2,pic: Mobilebet,ch: check,rating:4.9,b3t:'Zalung Speed', b3i: mga,textbonus: '100% von bis zu 100€ + 100fs', a:'Mobilebet casono Testebricht', popular: 'none'},
    {id:3,pic: Moi,ch: check,rating:5,b3t:'Regulation', b3i: mga,textbonus: '300% bis zu 1000 € + 300 FS', a:'MOI casono Testebricht', popular: 'block'},
    {id:4,pic: Mrbet,ch: check,rating:4.7,b3t:'Zalung Speed', b3i: mga,textbonus: '100% von bis zu 100€ + 100fs', a:'MrBet casono Testebricht', popular: 'none'},
    {id:5,pic: Pach,ch: check,rating:4.8,b3t:'Regulation', b3i: mga,textbonus: '2000 € + 200 Spins + 20% Cashback', a:'MrPacho casono Testebricht', popular: 'none'},
]


export default function Cart(params) {



    return(
        <div className="cart">
          
           {data.map(item=><CartItem item={item}/>)}
           <button className='pagination'>Zeig mehr</button>
        </div>
    )

}