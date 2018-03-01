var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var AdminSchema = mongoose.Schema({
	name: {
		type: String,
		index:true,
        required: true
	},
	password: {
		type: String,
        required: true
	},
    role: {
        type: String,
        default: 'manager',
        required: true
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

var Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.createAdmin = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
};

module.exports.getUserByUsername = function(name, callback){
    // console.log('getUserByUsername');
	var query = {name: name};
	Admin.findOne(query, callback);
};

module.exports.getUserById = function(id, callback){
    //console.log('getUserById');
    Admin.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    //console.log('comparePassword');
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
};