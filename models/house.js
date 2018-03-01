var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var house = new Schema({
    bed: {
        type: Number
    },
    bath: {
        type: Number,
    },
    car: {
        type: Number,
    },
    loc : {
        type: String,
    },
    owner_id: {
        type: String,
        lowercase: true
    },
    agency: {
        type: Schema.Types.ObjectId,
        ref: 'Agency'
    },
    status: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }}
);

module.exports = mongoose.model('House', house);
