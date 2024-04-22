import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { addSort } from '../../redux/Slicer'



export default function SelectSort({imgi, data}) {

const count = useSelector((state) => state.stateManeger)
const dispatch = useDispatch()




    return(
        <div>
            <span class="select-sort-wrapper">
                <select 
                name="select-sort" id="select-sort"
                onChange={(e)=>dispatch(addSort(e.target.value))}
                >
                    {data.map((item)=><option value={item.title} key={item.id}>{item.title}</option>)}
                </select>
                <img src={imgi} alt='arrow'/>
            </span>     
        </div>
    )
}