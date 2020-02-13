/* eslint-disable no-unused-expressions */
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import logic from '../../logic'
import './index.css'
const REACT_APP_API_URL=process.env.REACT_APP_API_URL






function Galery(error){
    
    let [pictures, setPictures]=useState()
    useEffect(()=>{
      debugger
        (async () =>{
            try{
              pictures= await logic.listPictures()
              setPictures(pictures)
            }catch(error){
                console.log(error.message)
            }
            
        })(pictures)
        
    },[])

    return <>
     <div className="view-galery">
        <h1>Eco Points Galery </h1> 
        <ul className="galery__container">
            {pictures && pictures.map(item => {return <> <li key={item.index} className="container__item"><img key={item.index} className="item-image" src= {`${REACT_APP_API_URL + item.file}`}/></li></>})} 
        </ul>
       <Link className="galery-link" to='/'>Go to Map</Link> 
    </div> 
    </>

}
export default Galery