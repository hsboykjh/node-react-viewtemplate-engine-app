var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Agent = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date(),
        required: true
    }
});

var agency = new Schema({
    name: {
        type: String
    },
    agent: {
        type: [Agent]
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    overview: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date(),
        required: true
    },
    updated_at: {
        type: Date,
        default: new Date()
    }}
);

module.exports = mongoose.model('Agency', agency);
