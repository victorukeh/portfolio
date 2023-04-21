import React from 'react'
import { Helmet } from "react-helmet";

const World = () => {
    return (
        <><div className="world">
            <div className="world-bg"></div>
            <div className="world-globe">
                <div className="world-globe-pole"></div>
                <div className="world-globe-doms-container"></div>
                <div className="world-globe-halo"></div>
            </div>
        </div></>
    )
}

export default World