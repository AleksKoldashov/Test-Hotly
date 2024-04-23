
import { useDispatch, useSelector } from "react-redux";
import SelectSort from "../UI/select/selectsort";
import arrow from './img/arrow.svg'
import './sorted.css'
import cross from './img/cross.svg'
import { DelElmSort, RemoveSort } from "../redux/Slicer";
import SelectDrop from "../UI/select/select";
import BtnInfo from "../UI/Btn_info/BtnInfo";
import BtnAllFilter from "../UI/BtnAllFilter/BtnAllFilter";


const data = [
    {id:2, title:'Nach Bewertung'},
    {id:3, title:'Nach Höhe der Prämie'},
    {id:4, title:'Durch Neuheit'},
]
const data2 = [
    {id:2, title:'A1'},
    {id:3, title:'Binance'},
    {id:4, title:'iDebit'},
    {id:5, title:'O2'},
    {id:6, title:'PayPal'},
    {id:7, title:'ROMA'},
    {id:8, title:'Sepa'},
]
const data3=[
    {id:1, title:'Malta Gaming Authority (MGA)'},
    {id:2, title:'Gibraltar Gambling Commission'},
    {id:3, title:'Curacao eGaming'},
    {id:4, title:'Kahnawake Gaming Commission'},
    {id:5, title:'Swedish Gambling Authority'},
    {id:6, title:'Danish Gambling Authority'},
    {id:7, title:'New Jersey Division of Gaming Enforcement'},
]


export default function Sorted (){
    const add = useSelector(state=>state.stateManeger.add)
    const dispatch = useDispatch()
  
    return(
        <div>
      
        <div className="sorted">
        <h1 className="header_sort">Die besten online Glücksspiel Angebote </h1>
        <div className="sorted_block">
         <SelectSort imgi={arrow} data={data}/>
         <SelectDrop data2={data2} name='Deposit Methoden'/>
         <SelectDrop data2={data3} name='Lizenzen' w='376px' hidth='220px'/>
         <SelectDrop data2={data3} name='Bonusprogramm'/>
         <BtnInfo/>
         <BtnAllFilter/>
        </div>
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
         <button onClick={()=>{dispatch(RemoveSort())}} className="clearAll">Clear All</button>
         </div>
   
        </div>
       
        
    )
}  