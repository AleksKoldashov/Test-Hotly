import { useState } from 'react'
import './index.css'
import cilc from './cicl.svg'

export default function BtnInfo(params) {
const [drop, setDrop]=useState({a:'none'})
const [togl, setTogl]=useState(true)

const handelClick=()=>{
    setTogl(!togl)
    if(togl){
        setDrop({a:'block', b:'select-block-1'})
    }else{
        setDrop({a:'none', b:'select-block'})
    }
}

console.log(togl);

    return(
        <div className='img_info'>
            <button className="btn_sort_info"  onClick={()=>{handelClick()}}>Affilate Disclosure</button>
            <img alt='cil' src={cilc} />
            <div className='info_drop' style={{display:`${drop.a}`}}>
            Bei AustriaWin24 listen und empfehlen wir Casinos absolut kostenlos für Sie. Wenn Sie sich über
             unseren Partnerlink in einem Casino registrieren und eine Einzahlung tätigen, 
             verdient AustriaWin24 eine Provision. Dies beeinflusst nicht die Objektivität unserer Bewertungen und Ressourcen, 
             da wir eine vollständig unabhängige Vergleichsseite für Online-Casinos sind.
            </div>
        </div>
    )
}