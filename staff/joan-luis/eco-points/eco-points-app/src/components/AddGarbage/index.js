import React, { useEffect } from 'react'
import Feedback from '../Feedback'
import { ContentError } from 'eco-points-utils'
//import retrieveGeoLocation from '../../utils/retrieve-geo-location'
import uploadImage from '../../utils/upload-picture'

import Logic from '../../logic'




export default function ({ error }) {

    

    function handleSetData(event, error) {
        event.preventDefault()
        
        const { target: { username: { value: username }, file: { files: [image] } } } = event


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
        return <section className="view landing">
            <form className="addGarbage" encType="multipart/form-data" onSubmit={handleSetData}>

                <label>Enter your name</label>
                <input type="text" name="username" placeholder="enter your name"></input>
                <label>Upload image </label>
                <input type="file" name="file" accept="image/*"></input>
                <button className="save_garbage">Submit</button>


            </form>
            {error && <Feedback message={error} />}
        </section>


}

