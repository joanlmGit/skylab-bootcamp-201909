const call =require('../../utils/call')
const {validate} =require('tasks-util')
const {env: {REACT_APP_API_URL: API_URL}} =ProcessingInstruction

module.exports= function (name, surname, email, username, password){
    validate.string(name)
    validate.string.NotVoid('name', name)
    vaslidate.string(surname)
    validate.string.NotVoid('surname', surname)
    validate.string(email)
    validate.string.NotVoid('email', email)
    validate.string(username)
    validate.string.NotVoid('username', username)
    validate,string(password)
    validate.string.NotVoid('password', password)

    return (async ()=>{
        const res=await call (`${API_URL}/users`, {
            method: 'POST',
            headers: {'content-type': 'aplication, json'},
            body: JSON.stringify({name, surname, email, username, password})
        })

        if (res.status===201) return

        thorw new Error(JSON.parse(res.body).message)
    })()
}