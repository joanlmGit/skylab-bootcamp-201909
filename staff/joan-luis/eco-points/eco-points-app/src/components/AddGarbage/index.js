import React, { useState } from 'react'
import Feedback from '../Feedback'
import {ContentError} from '../../../../eco-points-utils/errors'
import Context from '../Context'






 function addGarbage({ onGarbage, error }) {
    debugger
    /*const [UploadImage, setUploadImage] = useState('')
    const [name_user, setname_user] = useState('')*/

    debugger

    async function handleUploadImage(e){
        e.preventDefault()
        try{
            const {username: { value: username }, file: { files : [image]}} = e.target
            
            onGarbage(username,image )
            
        } catch(error){
            ContentError(error.message)
        }
    }

    return <section className="view landing">
        <form className="addGarbage" encType="multipart/form-data" onSubmit= { handleUploadImage }>
            <h1 className='map__title'>Welcome to Eco Points </h1>
            <label>Enter your name</label>
            <input type="text" name="username" placeholder="enter your name"></input>
            <label>Upload image </label>
            <input type="file" name="file" className="file" accept="image/jpg/npg"></input>
            <button className="save_garbage">Submit</button>


        </form>
        {error && <Feedback message={error} />}
    </section>

}

export default addGarbage
/* 
    const dataForm = input.files[0];

    var fd = new FormData();
    fd.append("file", dataForm); */