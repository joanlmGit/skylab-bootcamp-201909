import React from 'react'
import Feedback from '../Feedback'



export default function({ onGarbage, error }) {
    
    const [UploadImage, setUploadImage] = useState('')
    const [name_user, setname_user]=userState('')
    

   
    return <section className = "view landing">
        <form className="addGarbage" enctype="multipart/form-data" onSubmit = { function (e) {
            e.preventDefault()

            const { name: { value: name_user }, UploadImage: { value: UploadImage } } = event.target

            onGarbage(name_user, UploadImage)
            


        }}>
                <h1 className='map__title'>Welcome to Eco Points </h1>
                
                <input  type="text" name="name_user" placeholder="enter your name"></input>
                <input  type="file" name="UploadImage" enctype="form-data" accept="image/png" required > </input>
                <button className="load_submit">Submit</button>
            
        }}
        </form>
    </section>

}

//formData.append("userfile", fileInputElement.files[0]);
/* const dataForm = document.getElementsByClassName('addGarbage')
    const dataForm = input.files[0];
    
    var fd = new FormData();
    fd.append("file", dataForm); */