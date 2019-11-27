const { Schema, ObjectId } = require('mongoose')

module.exports =  new Schema({
    
    Location: {
        latitude: Number,
        longitude: Number   
    }
})