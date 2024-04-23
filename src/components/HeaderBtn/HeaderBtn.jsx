import MyBtn from '../../UI/MyBtn/MyBtn'
import './index.css'
import logo from './logo.svg'
import galoch from './galoch.svg'

export default function HeaderBtn() {
   
   
   return(<>
    <div className='header_btn'>
        <img alt='logo' src={logo}/>
        <MyBtn title='Bonus'/>
        <button className='btn_h_drop'>
            Casinos
            <img alt='galoch' src={galoch}/>
            </button>
        <MyBtn title='Spieler'/>
        <MyBtn title='WIN 24 Club'/>
        <MyBtn title='Karriere'/>
    </div>
    </>)
}