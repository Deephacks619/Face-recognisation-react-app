import React from 'react';

const Signin =(props) =>{
    return(
        <article className="br2 ba dark-gray b--black-10 mv4 w-90 w-80-m w-25-l shadow-4 mw6 center">
            <main className="pa4 black-80" style={{fontFamily:"cursive",fontWeight:"bold"}}>
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                     </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                         type="submit"
                          value="Sign in"
                          onClick={()=>props.routechange('home')}
                           />
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={()=>props.routechange('register')} className="f4 link dim black db pointer">Register</p>
                </div>
            </form>
        </main>
    </article>

    );
}
export default Signin;