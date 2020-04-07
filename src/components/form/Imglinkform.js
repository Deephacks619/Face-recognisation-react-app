import React from 'react';
import './Linkform.css';
const Imglinkform=(props)=>{
    return(
        <div className="link">
            <p>{"Put the image, link or file of image for Face recognition and press detect button !"}</p>
            <div className="br4 shadow-5" id="raj">
                <div className="formula">
                    <input 
                    className="f4 pa2 kane " 
                    type="text" 
                    value={props.inputvalue}
                    onChange={props.inputchange}
                    ></input>
                    <button 
                    onClick={props.clickchange}
                    className=" grow link dib br3 white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    );
}
export default Imglinkform;