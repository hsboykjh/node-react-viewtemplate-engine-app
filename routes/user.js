const express = require('express');
const router = express.Router();
const User = require('../models/user'); // get our mongoose model
const auth = require('../modules/auth');

router.get('/', auth.loginCheck, auth.roleCheck('users'), function(req, res) {
    User.find({}, function(err, users) {
        res.render('users/users', {
            data: users,
            user: res.locals.user
        });
    });
});

router.get('/:id', auth.loginCheck, auth.roleCheck('users'), function(req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return next(err);
        }

        console.log("user : ",user);
        res.render('users/user_detail', {
            data: user,
            user: res.locals.user
        });
    });
});

module.exports = router;