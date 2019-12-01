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
    
    
    image: {
        type: Array,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        required: true,
        default: 'false'
        
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastAccess: {
        type: Date
    }
})
