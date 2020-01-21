import React from 'react'
//import './index.css'
import {link} from 'react-router-dom'

export default function({ onRegister, onLogin }) {
    return <section className="view feedback">
        <h1 className="landing__title">Welcome to Eco Point App </h1>
        <link to= { {pathname: '/'} }>Go Back</link>
       
    </section>
}