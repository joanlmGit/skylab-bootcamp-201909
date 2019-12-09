import React from 'react'
//import './index.sass'
import {link} from 'react-router-dom'

export default function({ onRegister, onLogin }) {
    return <section className="view landing">
        <h1 className="landing__title">Welcome to Tasks App </h1>
        <link to= { {pathname: '/Login'} }>Go Back</link>
        <link to= { {pathname: '/Register'} }>Register</link>
    </section>
}