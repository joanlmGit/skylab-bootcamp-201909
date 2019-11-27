const { model } = require('mongoose')
const { user, points } = require('./schemas')

module.exports = {
    User: model('User', user),
    Points: model('Points', points)
}