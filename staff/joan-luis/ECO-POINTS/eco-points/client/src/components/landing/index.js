import React from 'react'
import './index.sass'
import '../map'


export default function({ }) {
    return <section class="view landing">
                <section class="landing__map">
                    <h1 class="map__title">Welcome to Eco Points </h1>
                    <map class= "map"></map>
                </section>
                <section class="Landing__loadpicture">
                    <form action="/images/upload" method="POST" enctype="multipart/form-data">
                        <input class="loadpicture__Username" type="text" name="image"> </input>
                        <input type="file" name="image"> </input>
                <button>
                    Save
                </button>
            
            </form>
        </section>
    </section> 
}