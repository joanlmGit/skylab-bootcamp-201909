import React, { useState, useEffect } from 'react';
import './index.css'
import Landing from '../Landing'
import Register from '../Register'
import Login from '../Login'

import { Route, withRouter, Redirect } from 'react-router-dom'
import { authenticateUser, registerUser, retrieveUser, listTasks, modifyTask, createTask } from '../../logic' 


export default withRouter(function ({ history }) {
   
   const [location, setLocation]=useState()
   
   
   
    const [name, setName] = useState()
    
    useEffect(() => {
        const { token } = sessionStorage;

    }, [sessionStorage.token])

  

    function handleGoToRegister() { history.push('/register') }

    function handleGoToLogin() { history.push('/login') }

    async function handleRegister(name, surname, email, username, password) {
        try {
            await registerUser(name, surname, email, username, password)

            history.push('/login')
        } catch (error) {
            console.error(error)
        }
    }

    async function handleLogin(username, password) {
        try {
            const token = await authenticateUser(username, password)

            sessionStorage.token = token

            history.push('/board')
        } catch (error) {
            console.error(error)
        }
    }

    function handleGoBack() { history.push('/') }

    function handleLogout() {
        sessionStorage.clear()

        handleGoBack()
    }
 



    const { token } = sessionStorage 

    return <>
        <Route exact path="/" render={() =>  <Landing/>} />
        <Route path="/register" render={() => <Register onRegister={handleRegister} onBack={handleGoBack} /> } />
        <Route path="/login" render={() => <Login onLogin={handleLogin} onBack={handleGoBack} />} />
    </>
})


      