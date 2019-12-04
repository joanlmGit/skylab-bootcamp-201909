const { Schema } = require('mongoose')

module.exports =  new Schema({
     
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
   

    name: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        required: false, // false- not clean, true, clean        
    }
    
})