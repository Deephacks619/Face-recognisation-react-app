import React from 'react';
import './Face.css';

const Face=(props)=>{
    return(
        <div style={{display:"flex",justifyContent:"center"}}>
            <div className="absolute mt2" id="dd">
                <img id="faces" className="image" alt="img comes here" src={props.imgurl}></img>
                <div className="border-box"
                    style={{top:props.box.topcol,left:props.box.leftcol,
                    bottom:props.box.bottomcol,right:props.box.rightcol}}
                >   
                </div>
            </div>
        </div>
    )
}
export default Face;