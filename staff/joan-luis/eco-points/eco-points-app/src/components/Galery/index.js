import React, {useEffect} from 'react'
import Logic from '../../logic'
import './index.css'

function Galery(){

    useEffect( ()=>{

        (async () =>{

            const pictures= await Logic.listImages()

        })


    })





}
export default Galery