import React, {useState} from 'react'
import Feedback from '../Feedback'
//import './index.css'
import {lat, lng} from '../../utils/retrieve-geo-location'


export default function({ onGarbage, error }) {
    
    const [UploadImage, setUploadImage] = useState('')
    const [name_user, setname_user]=useState('')
    

   
    return <section className = "view landing">
        <form className="addGarbage" enctype="multipart/form-data" onSubmit = { function (event) {
            event.preventDefault()

            const { name: { value: name_user } } = event.target.value
            const {UploadImage: { value: UploadImage }}= event.target.files[0]
            const dataForm = UploadImage
            let fs = new FormData()

            fs.append("file", dataForm)
            console.log(dataForm)
            onGarbage(name_user, fs)
            setUploadImage('')
            setname_user ('')

        }}>
                <h1 className='map__title'>Welcome to Eco Points </h1>
                
                <input  type="text" name="name_user" placeholder="enter your name"></input>
                <input  type="file" name="UploadImage" accept="image/png" > </input>
                <button className="load_submit">Submit</button>
            
        
        </form>
        {error && <Feedback message={error} />}
    </section>

}

//formData.append("userfile", fileInputElement.files[0]);
/* const dataForm = document.getElementsByClassName('addGarbage')
    const dataForm = input.files[0];
    
    var fd = new FormData();
    fd.append("file", dataForm); */