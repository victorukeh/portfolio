import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import avater from "../../styles/images/avater2.png"
// import me from "../../styles/images/me.png"

const Avater = () => {
    return (
        <div className="avater">
            <LazyLoadImage src={avater} alt="Avater" />
         
        </div>
    )
}

export default Avater