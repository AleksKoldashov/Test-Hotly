import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { addSort } from '../../redux/Slicer'
import galoch from './galoch.svg'
import { useState } from 'react'
import ChechSelect from './checkbox'

export default function SelectDrop({data2, name, w, hidth}) {

    const [drop, setDrop]=useState({a:'none', b:'select-block'})
    const [togl, setTogl]=useState(true)


    const handelClick=()=>{
        setTogl(!togl)
        if(togl){
            setDrop({a:'block', b:'select-block-1'})
        }else{
            setDrop({a:'none', b:'select-block'})
        }
    }
        return(
            <div className='wrapper-selectDrop'>
                <div className={drop.b} onClick={()=>{handelClick()}}>
                    <h4>{name}</h4>
                    <img alt='galoch' src={galoch}/>
                </div> 
                <div className="selectDrop" style={{display:`${drop.a}`,width:`${w}`,height:`${hidth}`}}>
                   {data2.map((item)=><ChechSelect key={item} item={item}/>)}
                </div>
               
            </div>
        )
    }