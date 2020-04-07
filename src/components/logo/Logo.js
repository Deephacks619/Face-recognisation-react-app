import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'

const Logo=()=>{
    return(
        <div className="logo">
            <Tilt className="Tilt br5 shadow-5" options={{ max : 35 }} style={{ height: 140, width: 140 }} >
             <div className="Tilt-inner"> DK </div>
            </Tilt>
        </div>
    );
}
export default Logo;