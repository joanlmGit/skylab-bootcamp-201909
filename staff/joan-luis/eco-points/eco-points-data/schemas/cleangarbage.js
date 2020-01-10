const { Schema, ObjectId } = require('mongoose')

module.exports =  new Schema({
    
    user: { 
        type: ObjectId, 
        ref: 'user'
    },
    
    
    garbage: { 
        type: ObjectId, 
        ref: 'garbage'
    },
    

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    
})
