const { Schema, ObjectId } = require('mongoose')

module.exports =  new Schema({
    
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    
    
    location: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'location'
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
