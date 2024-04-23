import { useDispatch } from 'react-redux';
import './checkbox.css'
import { addSort } from '../../redux/Slicer';

export default function ChechSelect(item) {

    const dispatch = useDispatch()

    return (
        <>
        <label class="checkbox style-c" >
        <input type="checkbox"/>
        <div class="checkbox__checkmark" onClick={e=>{dispatch(addSort(item.item.title))}}></div>
        <div class="checkbox__body">{item.item.title}</div>
        </label>
        </>
    )
}