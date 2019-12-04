import React from 'react'
//import './index.sass'
import Feedback from '../Feedback'

export default function({ , error }) {//se debe incluir la accio que dispara la carga del compo, en este caso, landing
    return <section className="view loadpicture">
        <form onSubmit={function (event) {
            event.preventDefault()

            const { name: { value: name }, upload: { value: upload } } = event.target //elementos del compo html

            onload(username, password) //los elemento que va a tratar
        }}>
            
        </form>

        {error && <Feedback message={error} />}
    </section>
}