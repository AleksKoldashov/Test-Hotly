import CheckboxDrop from "../../../UI/checkbox/CheckboxDrop"
import './index.css'
import A1 from './img/A1.svg'
import AstroPay from './img/AstroPay.svg'
import Binance from './img/Binance.svg'
import Debit from './img/Debit.svg'
import Roma from './img/Roma.svg'
import All8 from './img/All8.svg'
import info1 from './img/paymethod/info1.svg'
import info2 from './img/paymethod/info2.svg'
import info3 from './img/paymethod/info3.svg'
import info4 from './img/paymethod/info4.svg'

const dataCheckboxDrop =[
    {name: 'Bestes Online Casino German'},
    {name:'Einzahlungsbonus inkl. Free Spins'},
    {name: 'Hauseigene Casino Spiele'}
]
const payMethod = [
    {l:A1}, {l:AstroPay}, {l:Binance},{l:Debit},{l:Roma},{l:All8}
]
const info = [
    {i:info1},{i:info2},{i:info3},{i:info4}
]
export default function CartItemDrop(params) {
    return(
        <>
        <div className="drop-block-1">
            <span>Nützliche Informationen</span>
            {dataCheckboxDrop.map((item)=><CheckboxDrop item={item}/>)}
        </div>
        <div className="drop-block-2">
        <span>Nützliche Informationen</span>
        <div className="db2c">
            {payMethod.map((item)=><img alt="cart" src={item.l}/>)}
        </div>
        </div>
        <div className="drop-block-3">
        <span>Krypto-Zahlungen</span>
        <div className="db3c">
        {info.map((item)=><img alt="info" src={item.i}/>)}
        </div>
        </div>
        <div className="drop-block-4">
        <div className="db41">
        <span>Auszahl.Dauer</span>
        <span style={{marginLeft:'50px'}}>Jahr</span>
        </div >
        <div className="db42">
        <span>Sofort</span>
        <span style={{marginLeft:'85px'}}>2015</span>
        </div>
        <div className="db41" style={{marginTop:'15px'}}>
        <span>Auszahl. Limit</span>
        <span style={{marginLeft:'50px'}}>Lizenzart</span>
        </div >
        <div className="db42" >
        <span>20000€/Monat:</span>
        <span style={{marginLeft:'15px'}}>MGA</span>
        </div>
        </div>
        <hr className="hr1"/>
        <span className="text-footer"> 18+. AGB gelten. Verantwortungsbewusstes Spielen</span>   
        </>
    )
}