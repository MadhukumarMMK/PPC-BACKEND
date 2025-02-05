const mongoose = require('mongoose')

const sampleSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone: {
        type : String,
    },
    city : {
        type : String
    }

})

module.exports = mongoose.model('Sample', sampleSchema)