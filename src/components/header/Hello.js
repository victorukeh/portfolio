import React from 'react'
import Wave from "../../styles/images/wave.png"
const Hello = () => {
    return (
        <div className="hello">
            <div className="hello__wave">
                <img src={Wave} alt="" />
            </div>
            <div className="hello__greetings">
                <p>Hello, I am</p>
                <h1>Victor</h1>
            </div>
        </div>
    )
}

export default Hello