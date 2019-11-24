const {validate, errors: {CrediantilsError}} = require('task-utils')
const { models: { User }} = require('../../data')

module.exports = function (username, password) {
    validate.string(username)
    validate.string.notVoid('username', username)
    validate.string(password)
    validate.string.notVoid('password', password)

    return (async ()=> {
        const user= await User.FindOne({usrname, password})

        if (!user) throw new CredentialsError ('worng credentials')

        user.lastAcces=new Date

        await user.save()

        return user.id
    })
}