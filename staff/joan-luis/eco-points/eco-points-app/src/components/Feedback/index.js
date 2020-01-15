import React from 'react'
//import './index.sass'
import {link} from 'react-router-dom'

export default function({ onRegister, onLogin }) {
    return <section className="view landing">
        <h1 className="landing__title">Welcome to Eco Point App </h1>
        <link to= { {pathname: '/'} }>Go Back</link>
       
    </section>
}