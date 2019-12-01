const { model } = require('mongoose')
const { user, garbage, action } = require('./schemas')

module.exports = {
    User: model('User', user),
    Garbage: model('Garbage', garbage),
    Action: model('Action', action),
}