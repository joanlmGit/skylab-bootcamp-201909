import React, { useState } from 'react'
import Feedback from '../Feedback'
import { ContentError } from 'eco-points-utils'
import {Link} from 'react-router-dom'
import uploadImage from '../../utils/upload-picture'
import './index.css'
import Logic from '../../logic'




export default function ({ error }) {

    

    function handleSetData(event, error) {
        event.preventDefault()
        
        const { target: { username: { value: username }, image: { files: [image] } } } = event


        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude;

            (async (latitude, longitude) => {
                try {
                    await handleCreateGarbage(latitude, longitude, username, image)
                } catch (error) {
                    console.log(error)
                }
            })(latitude, longitude)
        }, error => console.log(error.message))





        async function handleCreateGarbage(latitude, longitude, username, image) {
            
            try {
                let status = false
                const res = await Logic.createGarbage(latitude, longitude, username, status)
                const idGarbagePoint = res.id
                
                await uploadImage(idGarbagePoint, image)
                //pasamos los datos para para renderizar el mapa con el punto i posiblemente la imagen para poner popup
            } catch (error) {
                throw new Error(error.message)
            }
        }
    }
        return <section className="view-landing">
            <img url="../../images/cuidado-natura.png" className="avatar" alt="Avatar Image"></img>
            <h1>Add garbage Here</h1>
            <form className="addGarbage" encType="multipart/form-data" onSubmit={handleSetData}>
                
                <input type="text" name="username" placeholder="enter your name"></input>
                <input type="file" name="image" accept="image/*" placeholder="select file"></input>
                <input className="save_garbage" type="submit" value="add garbage"></input>
                <Link className="landing__link" to='/register'>Go to Regiser</Link>
                <Link className="landing__link" to='/'>Go to Map</Link>

            </form>
            {error && <Feedback message={error} />}
        </section>


}

