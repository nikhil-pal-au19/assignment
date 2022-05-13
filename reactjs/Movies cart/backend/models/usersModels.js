const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    movie:{
        type:String,
        required:[true, "please add movie name"]
    },

    rating:{
        type:Number,
        required:[true, "please add rating"]
    },

    releaseDate:{
        type:String,
        required:[true, "please add Date"]
    },

})

module.exports = mongoose.model('User', userSchema)