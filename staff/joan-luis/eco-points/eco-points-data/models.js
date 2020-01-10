const { model } = require('mongoose')
const { user, garbage, cleangarbage } = require('./schemas')

module.exports = {
    User: model('User', user),
    Garbage: model('Garbage', garbage),
    //Cleangarbage: model('Cleangarbage', cleangarbage), 
}