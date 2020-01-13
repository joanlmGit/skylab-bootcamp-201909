import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logic from '../../logic'
import './index.css'
const myPicture=require ('./fisura-silfra-4.jpg')



function Galery(pictures){

    
    useEffect( ()=>{
        
        (async () =>{
            try{
                pictures= await Logic.listPictures
            }catch(error){
                console.log(error.message)
            }

        })()
    })

    return <>
    <div className="view-galery">
        <ul className="galery__container">
         {/*    {pictures.forEch((item,)=> {  //
                //<li className="container__item"><img className="item-image" src = {item} /></li>
            })} */}
            <li className="container__item"><img className="item-image" src={myPicture}/></li>
        </ul>
        <Link className="galery-link" to='/'>Go to Map</Link>
    </div>
    </>

}
export default Galery