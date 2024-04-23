import { useState } from 'react'
import './index.css'
import img1 from './img1.svg'

export default function BtnAllFilter(params) {

const [togl, setTogl]=useState(true)
const [col, setCol]=useState({a:'white',b:'black'})
const handelClick=()=>{
    setTogl(!togl)
    if(togl){
        setCol({a:'rgba(10, 81, 76, 1)', b:'white'})
    }else{
        setCol({a:'white',b:'black'})
    }
}

    return(
        <>
        <button className='btn_all_filter' style={{backgroundColor:`${col.a}`,color:`${col.b}`}} onClick={()=>{handelClick()}}> <img alt='df' src={img1}/><span>All Filters</span></button>
        </>
    )
}