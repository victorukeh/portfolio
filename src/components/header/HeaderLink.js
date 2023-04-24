import React from 'react'
import { VscCircleFilled } from "react-icons/vsc"
const HeaderLink = ({ text,  id }) => {
    const reference = window.location.href
    const result = reference.split("/#")[1] || "home"
    return (
        <div className={result === id ? 'header__links__container__active' : 'header__links__container'}>
            {result === id && <VscCircleFilled size={10} className="header__links__li" style={{ position: "absolute", top: "25" }} />}
            <a className="header__links__li" href={`#${id}`} id={`#${id}`}>{text}</a>
        </div>
    )
}

export default HeaderLink