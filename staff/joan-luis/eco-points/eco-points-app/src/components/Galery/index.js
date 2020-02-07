/* eslint-disable no-unused-expressions */
import React, {useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import logic from '../../logic'
import Context from '../Context'
import Feedback from '../Feedback'
import './index.css'




function Galery(error){
    
    let {pictures}=useContext(Context)
    useEffect(()=>{
        debugger
        return (async () =>{
            try{
              pictures= await logic.listPictures()
              
            }catch(error){
                console.log(error.message)
            }
            
        })()
    })

    return <>
    
     <div className="view-galery">
        <ul className="galery__container">
            {pictures && pictures.map((item)=> { <li className="container__item"><img className="item-image" src= {`${item}`}/></li>})} 
        </ul>
        <Link className="galery-link" to='/'>Go to Map</Link>
    </div> 
    </>

}
export default Galery