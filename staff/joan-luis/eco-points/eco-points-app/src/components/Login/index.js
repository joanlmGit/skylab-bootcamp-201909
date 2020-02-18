import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import Feedback from '../Feedback'
const imageSRC= "/images/cuidado-natura.png"

export default function({ onLogin,  error }) {
    return <body className="body-login">
        <h1>Eco Points</h1>
        <section className="view-login">
        <form onSubmit={function (event) {
            event.preventDefault()

            const { username: { value: username }, password: { value: password } } = event.target

            onLogin(username, password)
        }}>
            <img className="avatar" src={`${imageSRC }`}  alt="Avatar Image"></img>
            <h2 className="login__title">Login</h2>
            <input className="login__field" type="text" name="username" placeholder="username" />
            <input className="login__field" type="password" name="password" placeholder="password" />
            <input type="submit" className="login__submit"></input>
            <Link className="loging__link" to='/register'>Go to Regiser</Link>
            <Link className="loging__link" to='/'>Go to Map</Link>
        </form>

        {error && <Feedback message={error} />}
    </section>
    </body>
}