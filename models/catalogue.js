var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var catalogue = new Schema({
    no: {
        type : Number,
        required: true,
    },
    status:  {
        type: String,
        required: true,
        default: 'waiting' //waiting, ready, live, done
    },
    start_date: {
        type : Date,
        required: true,
    },
    end_date: {
        type : Date,
        required: true,
    },
    end_time: {
        type : Date,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Catalogue', catalogue);
