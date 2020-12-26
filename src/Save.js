import React from 'react';
import "./save.css";


function Save({ titlee, uimg, username }) {


    return (
        <div className="save">



            <div>
                <img src={uimg} alt="img" />
            </div>
            <div className="save__userpara">
                <span>{username}</span>
                <p>{titlee} </p>
            </div>
            <div className="save__time">
                <span>12:40 PM</span>
            </div>
        </div>
    )
}

export default Save;
