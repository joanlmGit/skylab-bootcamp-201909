import React from 'react'
import Feedback from '../Feedback'



export default function({ onSaveGarbage, error }) {

    return <section className = "view landing">
        <form onSubmit = { function (e) {
            e.preventDefault()

            const {name: { value:name }, upload: {value: value}}= event.target


        }}>
                <h1 className='map__title'>Welcome to Eco Points </h1>
                
                <input class="loadpicture__user" type="text" name="name_user" placeholder="enter your name"></input>
                <input class="loadpicture__upload" type="file" name="upload" enctype="form-data"> </input>
                <button class="load_submit">Submit</button>
            
        }}
        </form>
    </section>

}

