import { useDispatch } from 'react-redux';
import './index.css'
import { addSort } from '../../../redux/Slicer';

export default function CheckboxSort({item}) {
    const dispatch = useDispatch()
    
    return(
        <div>
            <label class="checkbox style-y">
            <input type="checkbox"/>
            <div class="checkbox__checkmark-y"></div>
            <div class="checkbox__body-y" onClick={()=>{dispatch(addSort(item.title))}}>{item.title}</div>
            </label>
        </div>
    )
}