import React from "react";

const Circle = ({ radius, text, photo, marginTop, marginLeft }) => {
    return (
        <div className="header__item" style={{ marginTop: marginTop, marginLeft: marginLeft }}>
            <div className="header__circle" style={{ height: radius, width: radius, backgroundImage: `url(${photo})` }}>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Circle;
