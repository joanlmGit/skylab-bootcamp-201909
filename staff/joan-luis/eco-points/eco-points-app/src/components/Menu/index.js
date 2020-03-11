import React from 'react'
import './index.css'
export default function({name}){
 
    
    
    return  <>
        <header className="landing__menu">
            <h1 className = 'landing-title'>Eco Points</h1>
            {name ? <h3 className="landing-user">{name}</h3> : "" }
            <nav className = 'landing__nav'>
               <li className="landing_list"> <a className = 'landing__button' href = '/#/register'>Register</a></li>
               <li className="landing_list"> <a className = 'landing__button' href = '/#/login'>Log In</a></li>
               <li className="landing_list"> <a className = 'landing__button' href = '/#/Addgarbage'> Add Garbage Point</a></li>
               <li className="landing_list"> <a className = 'landing__button' href = '/#/Galery'>Galery</a></li>
               <li className="landing_list"><a className = 'landing__button' href = '/#/About'>About</a> </li>
            </nav>

        </header>
        
    </>
}






