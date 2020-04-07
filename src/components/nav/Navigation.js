import React from 'react';
import './Navigation.css'
const Navigation=(props)=>{
        if(props.issignedin){
        return(
            <div className="nav">
                <p onClick={()=>props.routechange('signout')}
                className="navbar"
                ><a href=" ">Sign Out</a></p>
            </div>
        );
        }
        else{
            return(
                <div className="nav">
                    <p onClick={()=>props.routechange('signin')}
                    className="navbar"
                    ><a href=" ">Sign in</a></p>
                </div>
            );
        }
}
export default Navigation;