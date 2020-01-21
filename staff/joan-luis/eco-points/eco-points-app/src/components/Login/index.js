import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import Feedback from '../Feedback'

export default function({ onLogin,  error }) {
    return <section className="view-login">
        <form onSubmit={function (event) {
            event.preventDefault()

            const { username: { value: username }, password: { value: password } } = event.target

            onLogin(username, password)
        }}>
            <h1 className="login__title">Login</h1>
            <input className="login__field" type="text" name="username" placeholder="username" />
            <input className="login__field" type="password" name="password" placeholder="password" />
            <input type="submit" className="login__submit"></input>
            <Link className="loging__link" to='/register'>Go to Regiser</Link>
            <Link className="loging__link" to='/'>Go to Map</Link>
        </form>

        {error && <Feedback message={error} />}
    </section>
}