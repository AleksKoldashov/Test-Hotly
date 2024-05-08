import './index.css'
import arrow from './arrow.svg'
import { useState } from 'react'
import CheckboxSort from '../checkbox/chechboxSort/CheckboxSort'


export default function SelectSort({imgi, data}) {



const [drop, setDrop]=useState({a:'none', b:'white',c:'black'})
const [togl, setTogl]=useState(true)

const handelClick=()=>{
    setTogl(!togl)
    if(togl){
        setDrop({a:'block', b:'rgba(10, 81, 76, 1)',c:'white'})
    }else{
        setDrop({a:'none', b:'white',c:'black'})
    }
}

    return(
        <div className="select-sort-wrapper" onClick={()=>{handelClick()}} style={{backgroundColor:`${drop.b}`, color:`${drop.c}`}}>
           <span>Sort</span>
           <img alt='arrow' src={arrow}/> 
           <div className="selector_sort" style={{display:`${drop.a}`}}>
               {data.map((item,index)=> <CheckboxSort key={index} item={item}/>)}
             
           </div>
        </div>
    )
}

