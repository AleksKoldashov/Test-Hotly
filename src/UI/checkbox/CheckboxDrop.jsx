import './index.css'

export default function CheckboxDrop(item) {
    const elem = item.item
    return(
        <>
            <label class="checkbox style-d">
            <input type="checkbox"/>
            <div class="checkbox__checkmark"></div>
            <div class="checkbox__body">{elem.name}</div>
            </label>
        </>
    )
}