import React from 'react'
import { VscCircleFilled } from "react-icons/vsc"
const HeaderLink = ({ value, text, setActive }) => {
    return (
        <div className={value ? 'header__links__container__active' : 'header__links__container'} onClick={setActive}>
            {value && <VscCircleFilled size={10} className="header__links__li" style={{ position: "absolute", top: "25" }} />}
            <a className="header__links__li" href="#home">{text}</a>
        </div>
    )
}

export default HeaderLink