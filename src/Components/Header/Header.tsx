import './Header.css'
import {BiSearchAlt2} from 'react-icons/bi'

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <h2>Justa Falta</h2>
        </div>

        <div className="search-bar">
            <BiSearchAlt2 className="icon"/>
            <input type="text" className="search-input" placeholder="Pesquisar"/>
        </div>
    </header>
  )
}

export default Header