import React, {useEffect,useState} from 'react';
import './App.css'
import '../Menu/index.css'
import Landing from '../Landing'
import Menu from '../Menu'
import Register from '../Register'
import Login from '../Login'
import Addgarbage from '../AddGarbage'
import Showpictures from '../Galery'
import { Route, withRouter, Redirect, Router } from 'react-router-dom'
import Logic from '../../logic'



export default withRouter(function ({ history }) {
        
    const [name, setName] = useState()
    
    useEffect(() => {
        const { token } = sessionStorage;
        
        /* (async ()=> {
            if (token){
                const name= await retrieveUser(token)
                setName(name)
            }
        })() */
    }, [sessionStorage.token])

    
    function handleGoMap() { history.push('/') }
    
    async function handleRegister(name, surname, email, username, password) {
        try {
            await Logic.registerUser(name, surname, email, username, password)

            history.push('/login')
        } catch (error) {
            console.error(error)
        }
    }

    async function handleLogin(username, password) {
        try {
            const token = await Logic.authenticateUser(username, password)

            sessionStorage.token = token

            history.push('/')
        } catch (error) {
            console.error(error)
        }
    }
 

    return <>
       
        <Route exact path="/" render={() =>  <Menu/>} />
        <Route exact path="/" render={() =>  <Landing />} />
        <Route path="/Register" render={() => <Register onRegister={handleRegister} /> } />
        <Route path="/login" render={() => <Login onLogin={handleLogin}  />} />
        <Route path="/AddGarbage" render={() => <Addgarbage onGoMap={handleGoMap} />}/>
        <Route path="/Galery" render= {()=> <Showpictures />}/>
       
    </>
})


    