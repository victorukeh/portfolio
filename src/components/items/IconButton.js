import React from 'react'
import "../../styles/css/header.css"
const IconButton = ({ icon, background, color }) => {
    return (
        <div className='icon__button' style={{
            backgroundColor: `${background}`,
            color: `${color}`, marginBottom: "5px", cursor: "pointer"
        }}>
            {icon}
        </div>
    )
}

export default IconButton