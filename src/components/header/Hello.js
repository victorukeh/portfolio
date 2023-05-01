import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
const Hello = () => {
    return (
        <div className="hello">
            <div className="hello__wave">
                <LazyLoadImage src="https://drive.google.com/uc?export=view&id=1wUjjT0uv1XyqRJoqVX-LX0nIgIQ3oREV" alt="Wave" />
            </div>
            <div className="hello__greetings">
                <p>Hello, I am</p>
                <h1>Victor</h1>
            </div>
        </div>
    )
}

export default Hello