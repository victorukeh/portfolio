import React from 'react'
const Card = ({ logo, title, type, color, date }) => {
    return (<div className="education__card">
        <div className="education__card__top">
            <div className="education__info">
                <div className="education__info__logo" style={{ backgroundColor: color }}>
                    <img alt="" src={logo} height="40" />
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
            <p>View Certificate</p>
        </div>
    </div>
    )

}
export default Card;