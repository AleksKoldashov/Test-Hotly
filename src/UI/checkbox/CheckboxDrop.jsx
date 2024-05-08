import './index.css'

export default function CheckboxDrop(item) {
    const elem = item.item
    return(
        <>
            <label className="checkbox style-d">
            <input type="checkbox"/>
            <div className="checkbox__checkmark"></div>
            <div className="checkbox__body">{elem.name}</div>
            </label>
        </>
    )
}