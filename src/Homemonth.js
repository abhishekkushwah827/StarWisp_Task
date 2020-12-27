import React from 'react';
import "./Home_month.css";


function Homemonth({ text, text2, imgsrc }) {
    return (
        <div className="month">
            < span id="heading">{text}</span>
            <hr></hr>
            <span id="num">{text2}</span>
            <img src={imgsrc} alt="graph" />
        </div>
    )
}

export default Homemonth;
