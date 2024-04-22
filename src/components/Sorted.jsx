
import { useDispatch, useSelector } from "react-redux";
import SelectSort from "../UI/select/selectsort";
import arrow from './img/arrow.svg'
import './sorted.css'
import cross from './img/cross.svg'
import { DelElmSort } from "../redux/Slicer";
import Select from "../UI/select/select";

const data = [
    {id:1, title:'Sort'},
    {id:2, title:'Nach Bewertung'},
    {id:3, title:'Nach Höhe der Prämie'},
    {id:4, title:'Durch Neuheit'},
]
const data2 = [
    {id:1, title:'Deposit Methoden'},
    {id:2, title:'A1'},
    {id:3, title:'Binance'},
    {id:4, title:'iDebit'},
    {id:5, title:'O2'},
    {id:6, title:'PayPal'},
    {id:7, title:'ROMA'},
    {id:8, title:'Sepa'},
]
export default function Sorted (){
    const add = useSelector(state=>state.stateManeger.add)
    const dispatch = useDispatch()
    console.log(add);
    
    return(
        <div>
        <div className="sorted">
         <SelectSort imgi={arrow} data={data}/>
         <SelectSort imgi={arrow} data={data2}/>
         <SelectSort imgi={arrow} data={data}/>
         <SelectSort imgi={arrow} data={data}/>
         </div>
        <div className="wrapper-filterIcons"> 
        {add.map((item)=>
        <div 
        className="filterIcons">{item} 
        <img
         alt="cross" 
         src={cross} 
         onClick={()=>{dispatch(DelElmSort(item))}}
         />
         </div>)}
         </div>
        </div>
       
        
    )
}  