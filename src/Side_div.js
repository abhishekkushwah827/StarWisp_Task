import React from 'react';
import "./Side_div.css";


function Side_div({ boximg, head, para, time }) {
    return (
        <div>
            <div className="f1">
                <div className="img">
                    <img src={boximg} alt="" />
                </div>
                <div className="content">
                    <span id="admin">{head}</span>
                    <p id="para">{para}</p>
                    <span id="time">{time}</span>

                </div>

            </div>
            <hr />
        </div>
    )
}

export default Side_div;
