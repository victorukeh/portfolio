import React from 'react'
import {Button} from "@mui/material"
const Card = ({ logo, title, type, color, date, size , view}) => {
    return (<div className="education__card">
        <div className="education__card__top">
            <div className="education__info">
                <div className="education__info__logo" style={{ backgroundColor: color }}>
                    <img alt="" src={logo} height="50"/>
                </div>
                <div className="education__info__details">
                    <h3>{title}</h3>
                    <p>{type}</p>
                </div>
            </div>
            <div className="education__date">
                <p>{date}</p>
            </div>
        </div>
        <div className="education__card__bottom">
           <Button disabled={!view ? true : false}><a href={view} target="_blank" style={{textDecoration: "none", color: "white"}}>VIEW CERTIFICATE</a></Button> 
        </div>
    </div>
    )

}
export default Card;