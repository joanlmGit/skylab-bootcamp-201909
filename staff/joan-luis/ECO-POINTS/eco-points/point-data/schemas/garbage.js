const { Schema } = require('mongoose')

module.exports =  new Schema({
     
    location: {
        type: "Point",
        coordinates: []
    },
   

    description: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        required: true,
        default: 'false'
        
    }
    
})