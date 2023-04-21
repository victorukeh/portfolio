import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Wave from "../../styles/images/wave.png"
const Hello = () => {
    return (
        <div className="hello">
            <div className="hello__wave">
                <LazyLoadImage src={Wave} alt="Wave" />
            </div>
            <div className="hello__greetings">
                <p>Hello, I am</p>
                <h1>Victor</h1>
            </div>
        </div>
    )
}

export default Hello