import React, { useState } from 'react';
import "./Notepad.css";
import { useStateValue } from "./StateProvider";
import Save from "./Save.js";
import uimg from "./Images/userimg.png";


function Notepad() {
    const [input, setInput] = useState("");
    const [{ basket }, dispatch] = useStateValue();
    //console.log(basket?.length);


    const share = (event) => {
        //add items to basket
        event.preventDefault();
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                title: input,
                uimg: uimg,
                username: "Username",


            }
        })

        setInput("");
    }


    return (
        <div className="notepad">
            <div className="notepad__first_div">

                <div>
                    <textarea className="note__input" type="text" placeholder=" Share something with your class.." value={input} onChange={event => setInput(event.target.value)} />
                </div>
                <div>

                    <button id="btn1" onClick={() => { setInput("") }}>cancel</button>
                    <button id="btn2" onClick={share}>share</button>
                </div>

            </div>



            <div id="try">


                {basket?.length === 0 ?
                    (
                        <div>

                        </div>
                    ) : (
                        <div>

                            {basket.map(item => (
                                <Save
                                    titlee={item.title}
                                    uimg={item.uimg}
                                    username={item.username} />
                            ))
                            }

                        </div>
                    )}
            </div>

        </div>
    )
}

export default Notepad;
