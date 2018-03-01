// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    owner_id: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: new Date(),
        required: true
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
});

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', userSchema);