import { useDispatch } from 'react-redux';
import './index.css'
import { addSort } from '../../../redux/Slicer';

export default function CheckboxSort({item}) {
    const dispatch = useDispatch()
    
    return(
        <div>
            <label className="checkbox style-y">
            <input type="checkbox"/>
            <div className="checkbox__checkmark-y"></div>
            <div className="checkbox__body-y" onClick={()=>{dispatch(addSort(item.title))}}>{item.title}</div>
            </label>
        </div>
    )
}