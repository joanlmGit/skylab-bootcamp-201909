import React, {useEffect,useState} from 'react';
//import './index.css'
import Landing from '../Landing'
import Register from '../Register'
import Login from '../Login'
import Addgarbage from '../AddGarbage'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { authenticateUser, registerUser, retrieveUser, createGarabge } from '../../logic' 


export default withRouter(function ({ history }) {
   
   
   
    const [name, setName] = useState()
    
    useEffect(() => {
        const { token } = sessionStorage;

    }, [sessionStorage.token])

    async function handleAddgarbage (location, name, status,uploadimage){
        try{
            await createGarabge ()
        }catch (error){

        }
    }

    
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

    
 



    const { token } = sessionStorage 
 
    return <>
        <Route exact path="/" render={() =>  <Landing/>} />
        <Route path="/Register" render={() => <Register onRegister={handleRegister}  /> } />
        <Route path="/login" render={() => <Login onLogin={handleLogin}  />} />
        <Route path="/AddGarbage" render={() => <Addgarbage onGarbage ={handleAddgarbage}/>}/>
    </>
})


     