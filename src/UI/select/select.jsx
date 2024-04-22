import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { addSort } from '../../redux/Slicer'

export default function Select({data}) {
    const count = useSelector((state) => state.stateManeger)
    const dispatch = useDispatch()
    
    
    
    
        return(
            <div>
                <div>
                    <select>
                    {data.map((item)=><option multiple value={item.title}> <input type="checkbox"/></option>)}     
                    </select>   
                </div>     
                <form>
<p>
	<input type="checkbox" name="cbox" value="one"/>
	<input type="checkbox" name="cbox" value="two" checked="checked"/>
	<input type="checkbox" name="cbox" value="three"/>
	<input type="checkbox" name="cbox" value="four" checked/>
	<input type="checkbox" name="cbox" value="five"/>
</p>
</form>
            </div>
        )
    }